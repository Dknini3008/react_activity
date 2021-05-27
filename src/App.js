import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom"
import Layout from "./pages/Layout/Layout"
import Main from "./pages/main/Main"
import NewBadge from "./pages/NewBadge/NewBadge"
import { findRenderedComponentWithType } from "react-dom/test-utils";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <NewBadge>
        </NewBadge>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
