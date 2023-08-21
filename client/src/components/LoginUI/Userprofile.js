import React from 'react'
import { Link } from 'react-router-dom'
export default function Userprofile(props) {
  const username = localStorage.getItem("username");
  return (
    <>
        <div className="fixed bg-gray-800 bg-opacity-75 top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className="bg-white rounded-md shadow-lg w-3/4 md:w-1/2 lg:w-1/3">
        <div className="flex justify-end">
          <Link to="/"><button className="p-2 focus:outline-none">
            <svg className="h-6 w-6 fill-current text-gray-500 hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 8.586l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10 3.636 5.05l1.414-1.414L10 8.586z"/></svg>
          </button></Link>
        </div>
        <div className="px-6 pb-6">
          <div className='flex justify-center pb-6'>
          <img className = "w-32" src='./profile-user.png'></img>
          </div>
          <h1 className="text-black 2xl font-bold mb-4 text-center">Hey {username}! </h1>
           <p className="text-gray-900">
            Hi There! Welcome to our website 😍, At trash-trades we are always there to help you
            for any query contact us!
          </p>
          <br></br>
          <p className='text-gray-900'>
            Your Trash Credits are 300 😎
          </p>
          <br></br>
          <p className='text-gray-500'>
          1 Trash Coin Value in Trash Trades: One splendid coin cost in Trash Trades is likewise vital to realize for the buyers. Trash Trades 1 splendid coin cost in Rupees is 0.091994 Indian Rupee.
          </p>
          <br></br>
  <div className="flex flex-wrap justify-center">
  <div className="card w-40 h-50 rounded-lg p-3 bg-green-600 mr-8 hover:scale-105 transition duration-300;">
    <div className="">
      <div className="flex items-center">
        {/* <img src="https://i.imgur.com/skjYldo.png" width="50" alt="discount-icon" /> */}
        <div className="flex flex-col ml-1">
          <h1 className="mb-0 text-3xl text-white">Premium</h1>
          <span className="text-lg text-white">Subscription</span>
        </div>
      </div>
    </div>
    <hr className="my-2 border-white" />
    <span className="text-white text-sm">
      Redeem the Premium Subscription of TrashTrades for 6000 Trash credits.
    </span>
    <div className="flex justify-between items-center mt-3">
    </div>
  </div>
  <div className="card w-40 h-50 rounded-lg p-3 bg-green-600 ml-8 hover:scale-105 transition duration-300">
    <div className="">
      <div className="flex items-center">
        {/* <img src="https://i.imgur.com/skjYldo.png" width="50" alt="discount-icon" /> */}
        <div className="flex flex-col ml-1">
          <h1 className="mb-0 text-3xl text-white">Flipkart</h1>
          <span className="text-lg text-white">Products</span>
        </div>
      </div>
    </div>
    <hr className="my-2 border-white" />
    <span className="text-white text-sm">
      Get the same amount of value to buy from Flipkart as the current value of Trash credits.
    </span>
    <div className="flex justify-between items-center mt-3">
    </div>
  </div>
  </div>

<br/>
          <div class="text-center">
          <Link to="/">
          <button onClick={props.logout} class="p-1 bg-green-500 text-white rounded-lg px-5 py-2 hover:bg-green-800 border-10 border-black">
           Logout
          </button>
          </Link>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}
