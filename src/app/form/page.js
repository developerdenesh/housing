'use client'

import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useState } from 'react';

export default function Demo() {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    {
      field: "make",
      cellRenderer(props) {
        return <button onClick={() => window.alert('clicked')}>{props.data.make}</button>;
      }
    },
    {
      field: "model"
    },
    {
      field: "price"
    },
    {
      field: "electric"
    },
  ]);

  return (
    <>
      <div
        className="ag-theme-quartz" // applying the Data Grid theme
        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
        />
      </div>
      <form>
        <input name="Price" />
        <br />
        <input name="Interest" />
        <input name="Loan Tenure" />
        <button type="submit">Search</button>
      </form>

    </>

  );
}