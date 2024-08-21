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

import java.sql.Time;
import java.sql.Timestamp;
import java.time.Instant;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.List;
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
                .conversationId(messageRequest.getConversationId())
                .timestamp(ZonedDateTime.now())
                .build();
        Message messageSaved = messagesRepository.save(message);

        return messageSaved;
    }

    @Override
    public List<Message> getAllMessages(UUID userId) {
        List<UserConversation> userConversations = userConversationsRepository.findByUserId(userId);
        return userConversations.stream()
                .flatMap(uc -> messagesRepository.findByConversationId(uc.getConversationId()).stream())
                .collect(Collectors.toList());
    }

    @Override
    public Conversation createConversation(UUID userId, UUID recipientId) {
        Conversation conversation = new Conversation();
        conversation.setId(UUID.randomUUID());
        conversation.setCreated_at(ZonedDateTime.now());
        Conversation returnedConversation = conversationsRepository.save(conversation);

        UserConversation uc1 = new UserConversation();
        uc1.setUserId(userId);
        uc1.setConversationId(returnedConversation.getId());
        userConversationsRepository.save(uc1);

        UserConversation uc2 = new UserConversation();
        uc2.setUserId(recipientId);
        uc2.setConversationId(returnedConversation.getId());
        userConversationsRepository.save(uc2);

        return returnedConversation;
    }

    @Override
    public void deleteConversation(UUID userId, UUID recipientId) {

    }
}
