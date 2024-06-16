import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import UserItem from "../shared/UserItem";

function NewGroup() {
  const [users, setUsers] = useState([
    { name: "lldhr", _id: "lldhr" },
    { name: "ram", _id: "ram" },
  ]);
  const [groupName, setGroupName] = useState("");
  const [members, setMembers] = useState([]);

  const selectMemberHandler = (id) => {
    if (members.indexOf(id) == -1) {
      setMembers((prev) => [...prev, id]);
    } else {
      setMembers((prev) => prev.filter((val) => val !==  id));
    }
  };

  const submitHandler = () => {};

  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing="2rem">
        <DialogTitle textAlign="center" variant="h4">
          New Group
        </DialogTitle>
        <TextField
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          label="Group Name..."
        />
        <Typography variant="body1">Members</Typography>
        <Stack>
          {users.map((user) => {
            return (
              <UserItem
                user={user}
                key={user._id}
                handler={selectMemberHandler}
                isAdded={members.includes(user._id)}
              />
            );
          })}
        </Stack>
        <Stack direction="row" justifyContent={"space-between"}>
          <Button variant="contained" color="error">
            Cancel
          </Button>
          <Button variant="contained" onClick={submitHandler}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
}

export default NewGroup;
