import React from "react";
import { createRoot } from "react-dom/client";
import { Meteor } from "meteor/meteor";
import { AppContainer } from "./general/AppContainer";

Meteor.startup(() => {
  const container = document.getElementById("app");
  const root = createRoot(container);
  root.render(<AppContainer />);
});
