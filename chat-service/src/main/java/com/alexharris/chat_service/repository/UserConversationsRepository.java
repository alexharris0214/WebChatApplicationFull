package com.alexharris.chat_service.repository;

import com.alexharris.chat_service.models.UserConversation;
import com.alexharris.chat_service.models.UserConversationId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserConversationsRepository extends JpaRepository<UserConversation, UserConversationId> {
    Optional<UserConversation> findById(UserConversationId id);
    
    Optional<UserConversation> save(UserConversation userConversations);

    List<UserConversation> findByUserId(UUID userId);
}
