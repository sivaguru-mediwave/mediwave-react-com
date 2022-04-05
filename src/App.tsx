import React, { useState } from 'react';
import InputField from './components/FormElements/InputField';
import PasswordField from './components/FormElements/PasswordField';

type FormProps = {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}

function App() {
  const [state, setstate] = useState<FormProps>({
    firstName: '',
    lastName: 'mediwave',
    email: '',
    password: ''
  });

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
            <InputField type='text' label='First Name' name='firstName' id='firstName' value={state.firstName} placeholder='Enter your first name' icon="fa fa-user" iconPostion="left" handleChange={handleChange}/>

            {/* Last Name */}
            <InputField type='text' label='Last Name' name='lastName' id='lastName' value={state.lastName} placeholder='Enter your last name' disable={true}  handleChange={handleChange}/>

            {/* Email */}
            <InputField type='email' label='Email' name='email' id='email' value={state.email} placeholder='Enter your email address' icon="fa fa-envelope" iconPostion="left" handleChange={handleChange}/>

            {/* Password */}
            <PasswordField label='Password' name='password' id='password' value={state.password} placeholder='Enter your password'  handleChange={handleChange}/>

        </div>

      </div>
    </div>
  );
}

export default App;
