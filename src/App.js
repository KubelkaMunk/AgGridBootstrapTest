import React, { useState } from "react";
import "./styles.css";
import BasicExample from "./Card";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import Grid from "./Grid";
import { carData } from "./data.jsx";
import { fruitData } from "./data.jsx";

export default function App() {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState(carData);
  const [rowDatafruit, setRowDatafruit] = useState(fruitData);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="cardcontainer">
        <BasicExample
          title="Kind"
          image="https://media.istockphoto.com/id/489203316/de/foto/kleine-wissenschaftler.jpg?s=612x612&w=0&k=20&c=9Mi0FTt8Sry52s0cSNYxBtQybrFFjshMk1OMpSHkJ80="
        />
        <BasicExample
          title="Uni"
          image="https://media.istockphoto.com/id/525409577/de/foto/erh%C3%B6hte-sicht-auf-studenten-die-ihre-gcse-pr%C3%BCfung-schreiben.jpg?s=612x612&w=0&k=20&c=CBx3lSZyXUQTo23V_8BFBL-8h5P6ll5mNevXvlQebWg="
        />
        <BasicExample
          title="Toast"
          image="https://media.istockphoto.com/id/539056435/de/foto/ab-tests-mit-einem-sandwich.jpg?s=612x612&w=0&k=20&c=MlkFeM5wB0qMXWgXQrYd1xKjCdH0SRNK2nPJMNldmSQ="
        />
        <BasicExample
          title="Proffesor"
          image="https://media.istockphoto.com/id/1187001058/de/foto/verr%C3%BCckter-wissenschaftler-im-labor.jpg?s=612x612&w=0&k=20&c=DgTZmTvDkWmyd5FMQaB-PBRSr777jlg-pdT3CTXvhQU="
        />
      </div>

      <div className="flex-container">
        <Grid title="Car data" rowData={rowData} colDefs={colDefs} />
        <Grid title="Fruit data" rowData={rowDatafruit} colDefs={colDefs} />
      </div>
    </div>
  );
}
