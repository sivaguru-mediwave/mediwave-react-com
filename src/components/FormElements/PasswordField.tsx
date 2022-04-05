import React, { useState } from 'react';

type Props = {
    label?: string,
    placeholder: string,
    name: string,
    id: string,
    value: string,
    disable?: boolean,
    readonly?: boolean,
    errorMessage?: string,
    autocomplete?:string,
    autofocus?:boolean,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordField = (props: Props) => {
    const {label, placeholder, name, id, value, disable, readonly, errorMessage, autocomplete, autofocus, handleChange} = props;

    const [show, setshow] = useState<Boolean>(false);

    const handleClickShowPassword = () => {
        setshow(!show);
    };

  return (
    <div className="form-group">
          <label className='control-label'>{label}</label> 
          <div className='input-group'>
            <input 
                className='form-control' 
                type={show ? 'text' : 'password'}
                placeholder={placeholder}
                name={name}
                id={id}
                value={value}
                disabled={disable}
                readOnly={readonly}
                autoFocus={autofocus}
                autoComplete={autocomplete}
                onChange={handleChange}
            ></input>
           <div className='input-group-append right-icon'>
                <span onClick={handleClickShowPassword} className='input-group-text'>
                    <i className={show ? 'fa fa-eye' : 'fa fa-eye-slash'}></i>
                </span>
            </div>
            
          </div>
          <div className='errorMessage'>{errorMessage}</div>
    </div>
  )
}

export default PasswordField;