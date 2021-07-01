import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import "antd/dist/antd.css";

import { config } from "./firebase.config";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./i18n";

import "./index.css";

ReactDOM.render(
  <FirebaseAuthProvider firebase={firebase} {...config}>
    <FirebaseDatabaseProvider firebase={firebase} {...config}>
      <BrowserRouter>
        <React.StrictMode>
          <Suspense fallback="loading">
            <App />
          </Suspense>
        </React.StrictMode>
      </BrowserRouter>
    </FirebaseDatabaseProvider>
  </FirebaseAuthProvider>,
  document.getElementById("root")
);

reportWebVitals();
