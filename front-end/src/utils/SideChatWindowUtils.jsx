import { ConversationCard } from "../components/ConversationCard";

export const generateCardComponents = (conversations) => {
  return conversations.map((conversation, index) => {
    const mostRecentMessage = conversation.messages[conversation.messages.length - 1].text
    return (
      <ConversationCard
        firstName={conversation.userModels.firstName}
        lastName={conversation.userModels.lastName}
        key={index}
        index={index}
        mostRecentMessage= {mostRecentMessage}
      />
    );
  });
};
