import React from 'react'

export default function Hero() {
  return (
    <>
    <div className="flex justify-center mx-5 gap-5 flex-row-reverse flex-wrap items-center my-10 lg:my-24">
        <div className="lg:w-1/2">
        <h1 className="text-3xl md:text-5xl mb-5 font-prata  text-center">The self care brand that's setting a new <span className="text-sub">standard</span> <br/> in the beauty care industry</h1>
        </div>
        <img src="about.png" className="w-[400px] rounded-2xl"/>
    </div>
    </>
  )
}
