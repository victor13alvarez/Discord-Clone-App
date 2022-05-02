import React from "react";
import { MessageTeam, useMessageContext } from "stream-chat-react";

const TeamMessage = () => {
  const { message } = useMessageContext();

  return <MessageTeam message={{ ...message, user: {} }} />;
};

export default TeamMessage;
