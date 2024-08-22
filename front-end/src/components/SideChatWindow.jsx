import React from "react";
import { generateCardComponents } from "../utils/SideChatWindowUtils";
import { useContext } from "react";
import { ConversationContext } from "../providers/ConversationProvider";

export const SideChatWindow = () => {
    const {conversations} = useContext(ConversationContext)
    const cardComponents = generateCardComponents(conversations)
    
    return (
        <div className="d-flex  text-white" style={{ minWidth: '350px',  borderRight: '2px solid black', height:"91vh"}}>
            <div className="list-group">
                {cardComponents}
            </div>
        </div>
    );
};
