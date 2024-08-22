package com.alexharris.chat_service.repository;

import com.alexharris.chat_service.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findById(UUID id);
    User save(User user);

    @Query("SELECT DISTINCT u FROM User u " +
            "JOIN UserConversation uc1 ON u.id = uc1.userId " +
            "JOIN UserConversation uc2 ON uc1.conversationId = uc2.conversationId " +
            "WHERE uc2.userId = :userId AND u.id != :userId")
    List<User> findUsersInConversationWith(@Param("userId") UUID userId);
}