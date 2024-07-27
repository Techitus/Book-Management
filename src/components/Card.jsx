/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import Rating from "./Rating";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const currentTime = new Date().getTime();
  const createdTime = new Date(data.createdAt).getTime();
  const isHot = useMemo(() => {
    const timeDifference = currentTime - createdTime;
    const hourDifference = timeDifference / (1000 * 60 * 60);
    return hourDifference < 24;
  }, [currentTime, createdTime]);

  return (
    <>
      <div className="mx-auto sm:p-10 md:p-16">
        <div className="bg-[#f2f2f2] rounded-lg overflow-hidden shadow-xl ring-4 ring-[#42ff1c] ring-opacity-80 max-w-sm transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="relative">
            <img
              className="w-[300px] h-[280px]"
              src={data.image}
              alt="Product Image"
            />
            {isHot && (
              <div className="flex absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium animate-bounce">
                <span>Hot</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2rem"
                  height="1.2rem"
                  viewBox="0 0 128 128"
                >
                  <radialGradient
                    id="notoFire0"
                    cx="68.884"
                    cy="124.296"
                    r="70.587"
                    gradientTransform="matrix(-1 -.00434 -.00713 1.6408 131.986 -79.345)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".314" stopColor="#ff9800" />
                    <stop offset=".662" stopColor="#ff6d00" />
                    <stop offset=".972" stopColor="#f44336" />
                  </radialGradient>
                  <path
                    fill="url(#notoFire0)"
                    d="M35.56 40.73c-.57 6.08-.97 16.84 2.62 21.42c0 0-1.69-11.82 13.46-26.65c6.1-5.97 7.51-14.09 5.38-20.18c-1.21-3.45-3.42-6.3-5.34-8.29c-1.12-1.17-.26-3.1 1.37-3.03c9.86.44 25.84 3.18 32.63 20.22c2.98 7.48 3.2 15.21 1.78 23.07c-.9 5.02-4.1 16.18 3.2 17.55c5.21.98 7.73-3.16 8.86-6.14c.47-1.24 2.1-1.55 2.98-.56c8.8 10.01 9.55 21.8 7.73 31.95c-3.52 19.62-23.39 33.9-43.13 33.9c-24.66 0-44.29-14.11-49.38-39.65c-2.05-10.31-1.01-30.71 14.89-45.11c1.18-1.08 3.11-.12 2.95 1.5"
                  />
                  <radialGradient
                    id="notoFire1"
                    cx="64.921"
                    cy="54.062"
                    r="73.86"
                    gradientTransform="matrix(-.0101 .9999 .7525 .0076 26.154 -11.267)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".214" stopColor="#fff176" />
                    <stop offset=".328" stopColor="#fff27d" />
                    <stop offset=".487" stopColor="#fff48f" />
                    <stop offset=".672" stopColor="#fff7ad" />
                    <stop offset=".793" stopColor="#fff9c4" />
                    <stop offset=".822" stopColor="#fff8bd" stopOpacity="0.804" />
                    <stop offset=".863" stopColor="#fff6ab" stopOpacity="0.529" />
                    <stop offset=".91" stopColor="#fff38d" stopOpacity="0.209" />
                    <stop offset=".941" stopColor="#fff176" stopOpacity="0" />
                  </radialGradient>
                  <path
                    fill="url(#notoFire1)"
                    d="M76.11 77.42c-9.09-11.7-5.02-25.05-2.79-30.37c.3-.7-.5-1.36-1.13-.93c-3.91 2.66-11.92 8.92-15.65 17.73c-5.05 11.91-4.69 17.74-1.7 24.86c1.8 4.29-.29 5.2-1.34 5.36c-1.02.16-1.96-.52-2.71-1.23a16.09 16.09 0 0 1-4.44-7.6c-.16-.62-.97-.79-1.34-.28c-2.8 3.87-4.25 10.08-4.32 14.47C40.47 113 51.68 124 65.24 124c17.09 0 29.54-18.9 19.72-34.7c-2.85-4.6-5.53-7.61-8.85-11.88"
                  />
                </svg>
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="text-2xl text-orange-500 font-medium mb-2">
              {data.title}
            </h3>
            <p className="text-black">
              By :{" "}
              <span className="text-gray-600 italic">
                {data.author || "Unknown"}
              </span>
            </p>
            <p className="text-black">
              Rs.{" "}
              <span className="text-red-600 font-bold tracking-wider text-xl">
                {data.price}
              </span>
            </p>
            <div className="flex items-center justify-between">
              <Rating readonly   />
              <Link
                to={`/blog/${data._id}`}
                className="relative bg-transparent flex items-center space-x-2 text-red-950 font-semibold py-2 px-4 border border-[#42ff1c] rounded overflow-hidden group"
              >
                <span className="group-hover:text-white z-50">Read More</span>
                <span className="absolute top-0 -left-2 w-0 h-full bg-[#42ff1c] rounded transition-all duration-300 origin-left group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
