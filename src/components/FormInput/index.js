import React, {useState} from 'react';
import s from './formInput.module.scss';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const {id, label, handleChange, errorMessage, ...rest} = props;
  return (
    <div className={s.formInput}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...rest}
        focused={focused.toString()}
        onChange={handleChange}
        onBlur={()=> setFocused(true)}
        onFocus={() => rest.name === 'confirmPassword' && setFocused(true)}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;