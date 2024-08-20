package com.alexharris.chat_service.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="user_conversations")
@IdClass(UserConversationId.class)
public class UserConversation {
    @Id
    private UUID user_id;
    @Id
    private UUID conversation_id;
}

