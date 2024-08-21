import React, { createContext, useState, useEffect, useContext } from "react";
import axios from 'axios'
import {  CHAT_URL } from "../constants";
import { AuthContext } from "./AuthProvider";

const ConversationContext = createContext();

const ConversationProvider = ({ children }) => {
    const {userId, token} = useContext(AuthContext)

    const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)
    const [conversations, setConversations] = useState([])

    useEffect(() => {
        const fetchConversation  = async () => {

            const headers = {
                "Authorization": token
            }
            try{
                const response = await axios.get(CHAT_URL + "/api/messages/get-messages", {headers})
                setConversations(response.data)
            } catch(err){
                console.log(err)
            }
        }
        fetchConversation()
    }, [userId])

    const contextValues = {
        conversations,
        setConversations,
        selectedConversationIndex: selectedConversationIndex,
        setSelectedConversationIndex: setSelectedConversationIndex
    }
  return (
    <ConversationContext.Provider value={contextValues}>
      {children}
    </ConversationContext.Provider>
  );
};

export { ConversationContext, ConversationProvider };
