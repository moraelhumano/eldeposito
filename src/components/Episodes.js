import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';


class Episodes extends Component{
    render() {
        return (
        <>
        <section className="hero-home">
        <Bounce top>
            <div className="title-section">
                <h3 className="text-3xl text-center text-white text-shadow-title font-bold leading-none">
                    Últimos cápitulos
                </h3>
            </div>
        </Bounce>
        <section className="container max-w-7xl mx-auto pt-8 pb-12 ">
            <div className="flex flex-wrap">
                <Zoom >
                <div className=" md:w-1/2 p-4 flex flex-col flex-grow flex-shrink shadow bg-card-episode items-center md:mr-4">
                    <div className="flex-none bg-transparent rounded-b rounded-t-none overflow-hidden w-10/12 text-center md:text-left">
                        <div className="flex flex-col ">
                            <p className="text-white text-shadow-title font-bold text-xs md:text-sm">
                             Episodio 49 
                            </p>
                            <p className="text-white text-shadow-title font-bold font-bold text-xl">
                                Cocinero
                            </p>
                        </div>
                        <iframe className="inline-block pt-2 iframe-width"  height="315" src="https://www.youtube.com/embed/J8mHVnMVves" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className=" md:w-1/2 p-4 flex flex-col flex-grow flex-shrink shadow bg-card-episode items-center md:mr-4 mt-8 md:mt-0">
                    <div className="flex-none bg-transparent rounded-b rounded-t-none overflow-hidden w-10/12 text-center md:text-left">
                        <div className="flex flex-col ">
                            <p className="text-white text-shadow-title font-bold text-xs md:text-sm">
                             Episodio 48
                            </p>
                            <p className="text-white text-shadow-title font-bold font-bold text-xl">
                                Ex Policía
                            </p>
                        </div>
                        <iframe className="inline-block pt-2 iframe-width"  height="315" src="https://www.youtube.com/embed/htugWtyc1qE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                </Zoom>
            </div>
        </section>
        </section>
        </>

        )
    }
}
export default Episodes;

