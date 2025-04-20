import React from "react";
import { createRoot } from "react-dom/client";

declare global {
    interface Window {
        renderApp: () => void;
    }
}

const renderApp = (): void => {
    const domElement =
        document.getElementById("react-app") ||
        document.querySelector("#react-app");

    if (domElement) {
        const root = createRoot(domElement);
        root.render(<h1>Hello, React🌐!</h1>);
    }
};

window.renderApp = renderApp; 