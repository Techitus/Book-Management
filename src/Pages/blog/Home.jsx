/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

import { useDispatch, useSelector } from "react-redux"
import Card from "../../components/Card"
import Navbar from "../../components/Navbar"
import { useEffect } from "react"
import { fetchBlog } from "../../../store/blogSlice"

const Home = () => {
  const dispatch = useDispatch()
  const {inputData} = useSelector((state)=> state.blog)
  useEffect(()=>{
   dispatch(fetchBlog())
  },[])
  return (
<>
<Navbar/>
<div className="flex mt-10  space-x-4 text-3xl ml-10">
<svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.8rem" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z"/></svg>
<h1 className="text-white">All Collector's Books</h1>
</div>
<div className="flex justify-between flex-wrap mt-6 mx-10">

{
  inputData && inputData.map((data)=>{
    return <Card key = {data.id} data = {data} />
  })
}

</div>



</>  
)
}

export default Home