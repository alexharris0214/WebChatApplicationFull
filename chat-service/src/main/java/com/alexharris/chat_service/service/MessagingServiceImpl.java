package com.alexharris.chat_service.service;

import com.alexharris.chat_service.models.Conversation;
import com.alexharris.chat_service.models.Message;
import com.alexharris.chat_service.models.UserConversation;
import com.alexharris.chat_service.models.requests.MessageRequest;
import com.alexharris.chat_service.repository.ConversationsRepository;
import com.alexharris.chat_service.repository.MessagesRepository;
import com.alexharris.chat_service.repository.UserConversationsRepository;
import com.alexharris.chat_service.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class MessagingServiceImpl implements MessagingService{
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ConversationsRepository conversationsRepository;
    @Autowired
    private MessagesRepository messagesRepository;
    @Autowired
    private UserConversationsRepository userConversationsRepository;

    @Override
    public Message insertMessage(MessageRequest messageRequest, UUID userId) {
        final String messageText = messageRequest.getText();
        final Message message = Message.builder()
                        .senderId(userId)
                                .text(messageText)
                                        .conversation_id(messageRequest.getConversationId())
                                                .build();
        Optional<Message> messageOptional = messagesRepository.save(message);
        if(messageOptional.isPresent()){
            return messageOptional.get();
        }
        return null;
    }

    @Override
    public List<Message> getAllMessages(UUID userId) {
        List<UserConversation> userConversations = userConversationsRepository.findByUserId(userId);
        return userConversations.stream()
                .flatMap(uc -> messagesRepository.findByConversationId(uc.getConversation_id()).stream())
                .collect(Collectors.toList());
    }

    @Override
    public Conversation createConversation(UUID userId, UUID recipientId) {
        Conversation conversation = new Conversation();
        conversation.setId(UUID.randomUUID());
        conversationsRepository.save(conversation);
        
        UserConversation uc1 = new UserConversation();
        uc1.setUser_id(userId);
        uc1.setConversation_id(conversation.getId());
        userConversationsRepository.save(uc1);

        UserConversation uc2 = new UserConversation();
        uc2.setUser_id(recipientId);
        uc2.setConversation_id(conversation.getId());
        userConversationsRepository.save(uc2);

        return conversation;
    }

    @Override
    public void deleteConversation(UUID userId, UUID recipientId) {

    }
}
