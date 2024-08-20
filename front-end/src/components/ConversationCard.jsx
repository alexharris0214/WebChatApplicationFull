import React from "react";
import { useContext } from "react";
import { ConversationContext } from "../providers/ConversationProvider";

export const ConversationCard = ({firstName, lastName, mostRecentMessage, index}) => {

    const {setSelectedConversationIndex} = useContext(ConversationContext)
    
    const handleOnClick = () => {
        setSelectedConversationIndex(index)
    }
    return (
            <div className="card" style={{padding:20, alignContent:"center", width:"50vh"}} onClick={handleOnClick}>
                <p>{`${firstName}, ${lastName}`}</p>
                <p>{mostRecentMessage}</p>  
            </div>
    )
}