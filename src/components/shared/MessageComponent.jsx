import { Box, Typography } from "@mui/material";
import moment from "moment";
import React, { memo } from "react";
import { fileFormat } from "../../lib/features.js";
import RenderAttachment from "./RenderAttachment.jsx";
function MessageComponent({ message, user }) {
  const { sender, attachments = [], content, createdAt } = message;
  const timeAgo = moment(createdAt).from();

  return (
    <div
      style={{
        alignSelf: sender._id == user._id ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
      }}
    >
      {!(sender._id == user._id) && (
        <Typography color={"#2694ab"} fontWeight="600" variant="caption">
          {sender.name}
        </Typography>
      )}
      {content && <Typography>{content}</Typography>}

      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = fileFormat(url);
          return (
            <Box key={index}>
              <a href={url} target="_blank" download style={{ color: "black" }}>
                <RenderAttachment file={file} url={url} />
              </a>
            </Box>
          );
        })}

      <Typography variant="caption" color="text.secondary">
        {timeAgo}
      </Typography>
    </div>
  );
}

export default memo(MessageComponent);
