import React from 'react'
import Checkbox from '../common/Checkbox'
import '../../styles/Header.css'

const Header = ( {data, selectedRows, onSelectionChange}) => {
    const isAllRowSelected = selectedRows.length === data.length;
    const someRowSelected = selectedRows.length > 0 && !isAllRowSelected;
    const isDownloadButtonEnable =  selectedRows.length > 0 && selectedRows.length === selectedRows.filter(row=> row.status.toLowerCase() === 'available').length;
    const handleAllSelect = () => {
        if(isAllRowSelected) {
            onSelectionChange([]);
        } else{
            onSelectionChange(data);
        }
    }

    const handleDownloadClick = ()=>{
        alert(`Downloaded Items : ${JSON.stringify(selectedRows, null, 2)} `);

    }

  return (
    <div className='header-wrapper'>
    <div>
    <Checkbox checked={isAllRowSelected} intermediateState={someRowSelected} onChange={handleAllSelect}></Checkbox>
    <span>{selectedRows.length > 0 ? `${selectedRows.length} Selected` : "None Selected"}</span>
    </div>
    <button className='download-button' onClick={handleDownloadClick} disabled={!isDownloadButtonEnable}>
      <span className='download-arrow-icon'>⬇</span>
      Download Selected
    </button>
    </div>
  )
}

export default Header