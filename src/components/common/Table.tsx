import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface TableProps<T> {
    rowvalues: T[];
    coloumnvalues: GridColDef[];
}

export const TableLayout  = <T,>({ rowvalues, coloumnvalues }: TableProps<T>) => {
    return(
        <DataGrid
            rows={rowvalues}
            columns={coloumnvalues}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
        />
    );
}
