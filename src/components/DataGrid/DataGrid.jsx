import React, { useState } from 'react'
import Checkbox from '../common/Checkbox'
import '../../styles/DataGrid.css'
import Header from './Header';

const DataGrid = ({data = []}) => {
    const [selectedRows, setSelectedRows] = useState([]);
    const handleSelectRow = (row) => {
        // need to handle scenario if row checkbox is checked or unchecked
        const isSelected = selectedRows.includes(row);
        const updatedSelection = isSelected ? selectedRows.filter((element)=> element !== row) : [...selectedRows , row];
        setSelectedRows(updatedSelection);
    }
    const handleSelectionChange = (e) =>{
        setSelectedRows(e);
    }
  return (
<div className='data-table'>
    <Header data={data} selectedRows={selectedRows} onSelectionChange={(e)=>handleSelectionChange(e)}></Header>
    <table>
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Device</th>
                <th>Path</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {data.map((row, index)=> (
                <tr key={index}>
                    <td><Checkbox checked={selectedRows.includes(row)} onChange={()=>handleSelectRow(row)}></Checkbox></td>
                    <td>{row.name}</td>
                    <td>{row.device}</td>
                    <td>{row.path}</td>
                    <td>{row.status.toLowerCase() === 'available'?<span className='availableStatusClass'></span> : ''}
                        {row.status}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  
   
  )
}

export default DataGrid