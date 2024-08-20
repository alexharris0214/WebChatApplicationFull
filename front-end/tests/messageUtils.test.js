import { describe, it, expect } from 'vitest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { sendMessage, updateNewConversations } from '../src/utils/MessageUtils' // Adjust the path to your file
import { API_URL } from '../src/constants';

describe('sendMessage', () => {
  it('should send a message successfully', async () => {
    const mock = new MockAdapter(axios);
    const message = 'Hello, World!';
    const conversationId = 1;
    const recipientId = 2;
    const senderId = 3;

    mock.onPost(`${API_URL}/api/messages/insert-message`).reply(200);

    await sendMessage(message, conversationId, recipientId, senderId);
    
    expect(mock.history.post.length).toBe(1);
    expect(mock.history.post[0].data).toBe(JSON.stringify({
      message,
      conversationId,
      recipientId,
      senderId,
    }));
  });

  it('should handle errors', async () => {
    const mock = new MockAdapter(axios);
    const message = 'Hello, World!';
    const conversationId = 1;
    const recipientId = 2;
    const senderId = 3;

    mock.onPost(`${API_URL}/api/messages/insert-message`).reply(500);

    await sendMessage(message, conversationId, recipientId, senderId);

    expect(mock.history.post.length).toBe(1);
  });
});

describe('updateNewConversations', () => {
  it('should update the conversations with a new message', () => {
    const conversations = [
      {
        id: 1,
        messages: [{ text: 'Old message' }],
      },
    ];
    const newMessage = { text: 'New message' };
    const conversation = {
      id: 1,
      messages: [{ text: 'Old message' }],
    };
    const selectedConversationIndex = 0;

    const updatedConversations = updateNewConversations(conversations, newMessage, conversation, selectedConversationIndex);

    expect(updatedConversations[selectedConversationIndex].messages).toHaveLength(2);
    expect(updatedConversations[selectedConversationIndex].messages[1]).toEqual(newMessage);
  });
});
