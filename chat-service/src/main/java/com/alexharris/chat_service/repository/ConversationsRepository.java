package com.alexharris.chat_service.repository;

import com.alexharris.chat_service.models.Conversation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface ConversationsRepository extends JpaRepository<Conversation, UUID> {
    Optional<Conversation> findById(UUID id);
    Conversation save(Conversation conversations);
}
