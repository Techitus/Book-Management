/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */

import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../components/Navbar";
import { Rating } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteBLog, fetchSingleBlog, resetDeleteStatus } from "../../../store/blogSlice";

const SingleBlog = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const dispatch = useDispatch();
  const { inputData, deleteStatus } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchSingleBlog(id));
  }, [id]);

  const handledeleteBook = ()=>{
    dispatch(deleteBLog(id))
  }
 useEffect(() =>{
   if(deleteStatus===true){
     toast.success("Book Deleted Successfully")
     setTimeout(()=>{
      dispatch(resetDeleteStatus())
    navigate('/')
     },2000)
   }
 },[deleteStatus,navigate,dispatch])
  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="book image"
              className="h-[500px] w-[500px] rounded"
              src={inputData?.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-2 lg:mt-0">
              <h1 className="text-orange-500 text-5xl tracking-normal title-font font-medium mb-1">
                {inputData?.title}
              </h1>
              <div className="flex mb-4 gap-5">
                <span className="text-sm title-font text-gray-400 italic">
                  Genre: {inputData?.genre}
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 32 32"
                  >
                    <path fill="white" d="M11 3v26h2V3zm8 0v26h2V3z" />
                  </svg>
                </span>
                <span className="text-sm title-font text-gray-400 italic">
                  isbn No.: {inputData?.isbnNumber}
                </span>
              </div>
              <span className="text-lg title-font text-gray-600 tracking-wide gap-2 italic">
                <span className="text-white normal">By :</span>    
                {" " +inputData?.author || "Unknown"}
              </span>{" "}
              <br /> <br />
              <div className="">
                <p className="leading-relaxed text-[#cfb5b5]">
                  {inputData?.description}
                </p>
               
              </div>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex items-center">
                  <Rating className="flex text-yellow-600" value={0} />
                </div>
                <div className="flex ml-6 items-center">
                  <div className="absolute">
                    <button
                      className="relative text-white px-4 w-auto h-10 bg-[#42ff1c93] rounded-full hover:bg-[#42ff1c4d] active:shadow-lg shadow transition ease-in duration-200 focus:outline-none group"
                    >
                      <svg
                        className="w-6 h-6 inline-block mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#FFFFFF"
                          fillRule="evenodd"
                          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-1.177-7.86l-2.765-2.767L7 12.431l3.119 3.121a1 1 0 0 0 1.414 0l5.952-5.95l-1.062-1.062z"
                        />
                      </svg>
                      <span className="absolute -mt-16 inset-0 flex items-center text-sm justify-center text-yellow-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-2 transition-all duration-300">
                        Submit
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex ">
                <span className="title-font font-medium text-2xl text-red-700">
                  Rs.999
                </span>
                <div className="flex ml-52 gap-10">
                  <Link
                    to={`/blog/edit/${id}`}
                    className="flex ml-auto relative bg-transparent space-x-2 text-[#42ff1c] font-semibold py-2 px-4 border border-[#42ff1c] rounded overflow-hidden group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 z-50"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#f2f2f2"
                        d="M16.698 21.996h-11.6a3.06 3.06 0 0 1-2.2-.92a3.09 3.09 0 0 1-.9-2.21V7.276a3 3 0 0 1 .91-2.19a3 3 0 0 1 1-.67a3.06 3.06 0 0 1 1.2-.24h4.44a.75.75 0 0 1 0 1.5h-4.44a2 2 0 0 0-.63.12a1.62 1.62 0 0 0-.99 1.5v11.59a1.62 1.62 0 0 0 .47 1.16a1.62 1.62 0 0 0 1.15.47h11.6c.213 0 .423-.04.62-.12a1.54 1.54 0 0 0 .52-.35a1.49 1.49 0 0 0 .35-.52a1.51 1.51 0 0 0 .13-.63v-4.44a.75.75 0 1 1 1.5 0v4.47a3.06 3.06 0 0 1-.92 2.2a3.16 3.16 0 0 1-1 .68c-.387.14-.798.205-1.21.19"
                      />
                      <path
                        fill="#f2f2f2"
                        d="M21.808 5.456a1.86 1.86 0 0 0-.46-.68l-2.15-2.15a1.86 1.86 0 0 0-.68-.46a2.1 2.1 0 0 0-2.31.46l-1.71 1.71v.05l-7.74 7.73a2.11 2.11 0 0 0-.61 1.48v2.17a2.12 2.12 0 0 0 2.11 2.11h2.17a2.07 2.07 0 0 0 1.48-.62l7.74-7.74l1.72-1.72c.202-.19.36-.422.46-.68a2 2 0 0 0 0-1.63zm-1.38 1.05a.56.56 0 0 1-.14.2l-1.22 1.22l-3-3l1.23-1.23a.64.64 0 0 1 .44-.18a.59.59 0 0 1 .23.05c.076.032.145.08.2.14l2.16 2.15a.69.69 0 0 1 .13.2a.59.59 0 0 1 0 .23a.6.6 0 0 1-.03.22"
                      />
                    </svg>
                    <span className="group-hover:text-white z-50">Edit</span>
                    <span className="absolute top-0 -left-2 w-0 h-full bg-[#34a11f] rounded transition-all duration-300 origin-left group-hover:w-full"></span>
                  </Link>
                  <button
                  onClick={handledeleteBook}
                    className="flex ml-auto relative bg-transparent space-x-2 text-red-700 font-semibold py-2 px-4 border border-[#e63629] rounded overflow-hidden group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 z-50"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        fillRule="evenodd"
                        d="m6.774 6.4l.812 13.648a.8.8 0 0 0 .798.752h7.232a.8.8 0 0 0 .798-.752L17.226 6.4zm11.655 0l-.817 13.719A2 2 0 0 1 15.616 22H8.384a2 2 0 0 1-1.996-1.881L5.571 6.4H3.5v-.7a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 .5.5v.7zM14 3a.5.5 0 0 1 .5.5v.7h-5v-.7A.5.5 0 0 1 10 3zM9.5 9h1.2l.5 9H10zm3.8 0h1.2l-.5 9h-1.2z"
                      />
                    </svg>
                    <span className="group-hover:text-white z-50">Delete</span>
                    <span className="absolute top-0 -left-2 w-0 h-full bg-[#8a2626] rounded transition-all duration-300 origin-left group-hover:w-full"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default SingleBlog;
