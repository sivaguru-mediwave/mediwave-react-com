import React from 'react';
import './input.css'

type Props = {
    label?: string,
    type: 'text' | 'email' | 'search' | 'url' | 'number',
    placeholder?: string,
    disable?: boolean,
    readonly?: boolean,
    backgroundColor?: string,
    borderColor?: string,
    borderRadius?: string,
    size?: 'small' | 'medium' | 'large',
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const InputField = (props: Props) => {
    const {label, type, placeholder, disable, readonly ,backgroundColor,borderColor, borderRadius, size, handleChange} = props;
    const background = {
        backgroundColor: backgroundColor ? backgroundColor : 'none',
        borderColor: borderColor ? borderColor : '#ddd',
        borderRadius: borderRadius ? borderRadius : '0'
    }

  return (
    <div className="form-group">
          <label className='control-label'>{label}</label>
          <div className='input-group'>
            <input
                style={background}
                className={`form-control control-${size}`}
                type={type}
                disabled={disable}
                readOnly={readonly}
                placeholder={placeholder}
                onChange={handleChange}
            ></input>
            
          </div>
    </div>
  )
};

export default InputField;