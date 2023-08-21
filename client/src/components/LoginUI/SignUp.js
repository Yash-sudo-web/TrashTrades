import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';
export default function Signup(props) {
  const [Data, setData] = useState({
    userName:"",
    email:"",
    password:""
  })
    const [error, setError] = useState("")
    const navigate = useNavigate();  
    const handleChange=({currentTarget:input})=>{
      setData({...Data,[input.name]:input.value})
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const url = "https://backend-hack-dtu.vercel.app/api/user";
        const { Data: res } = await axios.post(url, Data);
        navigate("/login");
        console.log(res.message);
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      }
    };
  return (
    <>
     <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
     <Link to="/"><div className="absolute top-3 right-4 text-4xl cursor-pointer"><ion-icon onClick={props.toggle} name='close'></ion-icon></div></Link>
      <div className=" bg-green-700 rounded-md shadow-md p-10 border:2px border-green-950">
        <h2 className="text-3xl font-bold mb-4 text-white ">Sign Up</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label className="block text-white font-bold mb-2">
            Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="userName"
              type="text"
              value={Data.userName}
              required
              onChange={handleChange}
              placeholder="Enter your Username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-bold mb-2">
            Email ID
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              value={Data.email}
              required
              onChange={handleChange}
              type="email"
              placeholder="Enter your Email ID"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-bold mb-2">
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              value={Data.password}
              required
              onChange={handleChange}
              type="password"
              placeholder="Enter your Password"
            />
          </div>
            {error && <div>{error}</div>}
            <button
              className="bg-green-950 hover:bg-green-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit" 
            >
              Sign Up
            </button>
            <Link to={"/login"}><p className='hover: font-extrabold cursor-pointer mt-3'>
              <strong>Already have an account? Login</strong> 
              </p></Link>
        </form>
      </div>
    </div>
    </>
  )
}
