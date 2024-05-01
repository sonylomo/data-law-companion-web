import { type SetStateAction, type Dispatch } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import {
  setEnableDebug,
  WebChatContainer,
  type WebChatConfig,
  type WebChatInstance,
} from "@ibm-watson/assistant-web-chat-react";
import useWebChat from "../hooks/useWebChat";

const webChatOptions = {
  integrationID: "6ba53abf-c108-44d7-8554-953fe978b02e",
  region: "au-syd",
  serviceInstanceID: "4103320b-c436-4cec-afe0-f061e762bf17",
  // subscriptionID: 'only on enterprise plans',
  // Note that there is no onLoad property here. The WebChatContainer component will override it.
  // Use the onBeforeRender or onAfterRender prop instead.
} as WebChatConfig;

// Include this if you want to get debugging information from this library. Note this is different than
// the web chat "debug: true" configuration option which enables debugging within web chat.
setEnableDebug(true);

const onAfterRender = (
  instance: WebChatInstance,
  setInstance: Dispatch<SetStateAction<WebChatInstance | null>>
) => {
  // Make the instance available to the React components.
  setInstance(instance);
  instance.toggleOpen();

  return Promise.resolve(); // Return a Promise<void>
};

const Layout = () => {
  // const [instance, setInstance] = useState<WebChatInstance | null>(null);
  const { setInstance } = useWebChat();

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />

      <WebChatContainer
        config={webChatOptions}
        onBeforeRender={
          setInstance as (instance: WebChatInstance) => Promise<void>
        }
        onAfterRender={(instance) => onAfterRender(instance, setInstance)}
      />
    </div>
  );
};

export default Layout;
