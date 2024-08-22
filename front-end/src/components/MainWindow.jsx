import React, { useEffect } from 'react';
import { useContext } from "react";
import { ConversationContext } from "../providers/ConversationProvider";
import { generateWindowHeadingFromConversation, generateMessagesFromConversation } from '../utils/MainWindowUtils';
import { useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { MessageBar } from './MessageBar';
export const MainWindow = () => {
    const {conversations, selectedConversationIndex} = useContext(ConversationContext)
    const [windowHeading, setWindowHeading] = useState('')
    const [messages, setMessages] = useState([])
    const {userId, token} = useContext(AuthContext)

    useEffect(() => {

        if(conversations != undefined && conversations.length != 0){
            setWindowHeading(generateWindowHeadingFromConversation(conversations[selectedConversationIndex]))
            setMessages(generateMessagesFromConversation(conversations[selectedConversationIndex], userId))
        }
    }, [conversations, selectedConversationIndex])
    
    return (
        <div className="container-fluid">
            <pre><h1 className="mt-4">{windowHeading}</h1></pre>
            <div className='card' style={{ height: '80%', borderColor: "black", borderWidth:2}}>
                <div className='list-group overflow-scroll' style={{height:"70vh"}} >
                    {messages}
                </div>
                <div style={{width:"100%"}}>
                    <MessageBar/>
                </div>
                
            </div>
        </div>
    );
};