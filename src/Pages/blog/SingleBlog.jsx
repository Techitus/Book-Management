import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteBLog, fetchSingleBlog, resetDeleteStatus } from "../../../store/blogSlice";
import Rating from "../../components/Rating";

const SingleBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { inputData, deleteStatus } = useSelector((state) => state.blog);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    dispatch(fetchSingleBlog(id));
  }, [dispatch, id]);

  const handledeleteBook = () => {
    dispatch(deleteBLog(id));
  };

  useEffect(() => {
    if (deleteStatus === true) {
      toast.success("Book Deleted Successfully");
      setTimeout(() => {
        dispatch(resetDeleteStatus());
        navigate('/');
      }, 2000);
    }
  }, [deleteStatus, navigate, dispatch]);

  const handleSubmit = () => {
    toast.success(`Rating of ${rating} submitted successfully!`);
  };

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
                  ISBN No.: {inputData?.isbnNumber}
                </span>
              </div>
              <span className="text-lg title-font text-gray-600 tracking-wide gap-2 italic">
                <span className="text-white normal">By:</span> {" " + inputData?.author || "Unknown"}
              </span>
              <br /> <br />
              <div>
                <p className="leading-relaxed text-[#cfb5b5]">
                  {inputData?.description}
                </p>
              </div>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex items-center">
                  <Rating setRating={setRating} />
                </div>
                <div className="flex ml-6 items-center">
                  <button
                    onClick={handleSubmit}
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
              <div className="flex">
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
                        d="M21.808 5.456a1.86 1.86 0 0 0-2.65 0l-8.79 8.789a.75.75 0 0 0-.19.32l-1.34 4.02a.75.75 0 0 0 .95.95l4.02-1.34a.75.75 0 0 0 .32-.19l8.79-8.79a1.87 1.87 0 0 0 0-2.649l-1.11-1.11Zm-2.65-1.64a3.36 3.36 0 0 1 4.75 0l1.1 1.1a3.36 3.36 0 0 1 0 4.75l-8.79 8.79c-.19.19-.42.34-.67.43l-4.02 1.34a2.25 2.25 0 0 1-2.84-2.85l1.34-4.02a2.27 2.27 0 0 1 .43-.67l8.79-8.79Z"
                      />
                    </svg>
                    <span>Edit</span>
                  </Link>
                  <button
                    className="flex ml-auto text-white font-semibold relative bg-red-700 space-x-2 py-2 px-4 border border-transparent rounded overflow-hidden group"
                    onClick={handledeleteBook}
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
                        fillRule="evenodd"
                        d="M20.25 5h-4.83l-.44-.89A2 2 0 0 0 13.21 3h-2.42a2 2 0 0 0-1.77 1.11L8.58 5H3.75A1.75 1.75 0 0 0 2 6.75v.5c0 .413.337.75.75.75h.75v10.5A2.75 2.75 0 0 0 7 21.25h10a2.75 2.75 0 0 0 2.75-2.75V8h.75a.75.75 0 0 0 .75-.75v-.5A1.75 1.75 0 0 0 20.25 5ZM13.21 4.5h-2.42l-.75 1.5h3.92l-.75-1.5Zm-6.71 3h11v10.5c0 .69-.56 1.25-1.25 1.25H7a1.25 1.25 0 0 1-1.25-1.25V7.5Zm2.5 2a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Zm5 0a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Zm-2.5.75a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Z"
                      />
                    </svg>
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default SingleBlog;
