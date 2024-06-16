import { Menu } from "@mui/material";
import React from "react";

function FileMenu({ anchorE1 = "" }) {
  return (
    <Menu anchorEl={anchorE1} open={false}>
      Hello
    </Menu>
  );
}

export default FileMenu;
