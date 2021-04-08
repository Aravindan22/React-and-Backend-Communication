import { StrictMode } from "react";
import ReactDOM from "react-dom";

// import App from "./App";
import Get from "./components/Get";
import Post from "./components/Post";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Get />
    <Post />
  </StrictMode>,
  rootElement
);
