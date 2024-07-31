// import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {

  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: ""
  });

  const handleLogin=(e)=>{
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if(input.email === loggedUser.email && input.password === loggedUser.password){
      navigate("/")
      localStorage.setItem("loggedin",true)
    }
    else{
      alert("WRONG ! Email or Password")
    }
  }

  return (
    <div className="h-screen flex justify-center items-center " >
      <form onSubmit={handleLogin} className="flex flex-col bg-gray-300 h-auto md:w-1/3 w-4/5 rounded-md border-4 border-green-500">
        <h1 className="flex justify-center mt-5 font-bold text-2xl">Login To Portfolio</h1>
        <div className="flex flex-col md:w-2/4 w-2/3 mx-auto mt-10">
          <input type="text"
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

          <button className="bg-green-500 mt-3 w-24 h-8 rounded-lg mx-auto">Login</button>
          <p className="mt-2 mb-2 flex">Not Have an account? 
          <Link to={"/register"}><span className="text-blue-900 font-medium"> Register Here</span></Link>
          </p>
        </div>

      </form>
    </div>
  )
}

export default Login