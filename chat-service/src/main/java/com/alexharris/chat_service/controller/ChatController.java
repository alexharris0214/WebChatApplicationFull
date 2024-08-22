package com.alexharris.chat_service.controller;

import com.alexharris.chat_service.models.Conversation;
import com.alexharris.chat_service.models.Message;
import com.alexharris.chat_service.models.requests.CreateConversationRequest;
import com.alexharris.chat_service.models.requests.MessageRequest;
import com.alexharris.chat_service.models.requests.UserOther;
import com.alexharris.chat_service.service.JwtAuthenticateService;
import com.alexharris.chat_service.service.MessagingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/messages")
@CrossOrigin(origins = "http://localhost:5173")
public class ChatController {
    @Autowired
    private MessagingService messagingService;
    @Autowired
    private JwtAuthenticateService jwtAuthenticateService;
    @PostMapping("/create-message")
    public ResponseEntity<Message> insertMessage(@RequestHeader HttpHeaders headers, @RequestBody MessageRequest messageRequest){
        UUID userId = UUID.fromString(jwtAuthenticateService.extractUserId(headers.getFirst("Authorization")));
        Message message = messagingService.insertMessage(messageRequest, userId);
        return ResponseEntity.ok(message);
    }

    @PostMapping("/create-conversation")
    public ResponseEntity<Conversation> insertCreation(@RequestHeader HttpHeaders headers, @RequestBody CreateConversationRequest createConversationRequest){
        UUID userId = UUID.fromString(jwtAuthenticateService.extractUserId(headers.getFirst("Authorization")));
        Conversation conversation = messagingService.createConversation(userId, createConversationRequest.getRecipientId());
        return ResponseEntity.ok(conversation);
    }

    @GetMapping("/get-messages")
    public ResponseEntity<List<Message>> getMessages(@RequestHeader HttpHeaders headers){
        UUID userId = UUID.fromString(jwtAuthenticateService.extractUserId(headers.getFirst("Authorization")));
        List<Message> messages = messagingService.getAllMessages(userId);
        return ResponseEntity.ok(messages);
    }

    @GetMapping("/get-associated-users")
    public ResponseEntity<List<UserOther>> getAssociatedUsers(@RequestHeader HttpHeaders headers){
        UUID userId = UUID.fromString(jwtAuthenticateService.extractUserId(headers.getFirst("Authorization")));
        List<UserOther> userOtherList = messagingService.getAssociatedUsers(userId);
        return ResponseEntity.ok(userOtherList);
    }
}
