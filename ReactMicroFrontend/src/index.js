import React from "react";
import { createRoot } from "react-dom/client";

window.renderApp = () => {
    const domElement =
        document.getElementById("react-app") ||
        document.querySelector("#react-app");

    if (domElement) {
        const root = createRoot(domElement);
        root.render(<h1>Hello, React🌐!</h1>);
    }
};