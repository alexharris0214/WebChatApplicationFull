package com.alexharris.chat_service.repository;

import com.alexharris.chat_service.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findById(UUID id);
    Optional<User> save(User user);
}