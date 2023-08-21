import React from 'react'

export default function ResetPassword() {
  return (
    <>
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
     <div className="absolute top-3 right-4 text-4xl cursor-pointer"><ion-icon onClick={props.toggle} name='close'></ion-icon></div>
      <div className="bg-white rounded-md shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4">{Regis==="1"?"Sign up":Regis==="2"?"Login":"Reset Password"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
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
            <label className="block text-gray-700 font-bold mb-2">
              Enter OTP
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter OTP"
            />
          </div>
            {error && <div>{error}</div>}
            <button
              className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit" 
              onClick={Regis==="1"?null:Regis==="2"?null:Button===true?toggleButton:null}
            >
              {Regis==="1"?"Sign up":Regis==="2"?"Login":Button===true?"Send OTP":"Reset Password"}
            </button>
            <p onClick={toggleSignup} className='hover:text-gray-600 cursor-pointer mt-3'>
              <strong>{Regis==="1"?"Already have an account? Login":Regis==="2"?"Forgot Password? Reset your credentials":null}</strong>
            </p>
            {Regis==="3"&&Button===false?<p className="" id="aut">
                OTP has been sent to the registered Email Address
                {setTimeout}
            </p>:null}
        </form>
      </div>
    </div>
    </>
  )
}
