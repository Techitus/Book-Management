import { useState } from "react"
import Navbar from "../../components/Navbar"

const AddBlog = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);  
    const toggleFormVisibility = () => {
      setIsFormVisible(!isFormVisible);
      console.log(isFormVisible)
    };
  return (
<>
<Navbar openForm={toggleFormVisibility}  />
{
    isFormVisible ? (
        <div className=" fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 ">
          <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg space-y-4">
            <h2 className="text-2xl font-bold mb-4">Form Title</h2>
            
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
              <input 
                type="text" 
                id="title" 
                name="title" 
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" 
                required 
              />
            </div>
            
            <div>
              <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">Subtitle:</label>
              <input 
                type="text" 
                id="subtitle" 
                name="subtitle" 
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" 
              />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
              <textarea 
                id="description" 
                name="description" 
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" 
                required 
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
              <select 
                id="category" 
                name="category" 
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              >
                <option value="">Select a category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image:</label>
              <input 
                type="file" 
                id="image" 
                name="image" 
                className="mt-1 block w-full text-gray-500" 
              />
            </div>
            
            <div className="flex justify-end">
              <button 
                type="button" 
                onClick={toggleFormVisibility}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
    ): null
} 

</>  
)
}

export default AddBlog