import { MessageComponent } from "../components/MessageComponent"
import { formatDate } from "./MessageUtils"

export const generateWindowHeadingFromConversation = (conversation) => {

    return `${conversation.recipientFirstName} ${conversation.recipientLastName}`
}

export const generateMessagesFromConversation = (conversation, userId) => {
    
    return(
        conversation.messages.map((message, index) => {
            return(
                <MessageComponent
                    text={message.text}
                    timeStamp={formatDate(message.timestamp)}
                    key={index}
                    senderId = {message.senderId}
                    userId = {userId}
                />
            )
        })
    )
}