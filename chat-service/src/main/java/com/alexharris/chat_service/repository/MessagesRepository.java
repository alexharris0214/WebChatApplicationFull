package com.alexharris.chat_service.repository;

import com.alexharris.chat_service.models.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface MessagesRepository extends JpaRepository<Message, UUID> {
    Optional<Message> findById(UUID id);
    List<Message> findByConversationId(UUID conversationId);
    Message save(Message messages);
}
