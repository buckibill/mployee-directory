import React from "react";
import DataBody from "./DataBody"

function DataTable(props) {
    return (
        <div className="container">
            <DataBody result={props.results} />
        </div>
    );
}

export default DataTable;