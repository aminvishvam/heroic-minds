import classNames from "classnames";
import React from "react";
import "./RenderField.css";

const RenderField = ({
  input,
  label,
  type,
  className,
  meta: { touched, error, warning },

}) => {
  const isCheckbox = type === 'checkbox';
  const inputClass = classNames({
    'input-field': !className,
    [className]: className,
  });

  return (
    <div>
      {!isCheckbox && <label className='form-label' >{label}</label>}
      <div style={{ padding: '10px 0px' }}>
        <input className={inputClass} style={{ minWidth: isCheckbox && '24px', height: isCheckbox && '24px' }} {...input} placeholder={label} type={type} />
        {isCheckbox && <span className='checkbox-label'>{label}</span>}
        {touched &&
          ((error && <div className='error-text'>{error}</div>) ||
            (warning && <div className='error-text'>{warning}</div>))}
      </div>

    </div>
  );
}

export default RenderField;
