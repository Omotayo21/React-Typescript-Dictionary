import './index.css'
import React from "react";
import ReactDOM from "react-dom";
import App  from "./App";
import { DictionaryProvider } from './context/Dictionary-context';


ReactDOM.render(
  <React.StrictMode>
    <DictionaryProvider>
      <App />
    </DictionaryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);