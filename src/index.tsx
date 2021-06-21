import React from "react";
import ReactDOM from "react-dom";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import firebase from "firebase";
import "firebase/auth";

import "antd/dist/antd.css";

import { config } from "./firebase.config";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

ReactDOM.render(
  <FirebaseAuthProvider firebase={firebase} {...config}>
    <FirebaseDatabaseProvider firebase={firebase} {...config}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FirebaseDatabaseProvider>
  </FirebaseAuthProvider>,
  document.getElementById("root")
);

reportWebVitals();
