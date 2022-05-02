import React from "react";
import { Avatar, useChatContext } from "stream-chat-react";

const TeamChannelPreview = ({
  setActiveChannel,
  setIsCreating,
  setIsEditing,
  setToggleContainer,
  channel,
  type,
}) => {
  const { channel: activeChannel, client } = useChatContext();

  const ChannelPreview = () => (
    <p className="channel-preview__item">
      # {channel?.data?.name || channel?.data?.id}
    </p>
  );

  const createNameOfDirectPreview = (members) => {
    const n = [];
    members.map((key) => n.push(key?.user?.name || key?.user?.id));
    const channelName = n.join(",");
    return channelName;
  };

  const DirectPreview = () => {
    const members = Object.values(channel.state.members).filter(
      ({ user }) => user.id !== client.userID
    );
    const channelName = createNameOfDirectPreview(members);

    return (
      <div className="channel-preview__item single">
        <Avatar name={channelName} size={24} />
        <p>{channelName}</p>
      </div>
    );
  };

  return (
    <div
      className={
        channel?.id === activeChannel?.id
          ? "channel-preview__wrapper__selected"
          : "channel-preview__wrapper"
      }
      onClick={() => {
        setIsCreating(false);
        setIsEditing(false);
        setActiveChannel(channel);
        if (setToggleContainer) {
          setToggleContainer((prevState) => !prevState);
        }
      }}
    >
      {type === "team" ? <ChannelPreview /> : <DirectPreview />}
    </div>
  );
};

export default TeamChannelPreview;
