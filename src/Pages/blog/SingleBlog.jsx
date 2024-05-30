/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom"

const SingleBlog = () => {
  return (
<>
<div className="mt-20 bg-gray-100 flex flex-col justify-center">
  <div className="relative m-3 flex flex-wrap mx-auto justify-center">
                        <div className="min-w-[340px]flex flex-col group">
                            <div
                                className="h-48 md:h-56 lg:h-[24rem] w-full bg-red-500 border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">

                                <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                    className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
                                    alt=""/>

                                <div
                                    className="absolute z-10 border-4 border-primary w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500">
                                </div>

                            </div>
                            <a href="#"
                                className=" block text-black text-center hover:text-primary transition-colors duration-150 text-lg md:text-xl mb-1">
                                Lorem ipsum dolor sit amet.</a>


                            <p className="mb-4 font-light  text-sm md:text-sm text-center text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti cupiditate voluptatibus ea fuga consequuntur eum saepe. Consequatur nobis aliquam nam reprehenderit rerum odit natus culpa veniam cum veritatis modi, recusandae consequuntur quia nostrum deserunt, id facilis voluptatem in sapiente vel neque. Consequuntur nulla, dolor harum ducimus laborum illo in quia.</p>

                            <div className="flex justify-center gap-x-3">
                                <Link to={ `/blog/edit/`}
                                    className=" px-5 py-2 border border-primary text-primary hover:bg-primary  transition-all outline-none bg-black border-black text-white hover:text-black hover:bg-white font-bold">
                                    Edit</Link>
                                <button 
                                    className="px-5 py-2 border border-primary text-primary hover:bg-primary  transition-all outline-none bg-white border-black text-black hover:text-white hover:bg-black font-bold">
                                    Delete</button>
                            </div> <br />
                            <div>
                                <p>Created By:kamal</p>
                            </div>

                        </div>
  </div>
    </div>
</>  
)
}

export default SingleBlog