import React from 'react'
import HeroPng from '../assets/shoes.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { FaPlay } from 'react-icons/fa'

function Hero() {
  return (
    <section className="bg-primary text-white relative">
        <div className='container grid grid-cols-1 md:grid-cols-3 min-h-[700px] md:py-20'>
        {/* Brand Info */}
        <div className='flex flex-col justify-end py-14 md:py-20'>
            <div 
            className=" text-center md:text-left space-y-4 lg:max-w-[400px]">
                <h1 className='text-3xl uppercase font-semibold'>Jordan 1 red</h1>
                <p>
                    release date
                    <br />
                    10/08/2024 <br />
                    color way
                    <br />
                    red
                </p>
                {/* select size section */}
                <div className="max-m-[250px] space-y-3 mx-auto md:mx-0">
                    <p>select size (IN)</p>
                    <div className='flex gap-3 flex-wrap justify-center
                    md:justify-start relative z-10'>
                        <p className='size-box'>sm</p>
                        <p className='size-box'>md</p>
                        <p className='size-box'>lg</p>
                        <p className='size-box'>xl</p>
                        <p className='size-box'>8</p>
                        <p className='size-box'>9</p>
                        <p className='size-box'>10</p>
                        <p className='size-box'>11</p>
                        <p className='size-box'>12</p>
                        <p className='size-box'>13</p>
                    </div>
                </div>
            </div>
        </div>
        {/* hero image */}
        <div className="flex flex-col justify-center items-center
        relative gap-16">
            <img 
            src={HeroPng} 
            alt="" 
            className='max-w[600px]
            md:max-w[700px] relative z-10 brightness-110' 
            />

            {/* play icon */}
            <div className="flex gap-4 items-center">
               <button className='flex justify-center items-center
                h-8 w-8 p-3 rounded-full hover:scale-105 duration-200  bg-red-500 '>
               <FaPlay/>
               </button>
                <p>PLAY VIDEO</p>
            </div>

        </div>

        {/* right side section */}
        <div className='flex flex-col justify-end
         items-center lg:px-8 py-10 mb-10'>
            <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Pariatur facere consequatur
                 unde atque soluta alias repellendus nulla 
                 repudiandae ratione. Quisquam omnis porro
                  necessitatibus 
                eos est asperiores labore quia ratione adipisci.
            </p>
            {/* left right icons */}
            <div className="flex gap-8 pt-6 relative z-20  ">
            <div className="text-2xl rounded-full border border-white
            p-2 hover:bg-white hover:text-primary duration-300">
                <FaArrowLeft/>
            </div>
            <div className="text-2xl rounded-full border border-white
            p-2 hover:bg-white hover:text-primary duration-300">
                <FaArrowRight/>
            </div>
            </div>
            
        </div>
    </div>

    {/* bg text amd white light section */}
    <p className='text-center text-[240px] md:text-[220px]
    lg:text-[250px] xl:text-[350px] font-bold font-anton
     top-0 md:left-[20%] lg:left-[-5%] xl:left-[20%] left-[-90%] 
    absolute z-[2] text-white flex md:justify-end  '>NIKE</p>
    
    </section>
  )
}

export default Hero
