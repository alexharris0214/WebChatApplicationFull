package com.alexharris.chat_service.models;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.UUID;
import java.time.Instant;

@Entity
@Builder
@Data
@Table(name = "messages")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "conversation_id")
    private UUID conversation_id;
    private UUID senderId;
    private String text;
    private Instant timestamp;
}

