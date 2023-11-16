"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("6a18e473-0304-464a-b01a-8c98909cc2ad");
  });

  return null;
}

export default CrispChat;