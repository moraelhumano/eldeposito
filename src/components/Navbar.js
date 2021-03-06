import React, { Component } from 'react';
import LogoElDeposito from '../../src/eldepositologo.png'

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";




class NavBar extends Component{
    render() {
        return (
        <>
        <nav className="md:fixed w-full z-30 top-0 shadow-navbar md:pl-20 mx-auto flex py-2 justify-center md:justify-between">
            <div className="flex items-center  ">
                <Link to="/" className="toggleColour flex text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                    <img className="h-12 items-center" src={LogoElDeposito} alt="" />
                </Link>
            </div>
        </nav>
        </>

        )
    }
}
export default NavBar;

