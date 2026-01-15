/**
 * ABOUTME: Entry point for the todo app, renders the App component to the DOM
 */

import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import "./index.css";

const container = document.getElementById("root");
if (!container) throw new Error("Root element not found");

const root = createRoot(container);
root.render(<App />);
