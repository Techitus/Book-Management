/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
import Swal from "sweetalert2";
import {  useEffect, useState } from "react";
// import { Link } from "react-router-dom"
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { deleteBLog, fetchSingleBlog, setDeleteStatus } from "../../../store/blogSlice";
import { useNavigate, useParams } from "react-router-dom";
const SingleBlog = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const dispatch = useDispatch()
    const {id} = useParams()
   const navigate = useNavigate()
    const {inputData,deleteStatus} = useSelector((state)=>state.blog)
    console.log(inputData.title)
    useEffect(()=>{
      dispatch(fetchSingleBlog(id))
      
    },[])
        const handleDelete = ()=>{
          dispatch(deleteBLog(id))
        
        }
        useEffect(()=>{
          if(deleteStatus === true){
            setDeleteStatus(null)
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Blog Deleted Sucessfully",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/')}
        else{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You are not a author!",
          });
        }
      },[deleteStatus])
  return (
<>
<div className="container mx-auto px-4 py-32 ">
<div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg overflow-hidden fade-in-up hover-zoom border border-[#42ff1c]">
      <img src={inputData?.imageUrl} alt="Blog Image" className="w-full h-48 object-cover transition-transform duration-300" />
      <div className="p-6">
        <span className="inline-block bg-blue-100 text-black rounded-full px-3 py-1 text-sm font-medium mb-2">{inputData?.category}</span>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{inputData?.title}</h2>
        <h3 className="text-xl text-gray-600 mb-4">{inputData?.subtitle}</h3>
        <p className="text-gray-700 mb-6">
{inputData?.descripton}        </p>
        <div className="flex items-center mb-4">
          <span className="mr-2">Rating:</span>
          <div className="flex space-x-1 text-yellow-500">
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1;
              return (
                <FaStar
                  key={index}
                  className={`cursor-pointer ${ratingValue <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                  onClick={() => setRating(ratingValue)}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(0)}
                  size={24}
                />
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <button className="text-white bg-blue-500 hover:bg-blue-700 font-semibold px-4 py-2 rounded-lg transition-colors duration-300">Edit</button>
          <button onClick={handleDelete} className="text-white bg-red-500 hover:bg-red-700 font-semibold px-4 py-2 rounded-lg transition-colors duration-300">Delete</button>
        </div>
      </div>
    </div>
    </div>
</>  
)
}

export default SingleBlog