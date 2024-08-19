import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
