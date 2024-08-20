import React, { createContext, useState, useEffect, useContext } from "react";
import axios from 'axios'
import { API_URL } from "../constants";
import { AuthContext } from "./AuthProvider";

const ConversationContext = createContext();

const ConversationProvider = ({ children }) => {
    const {userId} = useContext(AuthContext)

    const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)
    const [conversations, setConversations] = useState([])

    useEffect(() => {

        const fetchConversation  = async () => {
            const body = {
                userId
            }
            try{
                const response = await axios.post(API_URL + "/api/messages/get-convos", body)
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
