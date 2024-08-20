import { MessageComponent } from "../components/MessageComponent"

export const generateWindowHeadingFromConversation = (conversation) => {
    console.log(`${conversation.userModels.firstName} ${conversation.userModels.lastName}`)
    return `${conversation.userModels.firstName} ${conversation.userModels.lastName}`
}

export const generateMessagesFromConversation = (conversation, userId) => {
    console.log(conversation)
    return(
        conversation.messages.map((message, index) => {
            return(
                <MessageComponent
                    text={message.text}
                    timeStamp={message.timeStamp}
                    key={index}
                    senderId = {message.senderId}
                    userId = {userId}
                />
            )
        })
    )
}