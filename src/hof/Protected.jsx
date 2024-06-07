/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const Protected = ({children}) => {
  const {token} = useSelector((state)=>state.auth)
  console.log(token)
const isAuthenticated = token || localStorage.getItem('token')  
if(!isAuthenticated){
  return <>
  <Navigate to={'/login'}/> 


  </>
}else{
  return (
    <>
    {children}
    </>
  )
}
  
}

export default Protected