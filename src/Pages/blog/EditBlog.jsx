/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams,  } from "react-router-dom"
import { editBlog, fetchSingleBlog, setEditStatus } from "../../../store/blogSlice"

 
 
 const EditBlog = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    const {inputData, editStatus} = useSelector((state)=>state.blog)
    const [data,setData] = useState({
        title: '',
        descripton : '',
        image : '',
        subtitle : '',
        category : ''
      }
    )
    useEffect(()=>{
        dispatch(fetchSingleBlog(id))
    },[id])

    useEffect(()=>{
        if(inputData){
            setData({
                title: inputData.title,
                descripton : inputData.descripton,
                image : inputData.image,
                subtitle : inputData.subtitle,
                category : inputData.category
            })
        }
    },[inputData])
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData({
        ...data,
        [name]: name === 'image' ? e.target.files[0] : value
      });
    }
    const handleEditSubmit = (e) => {
      e.preventDefault()
  
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('descripton', data.descripton);
      formData.append('subtitle', data.subtitle);
      formData.append('category', data.category);
      if (data.image) {
        formData.append('image', data.image);
      }
  
      dispatch(editBlog({ formData, id }));
    }
  
    useEffect(()=>{
        if(editStatus === true){
            dispatch(setEditStatus(null))
            navigate(`/blog/${id}`)
        }

    },[editStatus])
   return (
<>
<div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 ">
      <form onSubmit={handleEditSubmit} >
        <div className="">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-10 h-full w-full bg-brown-800  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-[#42ff1c] mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <Link to={`/blog/${id}`} className="hover:opacity-70 absolute top-4 right-5 cursor-pointer group">
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    width="1.6rem"
    height="1.6rem"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.85"
      d="M19 5L5 19M5 5l14 14"
    />
  </svg>
</Link>

              <div className="max-w-md mx-auto">
                <div className="flex items-center space-x-5">
                  <div className="h-14 w-14 bg-black rounded-full flex flex-shrink-0 justify-center items-center  text-2xl font-mono">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 16 16"><path fill="white" d="M1 2.828c.885-.37 2.154-.769 3.388-.893c1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493c-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752c1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81c-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02c1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877c1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/></svg>
                  </div>
                  <div className="block pl-2 font-semibold text-2xl self-start text-white">
                    <h2 className="leading-relaxed">Edit a Book</h2>
                    <p className="text-sm text-gray-1z00 font-normal leading-relaxed">
                      Publish your creature here...
                    </p>
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-white sm:text-lg sm:leading-7">
                    <div className="flex flex-col">
                      <label className="leading-loose">Book Title</label>
                      <input
                        type="text"
                        className="px-4 py-2 border bg-[#f2f2f2]  focus:ring-[#42ff1c] focus:border-[#42ff1c] w-full sm:text-sm border-gray-900 rounded-md focus:outline-none text-gray-900"
                        placeholder="Book title"
                        onChange={handleChange}
                        value={data.title}
                      />
                    </div>
                   
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col">
                        <label className="leading-loose">Book Subtitle</label>
                        <div className="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            type="text"
                            className="pr-4 pl-10 bg-[#f2f2f2] py-2 border focus:ring-[#42ff1c] focus:border-[#42ff1c] w-full sm:text-sm border-gray-900 rounded-md focus:outline-none text-gray-900"
                            placeholder="Subtitle"
                            onChange={handleChange}
                            value={data.subtitle}

                          />
                         
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="leading-loose">Category</label>
                        <div className="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            type="text"
                            className="pr-4 pl-10 py-2 bg-[#f2f2f2] border focus:ring-[#42ff1c] focus:border-[#42ff1c] w-full sm:text-sm border-gray-900 rounded-md focus:outline-none text-gray-900"
                            placeholder="Category"
                            onChange={handleChange}
                            value={data.category}

                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Book Description</label>
                      <textarea rows={5}
                        type="text"
                        className="px-4 py-2 border bg-[#f2f2f2] focus:ring-[#42ff1c] focus:border-[#42ff1c] w-full sm:text-sm border-gray-900 rounded-md focus:outline-none text-black"
                        placeholder="Book description"
                        onChange={handleChange}
                        value={data.descripton}

                      />
                       <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="file"
              />
                    </div>
                  </div>
                  <div className="pt-4 flex items-center space-x-4">
                    <Link to={`/blog/${id}`} className="flex justify-center items-center border bg-red-700 hover:bg-red-900  w-full text-white px-4 py-3 rounded-md focus:outline-none">
                      <svg
                        className="w-6 h-6 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>{" "}
                      Cancel
                    </Link>
                    <button type="submit" className="bg-[#39a724] hover:bg-[#28581d] flex justify-center border items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                      Update {"  "}
                    <svg className="w-6 h-6 ml-3" xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4rem" viewBox="0 0 26 26"><path fill="white" d="M0 2v8.5L15 13L0 15.5V24l26-11z"/></svg>                    </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
</>
   )
 }
 
 export default EditBlog