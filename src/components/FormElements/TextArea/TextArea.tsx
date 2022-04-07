import React from 'react';
import './text-area.css';

type Props = {
    label?: string,
    placeholder?: string,
    id:string,
    name: string,
    disable?: boolean,
    readonly?: boolean,
    backgroundColor?: string,
    borderColor?: string,
    borderRadius?: string,
    size?: 'default' | 'small' | 'medium' | 'large',
    rows: number,
    fixedSize: boolean,
    handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = (props:Props) => {
    const {label, placeholder,id, name, disable, readonly, backgroundColor, borderRadius,borderColor, size, rows, fixedSize, handleChange} = props;
    const style:any = {
        backgroundColor: backgroundColor ? backgroundColor : 'none',
        borderColor: borderColor ? borderColor : '#ddd',
        borderRadius: borderRadius ? borderRadius : '0',
        resize: fixedSize ? 'none' : 'vertical'
    }
  return (
   <>
    <div className="form-group">
          <label className='control-label'>{label}</label>
          <div className='input-group'>
            
            <textarea
                id={id}
                name={name}
                style={style}
                className={`textarea-form-control textarea-control-${size}`}
                disabled={disable}
                readOnly={readonly}
                placeholder={placeholder}
                rows={rows ? rows : 3}
                onChange={handleChange}
            ></textarea>
            
          </div>
    </div>
   </>
  )
}

export default TextArea;