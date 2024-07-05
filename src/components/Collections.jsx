import React from 'react'

export default function Collections() {
    const collections = [
        {
            name:"Lipsticks",
            image:"lipstick.png"
        },
        {
            name:"Nail Polish",
            image:"nailpolish.png"
        },
        {
            name:"Hair Care",
            image:"haircare.png"
        },
        {
            name:"Skin Care",
            image:"skincare.png"
        },
    ]

  return (
    <>
    <h1 className="text-4xl text-center mt-10">Our Collection</h1>
    <h1 className="text-lg text-center text-gray-500 mb-10">Checkout our wide collection</h1> 
    <div className="flex justify-center items-center flex-wrap p-5 gap-5">
        {
            collections.map((collection)=>(
                <div className="flex flex-col items-center gap-5 w-fit p-5 bg-[#FFEDE1] hover:bg-sub hover:text-white">
                <img src={collection.image} className='h-56 w-56 object-cover rounded-lg'/>
                <h1 className="text-xl font-semibold">{collection.name}</h1>
                </div>
            ))
        }
        </div>
    </>
  )
}
