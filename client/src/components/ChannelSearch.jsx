import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useChatContext } from "stream-chat-react";

const ChannelSearch = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState("");

  const getChannels = async (text) => {
    try {
      //TODO; fetch channels
    } catch (error) {
      setQuery("");
    }
  };
  const onSearch = (event) => {
    event.preventDefault();
    setLoading(true);
    setQuery(event.target.value);
    getChannels(event.target.value);
  };

  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <ion-icon name="search-outline"></ion-icon>
        </div>
        <input
          className="channel-search__input__text"
          placeholder="Search"
          type="text"
          value={query}
          onChange={onSearch}
        ></input>
      </div>
    </div>
  );
};

export default ChannelSearch;
