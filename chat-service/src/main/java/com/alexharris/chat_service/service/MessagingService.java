package com.alexharris.chat_service.service;

import com.alexharris.chat_service.models.Conversation;
import com.alexharris.chat_service.models.Message;
import com.alexharris.chat_service.models.requests.MessageRequest;

import java.util.List;
import java.util.UUID;

public interface MessagingService {
    public void insertMessage(MessageRequest messageRequest, UUID userId);
    public List<Message> getAllMessages(UUID userId);
    public Conversation createConversation(UUID userId, UUID recipientId);
    public void deleteConversation(UUID userId, UUID recipientId);

}
