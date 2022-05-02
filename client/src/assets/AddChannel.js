import React from "react";

export const AddChannel = ({
  setCreateType,
  setIsCreating,
  setIsEditing,
  setToggleContainer,
  type,
}) => (
  <span
    style={{ cursor: "pointer" }}
    onClick={() => {
      setCreateType(type);
      setIsCreating((prevState) => !prevState);
      setIsEditing(false);
      if (setToggleContainer) setToggleContainer((prevState) => !prevState);
    }}
  >
    <ion-icon name="add-circle-outline" size=""></ion-icon>
  </span>
);
