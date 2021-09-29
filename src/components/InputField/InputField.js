import React from 'react';
import './InputField.css'

const InputField = ({ input, type, label, meta: { error, touched } }) => {
    return (
        <div className="InputField">
          <label className="input_label">{label}</label>
          <br/>
          <input className="input_field" type={type} {...input} style={{ marginBottom: '5px' }} />
          <div className="red-text" style={{ marginBottom: '20px' }}>
            {touched && error}
          </div>
        </div>
      );
}
 
export default InputField;