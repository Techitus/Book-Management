/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux"
import Background from "../../global/background/Background"
import Form from "./components/Form"
import { useNavigate } from "react-router-dom"
import { login, setStatus } from "../../../store/authSlice"
import { useEffect, useState } from "react"
import STATUSES from "../../global/statuses/statuses"

const Login = () => {
  const {status,user} = useSelector((state)=> state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const loginSubmit = (data)=>{
    dispatch(login(data))

  }
  useEffect(()=>{
    if(status === STATUSES.SUCCESS){
    dispatch(setStatus(null))
    navigate('/')

    }
  },[status])
  useEffect(()=>{
    if(status === STATUSES.ERROR){
      dispatch(setStatus(null))
      setEmailError(true),
      setPasswordError(true)

    }
  },[status])
  return (
    <>
    <div>
    <Background/>
    <Form type="Login" user={user} onSubmit={loginSubmit} emailError = {emailError} passwordError={passwordError}/>
    </div>

    </>
  )
}

export default Login
