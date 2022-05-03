import React from "react";

import Catalogue from "../General/Catalogue";
import { css } from '@emotion/css'
import { innerTitle, centeredElement } from "../../GlobalCSS"
import { Link } from '@mui/material';

const tagsCatalogue = css`
  ${centeredElement}; 
  width: 50vw;
  height: 80vh;
  
`

export default function SupervisorAgents() {

    const columns = [
        { field: 'id', headerName: 'ID',  flex:2, renderCell: (params) => (
                <Link to="">{params.value}</Link>
            ) },
        { field: 'name', headerName: 'Name', flex: 3, type: 'string' },

    ]
    const rows = [
        { id: '2001', name: 'Selena Quintanilla' },
        { id: '2002', name: 'Fe Ismael' },
        { id: '2003', name: 'Albino Abril' },
        { id: '2004', name: 'Marina Jimena' },
        { id: '2005', name: 'Martirio Nayeli' },
        { id: '2006', name: 'Dolores Nydia' },
        { id: '2007', name: 'Jeremías Ana Ruy' },
    ];
    return (
        <div>
            <div className={tagsCatalogue}>
                <h1 className={innerTitle}> Assigned Agents </h1>
                <Catalogue
                    width="80%"
                    columns={columns}
                    rows={rows}
                />
            </div>
        </div>
    )
}