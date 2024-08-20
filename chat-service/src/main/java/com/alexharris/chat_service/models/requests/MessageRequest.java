package com.alexharris.chat_service.models.requests;

import lombok.Data;

import java.util.UUID;

@Data
public class MessageRequest {
    private String text;
    private UUID conversationId;
}
