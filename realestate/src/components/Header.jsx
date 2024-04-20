import React from 'react'
import { Link } from 'react-router-dom';
import {FaSearch} from 'react-icons/fa'

export default function Header() {
  return (
    <header className='bg-slate-200  shadow-md'>
      <div className='flex justify-between max-w-6xl mx-auto p-3 items-center'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <Link to="/">
                <span className='text-slate-500'>Alok</span>
                <span className='text-slate-700'>EState</span>
            </Link>
        </h1>

        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type='text' placeholder='Search....' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <FaSearch className='text-slate-600'/>
        </form>

        <ul className='flex gap-4'>
            <li className='hidden sm:inline '>    
                <Link to='/' className='text-sm sm:text-xl text-slate-700 hover:underline'>Home</Link>
            </li>
            <li className='hidden sm:inline '>    
                <Link to='/about' className='text-sm sm:text-xl text-slate-700 hover:underline'>About</Link>
            </li>
            <li>    
                <Link to='/sign-in' className='text-sm sm:text-xl text-slate-700 hover:underline'>  SignIn</Link>
            </li>
        </ul>
      </div>
    </header>
  )
}
