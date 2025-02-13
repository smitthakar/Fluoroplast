// import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar w-full bg-gray-800 text-white py-4">
        <div className ="flex justify-between items-center "> 
      <ul className=" flex justify-between  display-inline gap-4 mb- -50rem">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Navbar