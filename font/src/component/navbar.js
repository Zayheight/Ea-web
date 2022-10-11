import React, { Component } from 'react';
import '../css/navbar.css';
import { Link,useMatch, useResolvedPath } from "react-router-dom"

function Navbar(){

       
return(

    <header id="header" >
    <a class="navlogo"> Logo </a>

    <nav class="navbar" >
            <ul>
                <li>
                    <Link to="/" class="">Home</Link>
                </li>
                <li >
                    <Link to="/About" class="">About</Link>
                </li>
                <li >
                    <Link  class="createbtn " to="/EaProduct" >EA PRODUCT</Link>
                </li>
                <li>
                    <Link to="/Signin" class="">SIGN IN </Link> 
                </li>
            </ul>
        </nav>
    </header>
    
);
    
}
export default Navbar;
