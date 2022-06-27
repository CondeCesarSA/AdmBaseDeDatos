import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export const Table = ({columns, rows}) => {

  const handleRowClick = (e) => {
    console.log(e);
  }

  return (
    <div style={{ height: "75%", width: '100%', background: 'white' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        onRowClick={(event)=>handleRowClick(event.row)}
      />
    </div>
  );
}
