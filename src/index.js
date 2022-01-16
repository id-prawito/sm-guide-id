import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { ThemeContextProvider } from "./config/ThemeContext";

ReactDOM.render(
    <React.StrictMode>
        <ThemeContextProvider>
            <App />
        </ThemeContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
