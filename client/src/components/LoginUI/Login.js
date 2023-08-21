import React,{useState} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
export default function Login(props) {
    const [Data, setData] = useState({
        email:"",
        password:""
      })
      const [error, setError] = useState("")
        const handleChange=({currentTarget:input})=>{
          setData({...Data,[input.name]:input.value})
        }
        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            const url = "https://backend-hack-dtu.vercel.app/api/auth";
            const res = await axios.post(url, Data);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("username", res.data.username);
            window.location='/'
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
     <div className="absolute top-3 right-4 text-4xl cursor-pointer"><Link to={'/'}><ion-icon name='close'></ion-icon></Link></div>
      <div className="bg-green-700 rounded-md shadow-md p-10">
        <h2 className="text-3xl font-bold mb-4 text-white">Login</h2>
        <form onSubmit={handleSubmit}>
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
              className="bg-green-900 hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit" 
            >
              Login
            </button>
            <Link to={"/reset"}><p className='hover:text-black font-extrabold cursor-pointer mt-3 text-center'>
              <strong>Forgot Password?</strong>
            </p></Link>
        </form>
      </div>
    </div>
    </>
  )
}
