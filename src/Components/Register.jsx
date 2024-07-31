// import React from 'react'
import { useState } from "react"
import "./Register.css"
import { useNavigate, Link } from "react-router-dom";


const Register = () => {

  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  });

  // To store value in local storage

  const handleSubmit=(e)=>{
    e.preventDefault() ;
    localStorage.setItem("user",JSON.stringify(input));
    navigate("/login");

  }

  return (
    <div className="h-screen flex justify-center items-center " >
      <form onSubmit={handleSubmit} 
      className="flex flex-col bg-gray-300 h-auto rounded-md border-4 border-green-500 md:w-1/3 w-4/5">
        <h1 className="flex justify-center mt-5 font-bold text-2xl">CREATE AN ACCOUNT</h1>
        <div className="flex flex-col mx-auto mt-10 md:w-2/4 w-2/3">
          <input type="text"
            className="h-8 rounded-md focus:outline-green-600 px-2"
            name="name"
            value={input.name}
            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
          />
          <label className="" >Your Name</label>
          <input type="email"
            className="mt-2 h-8 rounded-md focus:outline-green-600 px-2"
            name="email"
            value={input.email}
            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
          />
          <label className="" >Your Email</label>
          <input type="password"
            className="mt-2 h-8 rounded-md focus:outline-green-600 px-2"
            name="password"
            value={input.password}
            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
          />
          <label className="" >Password</label>

          <button className="bg-green-500 mt-3 w-24 h-8 rounded-lg mx-auto">Register</button>
          <p className="mt-2 mb-2 flex">Have Aready an account?
          <Link to={"/login"}><span className="text-blue-900 font-medium"> Login Here</span></Link>
          </p>
        </div>

      </form>
    </div>
  )
}

export default Register