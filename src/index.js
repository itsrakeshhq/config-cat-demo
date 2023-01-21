import { ConfigCatProvider, PollingMode } from "configcat-react";
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

ReactDOM.render(
  <ConfigCatProvider
    sdkKey={process.env.REACT_APP_CONFIGCAT_SDK_KEY}
    pollingMode={PollingMode.AutoPoll}
    options={{ pollIntervalSeconds: 30 }}
  >
    <App />
  </ConfigCatProvider>,
  document.getElementById("root")
);
