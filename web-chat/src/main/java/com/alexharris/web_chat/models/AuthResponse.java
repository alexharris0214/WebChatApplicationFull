package com.alexharris.web_chat.models;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class AuthResponse {
    private String userId;
    private String token;
}
