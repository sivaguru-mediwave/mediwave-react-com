import React from 'react';
import './button.css'

type Props = {
    type: 'button' | 'submit' | 'reset',
    label: string,
    variant: 'primary' | 'secondary' | 'outline' | 'rounded' | 'inverted' | 'link',
    size?: 'default' | 'small' | 'medium' | 'large',
    backgroundColor?: string,
    fullWidth?: boolean,
    icon?:boolean,
    disable?:boolean,
}

const Button = (props: Props) => {
    const {type, label, variant, fullWidth, backgroundColor, icon, disable, size} = props;
    const width = fullWidth ? 'button-full-width' : ''
    const style = {
        backgroundColor: backgroundColor ? backgroundColor : '',
    }
    return (
        <>
            <button disabled={disable} style={style} type={type} className={`button button-${variant} ${width} button-${size}`}>
                {icon ? <i className='fa fa-user'></i> : ''} {label}
            </button>
        </>
    )
}

export default Button;