import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId = "838970836551-515ges6hiaudk92ljeu89504m17qnvrg.apps.googleusercontent.com"
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="838970836551-515ges6hiaudk92ljeu89504m17qnvrg.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </Provider>
);
