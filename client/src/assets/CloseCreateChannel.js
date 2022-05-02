import React from "react";

export const CloseCreateChannel = ({ setIsCreating, setIsEditing }) => (
  <span
    style={{ cursor: "pointer" }}
    onClick={() => {
      if (setIsCreating) setIsCreating(false);
      if (setIsEditing) setIsEditing(false);
    }}
  >
    <ion-icon name="close-circle-outline" size="large"></ion-icon>
  </span>
);
