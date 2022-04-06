import React from 'react';
import './input.css'

type Props = {
    label?: string,
    type: string,
    placeholder: string,
    name: string,
    id: string,
    value: string,
    disable?: boolean,
    readonly?: boolean,
    errorMessage?: string,
    autocomplete?:string,
    autofocus?:boolean,
    icon?:string,
    iconPostion?:string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const InputField = (props: Props) => {
    const {label, type, placeholder, name, id, value, disable, readonly, errorMessage, icon, iconPostion, autocomplete, autofocus, handleChange} = props;
    

  return (
    <div className="form-group">
          <label className='control-label'>{label}</label> 
          <div className='input-group'>
            {/* Icon Postions Left */}
            {
                iconPostion === 'left' ? 
                <div className='input-group-append left-icon'>
                    <span className='input-group-text'>
                        <i className={icon}></i>
                    </span>
                </div>
                : ''
            }
            <input 
                className='form-control' 
                type={type} 
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
            {/* Icon Postions Right */}
            {
                iconPostion === 'right' ? 
                <div className='input-group-append right-icon'>
                    <span className='input-group-text'>
                        <i className={icon}></i>
                    </span>
                </div>
                : ''
            }
            
          </div>
          <div className='errorMessage'>{errorMessage}</div>
    </div>
  )
};

export default InputField;