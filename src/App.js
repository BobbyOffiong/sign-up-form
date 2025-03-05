import './App.css';
import React, { useState } from 'react';
function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
})

const [errors, setErrors] = useState({});

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData, [name] : value
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {}
    if(!formData.firstName.trim()) {
        validationErrors.firstName = 'First Name cannot be empty';
        document.querySelector('.fnameInput').style.border = '3px solid rgb(216, 120, 120)';
        document.querySelector('.ex-mark1').style.backgroundColor = 'rgb(235, 94, 94)'; 
    }

    if(!formData.lastName.trim()) {
        validationErrors.lastName = 'Last Name cannot be empty';
        document.querySelector('.lnameInput').style.border = '3px solid rgb(216, 120, 120)';
        document.querySelector('.ex-mark2').style.backgroundColor = 'rgb(235, 94, 94)';
    }

    if (!formData.email.trim()) {
        validationErrors.email = 'email is required';
        document.querySelector('.emailInput').style.border = '3px solid rgb(216, 120, 120)';
        document.querySelector('.ex-mark3').style.backgroundColor = 'rgb(235, 94, 94)';
    } else if(!/\S+@\S\.\S+/.test(formData.email)){
        validationErrors.email = 'Looks like this is not an email';
        document.querySelector('.emailInput').style.border = '3px solid rgb(216, 120, 120)';
        document.querySelector('.ex-mark3').style.backgroundColor = 'rgb(235, 94, 94)';
    }

    if (!formData.password.trim()) {
        validationErrors.password = 'Password cannot be empty';
        document.querySelector('.passwordInput').style.border = '3px solid rgb(216, 120, 120)';
        document.querySelector('.ex-mark4').style.backgroundColor = 'rgb(235, 94, 94)';
    }
    
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
        alert('Form submitted successfully')
    }


}
  
  return (
            
            <div className='mt-5 challengeContainer'>
              <div className='row'>
            <div className='text-white col-md-6 introDiv pe-0'>
            <h1 className='firstHeading'>Learn to code by watching others</h1>
            <p className='firstPara mt-4'>See how experienced developers 
            solve problems in real-time. Watching scripted tutorials is great,
      but understanding how developers think is invaluable.</p>
      </div>

      <div className='col-md-6 ps-0'>
      <div className='tryItDiv rounded-2 py-1 mb-4'>
        <p className='text-white tryItPara pt-3'><strong>Try it free 7 days</strong> 
        <span className='tryItSpan'>  then $20/mo. thereafter</span></p>
      </div>

      <div className='bg-white inputsDiv py-4 rounded-2'>
      <form onSubmit={handleSubmit}> 
        <div className='mb-3'>
          <div className='fnameInput mt-3 rounded-2'>
        <input placeholder='First Name' className='py-3 ps-4 
         inputField' onChange={handleChange} name='firstName'/>
         <span className='ex-mark1 px-2 rounded-5 ms-4'>!</span><br/>
        </div>
        <div className='errorDiv'>
        {errors.firstName && <span className='errorSpan'>{errors.firstName}</span>}
        </div></div>

        <div className='mb-3'>
          <div className='lnameInput rounded-2 mt-1'>
        <input placeholder='Last Name' className='inputField 
         py-3 ps-4' name='lastName' onChange={handleChange}/>
         <span className='ex-mark2 px-2 rounded-5 ms-4'>!</span>
        <br/></div>
        <div className='errorDiv'>
        {errors.lastName && <span className='errorSpan'>{errors.lastName}</span>}
        </div></div>

        <div className='mb-3'>
          <div className='rounded-2 mt-1 emailInput'>
        <input placeholder='Email Address' className='inputField 
         py-3 ps-4' name='email' onChange={handleChange}/>
         <span className='ex-mark3 px-2 rounded-5 ms-4'>!</span><br/>
        </div>
        <div className='errorDiv'>
        {errors.email && <span className='errorSpan'>{errors.email}</span>}
        </div></div>

        <div className='mb-3'>
          <div className='rounded-2 mt-1 passwordInput'>
        <input placeholder='Password' className='inputField  
       py-3 ps-4' type='password' name='password' 
        onChange={handleChange}/>
        <span className='ex-mark4 px-2 rounded-5 ms-4'>!</span><br/>
        </div>
        <div className='errorDiv'>
        {errors.password && <span className='errorSpan'>{errors.password}</span>}
        </div></div>

        <input className='mt-1 mb-3 claimButton rounded-2 py-3' 
        type='submit' value={'CLAIM YOUR FREE TRIAL'}/>

        <p className='spanPara'><span className='termsSpan'>By clicking 
        the button, you are agreeing to our</span> 
        <span className='redtermsSpan'> Terms and Services</span></p>
        </form>
      </div>
      </div>
      </div>
      </div>
  );
}

export default App;
