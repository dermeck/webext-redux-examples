import React from "react";
import { render } from "react-dom";
import Sidebar from "./Sidebar";
import { Store } from "webext-redux";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

const store = new Store();

store.ready().then(() => {
  const container = document.getElementById("sidebar-root");
  const root = createRoot(container!);

  root.render(
    <Provider store={store}>
      <Sidebar />
    </Provider>
  );
});
