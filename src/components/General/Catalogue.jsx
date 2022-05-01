import React from 'react'

import { DataGrid } from '@mui/x-data-grid';

export default function Catalogue(props){
    return (
        <div style={{ height: 400, width: props.width }}>
            <DataGrid
                rows={props.rows}
                columns={props.columns}
                pageSize={5}
                rowsPerPageOptions={[5]}

            />
        </div>
    )
}
{/*checkboxSelection*/}