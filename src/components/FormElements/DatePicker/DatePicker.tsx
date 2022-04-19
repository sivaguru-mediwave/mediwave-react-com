import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

type Props = {
    label: string
    placeholder: string,
}

const DatePickers = (props:Props) => {
    const {label, placeholder} = props;
    const [startDate, setStartDate] = useState<Date>(new Date());
  return (
    <div className="form-group">
          <label className='control-label'>{label}</label>
          <div className='input-group'>
            
          <DatePicker className="form-control" placeholderText={placeholder} selected={startDate} onChange={(date:Date) => setStartDate(date)} />
            
          </div>
    </div>
  )
}

export default DatePickers;