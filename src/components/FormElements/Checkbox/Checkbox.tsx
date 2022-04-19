import React from 'react';
import './checkbox.css'

type Props = {
    label: string,
    variant: 'default' |'primary' | 'secondary',
    size?: 'default' | 'small' | 'medium' | 'large',
    disable: boolean
}

const Checkbox = (props: Props) => {
   const {label, variant, size, disable} = props;
    return (
        <>
            <label className={`form-control checkbox-${variant} size-${size}`}>
                <input disabled={disable} type="checkbox" name="checkbox" />
                {label}
            </label>
        </>
    )
}

export default Checkbox