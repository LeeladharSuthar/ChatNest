import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import React from "react";

function AvatarCard({ avatar = ["data:image/png;base64,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"], max = 4 }) {
    // console.log(avatar)
  return (
    <Stack direction={"row"} spacing={0.5}>
      <AvatarGroup max={max}>
        <Box width={"5rem"} height={"3rem"}>
          { 
          avatar.map((src, index) => {
            return (
              <Avatar
                key={Math.random() * 100}
                src={src}
                alt={`Avatar ${index}`}
                sx={{
                  width: "3rem",
                  height: "3rem",
                  position: "absolute",
                  left: {
                    sx: `${0.5 + index}rem`,
                    sm: `${index}rem`,
                  },
                }}
              />
            );
          })}
        </Box>
      </AvatarGroup>
    </Stack>
  );
}

export default AvatarCard;
