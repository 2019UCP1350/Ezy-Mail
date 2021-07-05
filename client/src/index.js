import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import Aboutus from "./screens/Aboutus.js";
import { Provider as AuthProvider } from "./context/AuthContext";


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
