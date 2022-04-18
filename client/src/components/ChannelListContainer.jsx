import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";
// import DiscordIcon from "../assets/LogoDiscord.png";

const SideBar = () => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        {/* <img src={DiscordIcon} alt="LOGO" width="30"></img> */}
        <ion-icon name="desktop-outline"></ion-icon>{" "}
      </div>
    </div>
    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner">
        <ion-icon name="log-out-outline"></ion-icon>
      </div>
    </div>
  </div>
);

const CompanyHeader = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__text">Discord Clone APP</p>
  </div>
);
const ChannelListContainer = () => {
  return (
    <>
      <SideBar></SideBar>
      <div className="channel-list__list__wrapper">
        <CompanyHeader></CompanyHeader>
        <ChannelSearch></ChannelSearch>
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList {...listProps} type="team"></TeamChannelList>
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              type="team"
            ></TeamChannelPreview>
          )}
        ></ChannelList>

        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList {...listProps} type="messaging"></TeamChannelList>
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              type="messaging"
            ></TeamChannelPreview>
          )}
        ></ChannelList>
      </div>
    </>
  );
};

export default ChannelListContainer;
