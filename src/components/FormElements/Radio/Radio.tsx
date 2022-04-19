import React, { useState } from 'react';
type Props = {
  id: string,
  name: string,
  value: string,
  stateValue: string,
  label: string,
  disable?: boolean,
  handleChange: (e:any) => void;
}

const Radio = (props: Props) => {
  const {id, name, value,stateValue, label, handleChange} = props;
  return (
    <>
        <label className="form-control">
            <input onChange={handleChange} type='radio' id={id} name={name} value={value} checked={stateValue === value} />
            {label}
        </label>
    </>
  )
}

export default Radio;