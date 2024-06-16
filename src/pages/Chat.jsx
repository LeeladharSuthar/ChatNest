import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import { InputBox } from "../components/styles/styledComponent";
import { IconButton, Stack } from "@mui/material";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import FileMenu from "../components/dialog/FileMenu";
import MessageComponent from "../components/shared/MessageComponent";
function Chat() {
  const messages = [
    {
      attachments: [
        {
          public_id: "cloudnary1",
          url: "https://res.cloudinary.com/private-demo/image/private/w_200,h_150,c_fill/l_watermark,w_200,h_150/sheep.jpg",
        },
      ],
      content: "Hello there!",
      _id: "message1",
      sender: {
        _id: "user1",
        name: "Alice",
      },
      chat: "chatId1",
      createdAt: "2024-06-16T12:00:00Z",
    },
    {
      attachments: [],
      content: "How are you?",
      _id: "message2",
      sender: {
        _id: "user2",
        name: "Bob",
      },
      chat: "chatId2",
      createdAt: "2024-06-16T12:05:00Z",
    },
    {
      attachments: [],
      content: "This is a sample message.",
      _id: "message3",
      sender: {
        _id: "user1",
        name: "Charlie",
      },
      chat: "chatId3",
      createdAt: "2024-06-16T12:10:00Z",
    },
    {
      attachments: [],
      content: "👋",
      _id: "message4",
      sender: {
        _id: "user2",
        name: "David",
      },
      chat: "chatId4",
      createdAt: "2024-06-16T12:15:00Z",
    },
    {
      attachments: [
        {
          public_id: "cloudnary2",
          url: "https://example.com/attachment2.pdf",
        },
      ],
      content: "Check this out!",
      _id: "message5",
      sender: {
        _id: "user1",
        name: "Eve",
      },
      chat: "chatId5",
      createdAt: "2024-06-16T12:20:00Z",
    },
  ];

  const { chatId } = useParams();
  const containerRef = useRef();
  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor="rgba(0, 0, 0, 0.2)"
        height="90%"
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {messages.map((message) => {
          return (
            <MessageComponent
            key={message._id}
              message={message}
              user={{ _id: "user1", name: "lldhr" }}
            />
          );
        })}
      </Stack>
      <form style={{ height: "10%" }}>
        <Stack
          direction={"row"}
          height="100%"
          padding="1rem"
          alignItems="center"
          position="relative"
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "1.5rem",
              rotate: "30deg",
            }}
          >
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder="Type Something Here..." />
          <IconButton
            type="submit"
            sx={{
              rotate: "-30deg",
              backgroundColor: "#ea7070",
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                backgroundColor: "error.dark",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </>
  );
}

export default AppLayout()(Chat);
