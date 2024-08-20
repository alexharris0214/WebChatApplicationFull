package com.alexharris.web_chat.models;

import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Builder
@Data
public class AuthResponse {
    private UUID userId;
    private String token;
}
