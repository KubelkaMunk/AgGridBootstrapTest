import { AgGridReact } from "ag-grid-react"; // React Data Grid Component

function Grid(props) {
  return (
    <div
      className="ag-theme-quartz flex-grid" // applying the Data Grid theme
      style={{ height: 500 }} // the Data Grid will fill the size of the parent container
    >
      <h2 style={{ margin: "30px", textAlign: "left" }}>{props.title}</h2>
      <AgGridReact rowData={props.rowData} columnDefs={props.colDefs} />
    </div>
  );
}

export default Grid;
