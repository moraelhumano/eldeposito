import React, { Component } from 'react';
import RubberBand from 'react-reveal/RubberBand';

import LogoElDeposito from '../../src/eldepositologo.png'

class HeroHome extends Component{
    render() {
        return (
        <>
        <div className="md:pt-24 hero-home-home h-screen flex-col flex jusify-center">
            <div className="container h-full mx-auto flex justify-center">
                <div className="flex justify-center items-end">
                    <RubberBand>
                    <div className="w-full flex pb-12 md:pb-0">
                        <img className="mt-4 md:mt-0 w-11/12 md:max-w-full" src={LogoElDeposito} />  
                    </div>
                    </RubberBand>
                </div>
            </div>
        </div>
        </>

        )
    }
}
export default HeroHome;

