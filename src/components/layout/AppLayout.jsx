import React, { lazy } from "react";
import { Grid } from "@mui/material";

import Header from "./Header";
import Title from "../shared/Title";
import { useParams } from "react-router-dom";
import ChatList from "../specific/ChatList";
import Profile from "../specific/Profile";
// const ChatList = lazy(() => import("../specific/ChatList"));

const AppLayout = () => (WrappedComponent) => {
  const chatId = 0;

  return (props) => {
    const { chatId } = useParams();

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("DeleteChat");
    };

    const chatUsersList = [
      {
          avatar: ["https://example.com/avatar1.png"],
          name: "Alice",
          _id: "user1",
          groupChat: false,
          members: []
      },
      {
          avatar: ["https://example.com/avatar2.png"],
          name: "Bob",
          _id: "user2",
          groupChat: false,
          members: []
      },
      {
          avatar: ["https://example.com/avatar3.png"],
          name: "Charlie",
          _id: "user3",
          groupChat: false,
          members: []
      },
      {
          avatar: ["https://example.com/avatar4.png"],
          name: "David",
          _id: "user4",
          groupChat: false,
          members: []
      },
      {
          avatar: ["https://example.com/avatar5.png"],
          name: "Eve",
          _id: "user5",
          groupChat: false,
          members: []
      }
  ];
  

    return (
      <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}
          >
            <ChatList
              chats={chatUsersList} // from backend
              chatId={chatId}
              newMessagesAlert={[{ chatId }, { chatId: "1", count: 2 }]}
              onlineUsers={[1, 3]}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }}
            height={"100%"}
            bgcolor="primary.main"
          >
            <Profile />
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
