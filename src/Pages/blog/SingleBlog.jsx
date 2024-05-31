/* eslint-disable react/no-unknown-property */

import { useState } from "react";

// import { Link } from "react-router-dom"
import { FaStar } from 'react-icons/fa';
const SingleBlog = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
  return (
<>
<div className="container mx-auto px-4 py-32 ">
<div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg overflow-hidden fade-in-up hover-zoom border border-[#42ff1c]">
      <img src="https://via.placeholder.com/400x200" alt="Blog Image" className="w-full h-48 object-cover transition-transform duration-300" />
      <div className="p-6">
        <span className="inline-block bg-blue-100 text-black rounded-full px-3 py-1 text-sm font-medium mb-2">Category</span>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Blog Title</h2>
        <h3 className="text-xl text-gray-600 mb-4">Blog Subtitle</h3>
        <p className="text-gray-700 mb-6">
          This is a brief description of the blog post. It provides an overview of the content and entices readers to read more.
        </p>
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
          <button className="text-white bg-red-500 hover:bg-red-700 font-semibold px-4 py-2 rounded-lg transition-colors duration-300">Delete</button>
        </div>
      </div>
    </div>
    </div>
</>  
)
}

export default SingleBlog