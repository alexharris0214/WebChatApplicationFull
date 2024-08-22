import { useContext, useState } from "react"
import { ConversationContext } from "../providers/ConversationProvider"
import axios from "axios"
import { CHAT_URL } from "../constants"
import { AuthContext } from "../providers/AuthProvider"

export const MessageBar = () => {
    const [message, setMessage] = useState("")
    const { conversations, selectedConversationIndex, setConversations } = useContext(ConversationContext)
    const { userId, token} = useContext(AuthContext)

    const conversation = conversations[selectedConversationIndex]
    const conversationId = conversation?.conversationId

    const handleSendButton = async () => {
        const messageToSend = {
            text: message,
            conversationId:conversationId,
            recipientId: conversation.recipientId
        }
        const headers = {
            "Authorization":token
        }

        const response = await axios.post(CHAT_URL + "/api/messages/create-message", messageToSend, {headers})

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
