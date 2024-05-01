import React,{ createContext, useState, type ReactNode } from "react";
import { type WebChatInstance } from "@ibm-watson/assistant-web-chat-react";

export type WebChatContextType = {
  instance: WebChatInstance | null;
  setInstance: React.Dispatch<React.SetStateAction<WebChatInstance | null>>;
};

export const WebChatContext = createContext<WebChatContextType | null>(null);

export const WebChatProvider = ({ children }: { children: ReactNode }) => {
  const [instance, setInstance] = useState<WebChatInstance | null>(null);

  return (
    <WebChatContext.Provider value={{ instance, setInstance }}>
      {children}
    </WebChatContext.Provider>
  );
};
