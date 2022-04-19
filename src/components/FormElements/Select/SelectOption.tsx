import React, { useState } from 'react'
import './select.css';

interface SelectObject {
    label: string,
    value: string
}

const countryOption: SelectObject[] = [
    {
      label: 'Aaland Islands',
      value: 'aalandIslands'
    },
    {
      label: 'India',
      value: 'india'
    }
];

type Props = {
    label: string,
    id: string,
    name: string,
    multiple: boolean,
    disable: boolean
}

const SelectOption = (props: Props) => {
    const {label, id, name, multiple, disable} = props;
    const [selected, setselected] = useState('')

    const handleChange = (e:any) => {
      setselected(e.target.value)
    }
  return (
    <>
    <label>{label}</label>
      <div className={`select ${multiple ? 'select--multiple' : ''}`}>
          <select disabled={disable} multiple={multiple}  className='select-field' name={name} id={id} value={selected} onChange={handleChange}>
            <option value="" disabled selected>Select your option</option>
                      {countryOption.map((item) => (
                          <option key={item.value} value={item.value}>
                          {item.label}
                          </option>
                      ))}
          </select>
          <span className="focus"></span>
      </div>
    </>
  )
}

export default SelectOption;