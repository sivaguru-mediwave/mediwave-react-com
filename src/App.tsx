import React, { useState } from 'react';
import InputField from './components/FormElements/Input/InputField';
import Radio from './components/FormElements/Radio/Radio';
import Button from './components/UI/Button/Button';
// import PasswordField from './components/FormElements/PasswordField';

type FormProps = {
  firstName: string,
  gender: string
}

function App() {
  const [state, setstate] = useState<FormProps>({
    firstName: '',
    gender: 'Male'
  });

  const genderOptions = [
    {
      label: 'Visa',
      value: 'Male'
    },
    {
      label: 'MasterCard',
      value: 'Female'
    },
    {
      label: 'PayPal',
      value: 'Other'
    }
  ]



  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setstate({...state, [event.target.name]: event.target.value})
  };
  
  return (
    <div className='container'>
      <div className="form-box">

        {/* Header */}
        <div className="header">
          <h2>Form elements</h2>
        </div>

        {/* Form elements */}
        <div className="form-area">
            {/* First Name */}
            <InputField type='text' label='First Name' handleChange={handleChange}/>

            {/* Gender */}
            <ul className='radio-option'>
            {
              genderOptions.map((item) => (
                <li>
                  <Radio key={item.value} id='gender' label={item.label} value={item.value} name="gender" stateValue={state.gender} handleChange={handleChange} /> 
                </li>
              ))
            }
            </ul>

            {/* Button */}
            <Button type="button" label="Submit" variant='primary'/>
        </div>

      </div>
    </div>
  );
}

export default App;
