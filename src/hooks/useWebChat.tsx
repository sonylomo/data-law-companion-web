import { useContext } from "react";
import { WebChatContext, WebChatContextType } from "../context/WebChat";

const useWebChat = () => useContext(WebChatContext);

export default useWebChat as () => WebChatContextType;
