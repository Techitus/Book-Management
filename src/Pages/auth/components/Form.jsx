/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './Form.css'
import { useState } from 'react'
const Form = ({type, onSubmit}) => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password : ''

  })
  const handleChange = (e)=>{
    const {name,value} = e.target
    setData({
      ...data,
      [name]:value

    })

  }
  const handleSubmit = (e)=>{
    e.preventDefault()
onSubmit(data)
  }

  return (

    <div className='flex justify-center items-center mt-32'>
            <form onSubmit={handleSubmit} className="form mt-10 w-[40%] items-center justify-center ">
              <h1 className='header-text'>Book Store System</h1>
  {
    type === 'Register' && (
        <div className="group ">
    <input required="true" name="username" className="main-input" type="text" onChange={handleChange }/>
    <span className="highlight-span"></span>
    <label className="lebal-email">Name</label> 
  </div>
    )
  }

  <div className="container-1">
  <div className="group ">
    <input required="true" name='email' className="main-input" type="email" onChange={handleChange}/>
    <span className="highlight-span"></span>
    <label className="lebal-email">Email</label>
  </div>
  </div>  
  <div className="container-1">
    <div className="group">
      <input required="true" name='password' className="main-input" type="password" onChange={handleChange}/>
      <span className="highlight-span"></span>
      <label className="lebal-email">password</label>
    </div>
    
  </div>
  {
    type === 'Register' ? (
      <span className='text-gray-400  font-normal mt-8 text-[14px]'>Already have an account? <Link className='text-[#42ff1c] font-bold' to="/login">Login Here</Link></span>
    ) : (
      <span className='text-gray-400  font-normal mt-8 text-[14px]'>Do not have an account? <Link className='text-[#42ff1c] font-bold' to="/register">Register Here</Link></span>

    )
  }

  {
    type === 'Register' ? (
<button  className="button-48 " role="button"><span className="text">Register</span></button>
    ) : (
<button className="button-48" role="button"><span className="text">Login</span></button>

    )
  }
  
</form>
</div>
  )
}

export default Form