import React, { useEffect, useRef } from 'react'

const Checkbox = ({intermediateState, checked, onChange}) => {
const checkboxRef = useRef(null);
useEffect(()=>{
if(checkboxRef.current) {
    checkboxRef.current.indeterminate = intermediateState;
}
}, [intermediateState]);
  return (
    <input type="checkbox"  ref={checkboxRef} checked={checked}  onChange={onChange} />
  )
}

export default Checkbox