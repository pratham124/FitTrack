import React from "react";

const FormRow = ({
  type,
  name,
  labelText,
  defaultValue = "",
  readOnly = false,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="form-input"
        defaultValue={defaultValue}
        required
        readOnly={readOnly}
      />
    </div>
  );
};

export default FormRow;
