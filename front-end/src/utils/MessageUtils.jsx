import axios from "axios"
import { API_URL } from "../constants"

export const sendMessage = async (message, conversationId, recipientId, senderId) => {
    const messageToSend = {
        message,
        conversationId,
        recipientId,
        senderId,
    }
    try{
        const response = await axios.post(API_URL + "/api/messages/insert-message", messageToSend)

        
    } catch(err){
        
    }
}

export const updateNewConversations = (conversations, newMessage, conversation, selectedConversationIndex) => {
    let updatedConversations = [...conversations]
    updatedConversations[selectedConversationIndex] = {
        ...conversation,
        messages: [...conversation.messages, newMessage] 
    }
    return updatedConversations
}