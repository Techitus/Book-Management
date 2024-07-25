/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux"
import Background from "../../global/background/Background"
import Form from "./components/Form"
import { register, setStatus } from "../../../store/authSlice";
import STATUSES from "../../global/statuses/statuses";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // eslint-disable-next-line no-unused-vars
  const { status } = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (data)=>{
      dispatch(register(data))
    }
    useEffect(()=>{
      if(status === STATUSES.SUCCESS)
navigate('/login')
dispatch(setStatus(null))
    },[status])


  return (
    <>
    <Background/>
    <Form type="Register" onSubmit={handleSubmit}/>
    </>
  )
}

export default Register