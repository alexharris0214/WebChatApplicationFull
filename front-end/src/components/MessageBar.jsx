import { useContext, useState } from "react"
import { ConversationContext } from "../providers/ConversationProvider"
import axios from "axios"
import { API_URL } from "../constants"
import { AuthContext } from "../providers/AuthProvider"

export const MessageBar = () => {
    const [message, setMessage] = useState("")
    const { conversations, selectedConversationIndex, setConversations } = useContext(ConversationContext)
    const { userId } = useContext(AuthContext)

    
    const conversation = conversations[selectedConversationIndex]
    const conversationId = conversation?._id

    const handleSendButton = async () => {
        const messageToSend = {
            message,
            conversationId,
            recipientId: conversation.userModels._id,
            senderId: userId
        }

        const response = await axios.post(API_URL + "/api/messages/insert-message", messageToSend)

        if (response.status === 200) {
            let updatedConversations = [...conversations]
            updatedConversations[selectedConversationIndex] = {
                ...conversation,
                messages: [...conversation.messages, response.data]
            }

            setConversations(updatedConversations)
        }
        setMessage("")
    }

    return (
        <>
            <input
                type="text"
                onChange={(event) => setMessage(event.target.value)}
                value={message}
                placeholder="Enter message here..."
                style={{ width: "90%" }}
            />
            <button style={{ width: "10%" }} onClick={handleSendButton}>Send</button>
        </>
    )
}
