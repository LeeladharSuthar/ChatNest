import React from "react";
import { Helmet } from "react-helmet-async";

function Title({
  title = "ChatNest",
  description = "ChatNest: Connect and Chat with Ease. Instant messaging, user profiles, group chats, emojis, stickers, and top-notch security. Join ChatNest for the ultimate chatting experience!",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default Title;
