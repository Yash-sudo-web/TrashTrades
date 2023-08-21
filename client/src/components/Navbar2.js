import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar2(props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <nav className='flex justify-between bg-red border-b-2 border-gray-300 items-center w-[100%]  mx-auto'>
          <div>
            <Link to='/'>
              <img class='w-28' src='jogo.png' alt='...' />
            </Link>
          </div>
          <ul
            class={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? 'top-20 ' : 'top-[-490px]'
            }`}
          >
            <li class='md:ml-8 text-xl md:my-0 my-7'>
              <Link class='hover:text-gray-500 duration-500' to='/guide'>
                Hello
              </Link>
            </li>
            <li class='md:ml-8 text-xl md:my-0 my-7'>
              <Link class='hover:text-gray-500 duration-500' to='/'>
                Hello
              </Link>
            </li>
            <li class='md:ml-8 text-xl md:my-0 my-7'>
              <Link class='hover:text-gray-500 duration-500' to='/'>
                Hello
              </Link>
            </li>
            <li class='md:ml-8 text-xl md:my-0 my-7'>
              <Link class='hover:text-gray-500 duration-500' to='/'>
                Hello
              </Link>
            </li>
          </ul>
          <div class='flex items-center gap-6'>
            {props.loggedIn ? (
              <>
                <Link to='/userProfile'>
                  <img class='w-10 cursor-pointer' src='./profile-user.png'></img>
                </Link>
              </>
            ) : (
              <Link to='/signup'>
                <button class='p-1 bg-green-500 text-white rounded-lg px-5 py-2 hover:bg-green-800'>
                  Sign Up
                </button>
              </Link>
            )}
            <div
              onClick={() => setOpen(!open)}
              className='text-3xl cursor-pointer md:hidden pr-4'
            >
              <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}





