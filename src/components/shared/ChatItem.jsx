import React, { memo } from "react";
import { Link } from "../styles/styledComponent";
import { Stack, Typography, Box } from "@mui/material";
import AvatarCard from "./AvatarCard";
function ChatItem({
  avatar = [],
  name = "",
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessage,
  index = 0,
  handleDeleteChat,
}) {
  return (
    <Link
      key={_id}
      sx={{ padding: "0" }}
      to={`/chat/${_id}`}
      onContextMenu={(e) => {
        handleDeleteChat(e, _id, groupChat);
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: sameSender ? "black" : "white",
          color: sameSender ? "white" : "unset",
          position: "relative",
        }}
      >
        <AvatarCard />
        {/* <AvatarCard avatar={avatar}/> */}
        <Stack>
          <Typography>{name}</Typography>
          {newMessage?.count && (
            <Typography>{newMessage.count} New Message</Typography>
          )}
        </Stack>
        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </div>
    </Link>
  );
}

export default memo(ChatItem);
