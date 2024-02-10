import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  let currmode = "Light";
  return (
    <div className='navbar'>
    <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Know more</li>
        </ul>
        <button className="theme" onClick={() => {
          if(currmode==="Light"){
            currmode = "Dark";
            document.querySelector("body").style.backgroundColor = "rgb(136,153,166)"
          }else{
            currmode="Light";
            document.querySelector("body").style.backgroundColor = "antiquewhite"
          }
        }}>Change theme</button>
        <button className="login">Login/Register</button>
    </nav>
    </div>
  )
}

export default Navbar