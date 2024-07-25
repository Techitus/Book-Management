/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Form.css";
import { useState } from "react";
const Form = ({ type, onSubmit, user, emailError, passwordError }) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <div className="flex justify-center items-center mt-32">
      <form
        onSubmit={handleSubmit}
        className="form mt-10 w-[40%] items-center justify-center "
      >
        <h1 className="header-text flex gap-5">
          Book{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1.2em"
            viewBox="0 0 512 512"
          >
            <path
              fill="white"
              d="M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 0 0-17.92 5.33A32 32 0 0 0 16 79.9V366c0 19.34 13.76 33.93 32 33.93c71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 0 0 6.94-3V106.82a15.9 15.9 0 0 0-5.46-12A143 143 0 0 0 202.24 74m279.68-20.7A31.33 31.33 0 0 0 464 48c-67.61.3-118.11 8.71-154.24 26a143.3 143.3 0 0 0-32.31 20.78a15.93 15.93 0 0 0-5.45 12v337.13a3.93 3.93 0 0 0 6.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0 0 32-32v-288a32 32 0 0 0-14.12-26.61"
            />
          </svg>
          Mania
        </h1>
        <span className="text-lg font-poppins text-[#f2f2f2]">
  {type === 'Login' ? (
    <>
      Hello,
      <span className="text-[#42ff1c] text-xl italic">
        {` ${user?.username}`}
      </span>
    </>
  ) : (
    "Dive into a World of Words"
  )}
</span>
        {type === "Register" && (
          <div className="container-1">
            <div className="group">
              <input
                type="text"
                required
                name="username"
                className="main-input"
                onChange={handleChange}
              />
              <span className="highlight-span"></span>
              <label className="label-input">Name</label>
            </div>
          </div>
        )}

        <div className="container-1">
          <div className="group">
            <input
              type="email"
              required
              name="email"
              className={`main-input ${emailError ? 'error' : ''}`}
                            onChange={handleChange}
            />
            <span className="highlight-span"></span>
            <label className="label-input error">{emailError ? 'Invalid Email' : 'Email'}</label>
          </div>
        </div>

        <div className="container-1">
          <div className="group">
            <input
              type="password"
              required
              name="password"
              className={`main-input ${passwordError ? 'error' : ''}`}            
                onChange={handleChange}
            />
            <span className="highlight-span"></span>
            <label className="label-input error">{passwordError ? 'Invalid Password' : 'Password'}</label>
          </div>
        </div>

        {type === "Register" ? (
          <span className="text-gray-400  font-normal mt-8 text-[14px]">
            Already have an account?{" "}
            <Link className="text-[#42ff1c] font-bold" to="/login">
              Login Here
            </Link>
          </span>
        ) : (
          <span className="text-gray-400  font-normal mt-8 text-[14px]">
            Do not have an account?{" "}
            <Link className="text-[#42ff1c] font-bold" to="/register">
              Register Here
            </Link>
          </span>
        )}

        {type === "Register" ? (
          <button className="button-48 " role="button">
            <span className="text">Register</span>
          </button>
        ) : (
          <button className="button-48" role="button">
            <span className="text">Login</span>
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
