import React from "react";
import { Stack, Avatar, Typography } from "@mui/material";
import moment from "moment";
import {
  Face as FaceIcon,
  AlternateEmail as UsernameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
function Profile() {
  return (
    <Stack spacing={"2rem"} alignItems={"center"} direction={"column"}>
      <Avatar
        sx={{
          width: "5cm",
          height: "5cm",
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={"Random"} />
      <ProfileCard
        heading={"Username"}
        text={"Random"}
        icon={<UsernameIcon />}
      />
      <ProfileCard heading={"Name"} text={"Random"} icon={<FaceIcon />} />
      <ProfileCard
        heading={"Joined"}
        text={moment("2024-06-16T07:03:29.754Z").fromNow()}
        icon={<CalendarIcon />}
      />
    </Stack>
  );
}

const ProfileCard = ({ text, icon, heading }) => {
  return (
    <Stack
      direction={"row"}
      spacing={"1rem"}
      alignItems={"center"}
      color={"white"}
      textAlign={"Center"}
    >
      {icon && icon}
      <Stack>
        <Typography variant={"body1"}>{text}</Typography>
        <Typography variant={"caption"} color={"gray"}>
          {heading}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Profile;
