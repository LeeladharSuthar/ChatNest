import {
  Avatar,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import React, { memo } from "react";

function Notification() {
  const notificationSample = [
    {
      sender: {
        avatar: "https://example.com/avatar1.png", // Example avatar URL
        name: "John Doe", // Example sender name
      },
      _id: "notification1", // Example notification ID
    },
    {
      sender: {
        avatar: "https://example.com/avatar2.png", // Example avatar URL
        name: "Jane Smith", // Example sender name
      },
      _id: "notification2", // Example notification ID
    },
  ];

  const friendRequestHandler = ({ _id, accept }) => {};

  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle textAlign="center">Notifications</DialogTitle>
        {notificationSample.length > 0 ? (
          notificationSample.map((val) => {
            return (
              <NotificationItem
                notification={val}
                handler={friendRequestHandler}
                key={val._id}
              />
            );
          })
        ) : (
          <Typography textAlign="center">No new Notifications</Typography>
        )}
      </Stack>
    </Dialog>
  );
}

const NotificationItem = memo(({ notification, handler }) => {
  const { sender, _id } = notification;
  return (
    <ListItem>
      <Stack
        direction={"row"}
        spacing={"1rem"}
        width={"100%"}
        alignItems={"center"}
      >
        <Avatar src={sender.avatar} />
        <Typography
          variant="body1"
          sx={{
            flexGlow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverFlow: "ellipsis",
            width: "100%",
          }}
        >
          {`${sender.name} sent you a friend request`}
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }}>
          <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color="error" onClick={() => handler({ _id, accept: false })}>
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});

export default Notification;
