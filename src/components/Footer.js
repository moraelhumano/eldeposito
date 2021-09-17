import React, { Component } from 'react';




class Footer extends Component{
    render() {
        return (
        <>
        <section style={{backgroundColor:'#46bfd7'}}>
            <div className="max-w-screen-xl  md:py-12 px-4 py-4 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <div className="flex justify-center space-x-6">
                    <a href="https://www.facebook.com/eldepositopodcast" target="_blank" className="text-white">
                        <svg className="w-8 " aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/watch?v=3UDztbGojBo&list=PLwDblRDOhIGGIcTOg1Wi9QMYxezVRrAKn" target="_blank" className="text-white">
                        <svg  className="w-14 h-14" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                        </svg>
                    </a>
                </div>
                <p className=" text-base  text-center text-white">
                    © 2021 La Corporrisa producciones, Inc. All rights reserved.<br/>
                    <a className="underline" target="_blank" href="https://www.instagram.com/ladelaintuicion">Created By Mora Hubert</a>
                </p>
            </div>
        </section>
        <div className="h-10 w-full bg-black flex justify-center items-center py-6">
            <p className="text-3xl text-white text-shadow-title">
            Este NO es un sitio web oficial, es un fanart.
            </p>
        </div>
        </>

        )
    }
}
export default Footer;


