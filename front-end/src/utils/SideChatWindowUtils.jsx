import { ConversationCard } from "../components/ConversationCard";

export const generateCardComponents = (conversations) => {

  return conversations.filter(conversation => conversation.messages.length > 0).map((conversation, index) => {

    const mostRecentMessage = conversation.messages[conversation.messages.length - 1].text
    return (
      <ConversationCard
        firstName={conversation.recipientFirstName}
        lastName={conversation.recipientLastName}
        key={index}
        index={index}
        mostRecentMessage= {mostRecentMessage}
      />
    );
  });
};
