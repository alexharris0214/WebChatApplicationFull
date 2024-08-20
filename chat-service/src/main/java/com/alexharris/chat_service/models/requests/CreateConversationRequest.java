package com.alexharris.chat_service.models.requests;

import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder
public class CreateConversationRequest {
    private UUID recipientId;
}
