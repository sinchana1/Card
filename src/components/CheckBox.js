import React from 'react'
import '../checkbox.css';

const CheckBox = () =>{
  return (
    <div className="prod-check">
        <input className="ip-check" type="checkbox" checked='checked' name="prod1"/>
        <span className="checkmark"></span>
    </div>
  )
}

export default CheckBox
