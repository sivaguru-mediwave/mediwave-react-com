import React, { useState } from 'react';
import InputField from './components/FormElements/InputField';
import Button from './components/UI/Button/Button';
// import PasswordField from './components/FormElements/PasswordField';

type FormProps = {
  firstName: string,
}

function App() {
  const [state, setstate] = useState<FormProps>({
    firstName: '',
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
            <InputField type='text' label='First Name' handleChange={handleChange}/>
            {/* Button */}
            <Button type="button" label="Submit" variant='primary'/>
        </div>

      </div>
    </div>
  );
}

export default App;
