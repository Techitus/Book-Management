/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

/* eslint-disable react/no-unknown-property */
const Navbar = ({openForm}) => {
  
  

  return (
      <>
          <nav className="flex justify-between sticky top-0 px-20 py-10 items-center h-full w-full bg-black border border-gray-100 z-50">
              <h1 className="text-xl text-white font-bold sm:ml-0">BMS</h1>
              <div className="flex items-center">
                  <Link to={'/blog/add'} onClick={openForm}    className="hover:opacity-70 w-6 h-6 mr-6 cursor-pointer">
                      <svg   xmlns="http://www.w3.org/2000/svg" width="1.7rem" height="1.7rem" viewBox="0 0 48 48">
                          <g fill="none" stroke="#42ff1c" stroke-linejoin="round" stroke-width="4">
                              <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                              <path stroke-linecap="round" d="M24 16v16m-8-8h16" />
                          </g>
                      </svg>
                  </Link>
                  <div className="relative sm:hidden md:block">
                      <input
                          className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-[#42ff1c] focus:border-[#42ff1c] focus:shadow-outline"
                          id="username"
                          type="text"
                          placeholder="Search..."
                      />
            <div className="absolute right-0 inset-y-0 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="absolute left-0 inset-y-0 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <ul className="flex items-center space-x-10 cursor-pointer mb-1">
            <Link to={'/'} className="cursor-pointer ml-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.9rem" height="1.9rem" viewBox="0 0 24 24">
                <path fill="white" d="m21.743 12.331l-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1-1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669" />
              </svg>
            </Link>
            <li>
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.9rem" height="1.9rem" viewBox="0 0 24 24">
                  <path fill="white" d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z" />
                </svg>
                <div className="px-1 bg-red-500 rounded-full text-center text-black text-sm absolute -top-3 -end-2">
                  3
                  <div className="absolute top-0 start-0 rounded-full -z-10 animate-ping bg-teal-200 w-full h-full"></div>
                </div>
              </div>
            </li>
            
              
            <li className="flex ">
            <Link to={'/login'} className="relative bg-transparent flex items-center space-x-2 text-[#42ff1c] font-semibold py-2 px-4 border border-[#42ff1c] rounded overflow-hidden group">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 z-50" viewBox="0 0 24 24">
    <path fill="white" d="M10 11H2.048c.502-5.053 4.765-9 9.95-9c5.523 0 10 4.477 10 10s-4.477 10-10 10c-5.185 0-9.448-3.947-9.95-9h7.95v3l5-4l-5-4z" />
  </svg> 
  <span className="group-hover:text-white z-50">Login</span>
  <span className="absolute top-0 -left-2 w-0 h-full bg-[#42ff1c] rounded transition-all duration-300 origin-left group-hover:w-full"></span>
</Link>
           


            </li>
         

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
