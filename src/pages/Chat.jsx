import React from "react";
import { useParams } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
function Chat() {
  const { chatId } = useParams();
  return (
    <>
      <p>{chatId}</p>
    </>
  );
}

export default AppLayout()(Chat);
