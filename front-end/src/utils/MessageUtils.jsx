
export const updateNewConversations = (conversations, newMessage, conversation, selectedConversationIndex) => {
    let updatedConversations = [...conversations]
    updatedConversations[selectedConversationIndex] = {
        ...conversation,
        messages: [...conversation.messages, newMessage] 
    }
    return updatedConversations
}
export const formatDate = (dateString) => {
    const date = new Date(dateString);


    const options = {
        month: 'long', // Full month name
        day: 'numeric', // Day of the month
        hour: 'numeric', // Hour
        minute: 'numeric', // Minute
        hour12: true // 12-hour format (you can remove this if you want 24-hour format)
    };

    return date.toLocaleString('en-US', options);
}

// Example usage
const formattedDate = formatDate('2024-08-21T20:38:03.704935Z');
console.log(formattedDate);  // Output example: "August 21, 8:38 PM"

 export const createConversationObjects = (associatedUsers, messages) => {
    const conversationsMap = {};

    messages.forEach(message => {
        const { conversationId, senderId, recipientId, text, timestamp } = message;

        // Find the recipient's details
        const recipient = associatedUsers.find(user => user.userId === recipientId || user.userId === senderId);
        console.log(message)
        console.log(associatedUsers)
        if (!conversationsMap[conversationId]) {
            conversationsMap[conversationId] = {
                conversationId,
                messages: [],
                recipientFirstName: recipient?.firstName,
                recipientLastName: recipient?.lastName,
                recipientId: recipientId
            };
        }

        conversationsMap[conversationId].messages.push({
            senderId,
            text,
            timestamp,
        });
    });

    return Object.values(conversationsMap);
};
