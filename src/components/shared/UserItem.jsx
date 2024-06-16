import React, { memo } from "react";
import { ListItem, Stack, Typography, Avatar, IconButton } from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
function UserItem({ user, handler, handlerIsLoading, isAdded=false }) {
  const { name, _id, avatar } = user;

  return (
    <ListItem>
      <Stack
        direction={"row"}
        spacing={"1rem"}
        width={"100%"}
        alignItems={"center"}
      >
        <Avatar />
        <Typography
          variant="body1"
          sx={{
            flexGlow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverFlow: "ellipsis",
            width:"100%"
          }}
        >
          {name}
        </Typography>
        <IconButton
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}
          size="small"
          sx={{
            bgcolor: isAdded ? "primary.main": "error.dark",
            color: "white",
            "&:hover": {
              bgcolor: isAdded ? "primary.dark": "error.main"
            },
          }}
        >
          {
            isAdded ? <AddIcon /> : <RemoveIcon/>
          }
        </IconButton>
      </Stack>
    </ListItem>
  );
}

export default memo(UserItem);
