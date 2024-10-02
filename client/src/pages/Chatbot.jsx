import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Dynamically inject the Botpress Webchat scripts
    const injectScript = document.createElement("script");
    injectScript.src = "https://cdn.botpress.cloud/webchat/v2.1/inject.js";
    injectScript.async = true;
    document.body.appendChild(injectScript);

    const configScript = document.createElement("script");
    configScript.src =
      "https://mediafiles.botpress.cloud/2144e432-3b02-4d89-9212-4fa64c41f9fd/webchat/v2.1/config.js";
    configScript.async = true;
    document.body.appendChild(configScript);

    // Clean up scripts when the component is unmounted
    return () => {
      document.body.removeChild(injectScript);
      document.body.removeChild(configScript);
    };
  }, []);

  return (
    <div>
      <div id="bp-webchat" />
    </div>
  );
};

export default Chatbot;