import React, { useState } from "react";
import { Search as SearchIcon } from "@mui/icons-material";

import UserItem from "../shared/UserItem";
import {
  Dialog,
  Stack,
  DialogTitle,
  TextField,
  InputAdornment,
  ListItem,
  ListItemText,
  List,
} from "@mui/material";
function Search() {
  const [users, setUsers] = useState([{name: "lldhr"}, {name:"ram", _id: "3"}])

  const [search, setSearch] = useState("");

  const addFriendHandler = (_id) => {
    console.log(_id);
  };
  const isLoadingSendFriendRequest = false;
  return (
    <Dialog open>
      <Stack p="2rem" direction="column" width="25rem">
        <DialogTitle textAlign="center">Find People</DialogTitle>
        <TextField
          label=""
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {users.map((user) => {
            return (
              <UserItem
                user={user}
                key={user._id}
                handler={addFriendHandler}
                handlerIsLoading={isLoadingSendFriendRequest}
              />
            );
          })}
        </List>
      </Stack>
    </Dialog>
  );
}

export default Search;
