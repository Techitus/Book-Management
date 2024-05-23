/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux"
import Background from "../../global/background/Background"
import Form from "./components/Form"
import { useNavigate } from "react-router-dom"
import { login, setStatus } from "../../../store/authSlice"
import { useEffect } from "react"
import STATUSES from "../../global/statuses/statuses"

const Login = () => {
  const {status} = useSelector((state)=> state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loginSubmit = (data)=>{
    dispatch(login(data))

  }
  useEffect(()=>{
    if(status === STATUSES.SUCCESS){
    dispatch(setStatus(null))
    navigate('/')

    }
  },[status])
  return (
    <>
    <div>
    <Background/>
    <Form type="Login" onSubmit={loginSubmit} />
    </div>

    </>
  )
}

export default Login
