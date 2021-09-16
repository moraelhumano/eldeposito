import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import LogoElDeposito from '../../src/eldepositologo.png'


import DepositoDudes from '../../src/creweldeposito.png';


class Description extends Component{
    render() {
        return (
        <>
        <section className="hero-home pt-12 pb-12">
                <section className="max-w-5xl mx-auto mx-8 container-services">
                    <section className="flex justify-center md:justify-between flex-wrap">
                    <Fade left>
                        <div className="sm:w-1/2 sm-text-center flex flex-col align-center justify-center">
                            <h3 className="text-4xl text-white font-bold leading-none text-shadow-title">
                                ¡Qué tranza banda color caguama!
                            </h3>
                            <p className="text-2xl text-white text-shadow-title mt-4">
                                De la botella de <b>Lalo Elizarras</b> e <b>Iván Mendoza</b> aprenderás sobre el día a día de los mexicanos
                                que hacen llegar el pan, la tortilla y a cervezas a nuestras casas.
                            </p>
                        </div>
                        </ Fade>
                        <Fade right>
                            <img className="w-9/12 md:h-1/2 md:w-1/2" src={DepositoDudes} />
                        </Fade>
                    </section>
                </section>
            
        </section>
        </>

        )
    }
}
export default Description;

