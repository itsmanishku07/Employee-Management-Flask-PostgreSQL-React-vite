import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Header = () => {
  const islogin = localStorage.getItem("isLogin") == "true"
  console.log(islogin);



  return (
    <div className='p-6 bg-blue-300 flex justify-between'>
      <div className='text-black flex gap-12 list-none font-bold'>
        <li><a href="/index">Home</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contect">Contect</a></li>
        <li><a href="/about">About</a></li>
      </div>
      <ul className="text-black flex gap-12 list-none font-bold">
        {islogin ? (
          <li><button onClick={() => {
            localStorage.setItem("isLogin", false)
            localStorage.removeItem("username")
            localStorage.removeItem("password")
          }}>Logout</button></li>
        ) : (
          <li><a href="/">Employee Login</a></li>
        )}
      </ul>
    </div>
  )
}

export default Header
