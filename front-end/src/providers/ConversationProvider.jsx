import React, { createContext, useState, useEffect, useContext } from "react";
import axios from 'axios';
import { CHAT_URL } from "../constants";
import { AuthContext } from "./AuthProvider";
import { createConversationObjects } from "../utils/MessageUtils";

const ConversationContext = createContext();

const ConversationProvider = ({ children }) => {
    const { userId, token } = useContext(AuthContext);

    const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const headers = {
                "Authorization": token
            };

            try {
                // Fetch messages and associated users concurrently
                const [messagesResponse, usersResponse] = await Promise.all([
                    axios.get(CHAT_URL + "/api/messages/get-messages", { headers }),
                    axios.get(CHAT_URL + "/api/messages/get-associated-users", { headers })
                ]);

                const messages = messagesResponse.data;
                const otherUsers = usersResponse.data;

                // Create conversation objects
                const conversationObjects = createConversationObjects(otherUsers, messages);
                setConversations(conversationObjects);

            } catch (err) {
                console.error("Failed to fetch data:", err);
            }
        };

        if (userId && token) {
            fetchData();
        }
    }, [userId, token]);

    const contextValues = {
        conversations,
        setConversations,
        selectedConversationIndex,
        setSelectedConversationIndex
    };

    return (
        <ConversationContext.Provider value={contextValues}>
            {children}
        </ConversationContext.Provider>
    );
};

export { ConversationContext, ConversationProvider };
