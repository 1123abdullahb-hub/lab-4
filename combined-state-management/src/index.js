
import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import store from "./redux/store";

import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";

import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(

    <Provider store={store}>

        <UserProvider>

            <ThemeProvider>

                <App />

            </ThemeProvider>

        </UserProvider>

    </Provider>

);
