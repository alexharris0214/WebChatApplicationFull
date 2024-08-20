package com.alexharris.chat_service.models;

import lombok.Builder;
import lombok.Data;

import java.io.Serializable;
import java.util.UUID;


@Data
@Builder

public class UserConversationId implements Serializable {
    private UUID userId;
    private UUID conversationId;
}