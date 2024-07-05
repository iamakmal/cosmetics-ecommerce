import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Products() {
  const[products, setProducts] = useState([])
  const[currentPage, setCurrentPage] = useState(73);
  const[productsPerPage,setProductsPerPage] = useState(3);
  const [loading,setLoading] = useState(true)

  const retrieveProducts = () => {
    axios.get("https://makeup-api.herokuapp.com/api/v1/products.json").then((res) =>{
        setProducts(res.data)
        setLoading(false)
    })
    .catch((error) => {
        console.log(error.response.data)
    })
}

useEffect(() => {
  retrieveProducts()
},[])


const indexOfLastProduct = currentPage * productsPerPage
const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct)

const totalPages = Math.ceil(products.length/productsPerPage)

const paginate = (pageNumber) => setCurrentPage(pageNumber);

if(loading){
    return(
        <div className="flex justify-center items-center">
        <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        </div>
        </div>
    ) 
}

  return (
    <>
    <h1 className="text-4xl mt-10 text-center">Featured Products</h1>
    <h1 className="text-lg text-center text-gray-500 mb-10">Discover our weekly collection</h1>
    <div className="flex justify-center flex-wrap m-10 gap-5">
    {
        currentProducts.map((product,index)=>(
            <div key={index} className="card bg-base-100 w-96 h-96 shadow-xl">
            <figure>
              <img
                src={product.image_link}
                className="h-56"
                alt="products" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <div className="card-actions justify-between items-center">
                <h1 className="text-3xl text-gray-500">${product.price}</h1>
                <button className="btn btn-outline hover:bg-sub">
                Add To Cart
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                </button>
              </div>
            </div>
          </div>
        ))
    }
    </div>
    <div className="flex justify-center mb-10">
    <nav>
        <ul className="flex list-none gap-2 join">
        <li>
            <button onClick={() => paginate(73)} className="join-item btn btn-outline disabled:opacity-100 disabled:bg-transparent disabled:text-current disabled:border-current hover:bg-sub">
            First
            </button>
            <button onClick={() => paginate(currentPage-1)} disabled={currentPage === 73} className="join-item btn btn-outline disabled:opacity-100 disabled:bg-transparent disabled:text-current disabled:border-current hover:bg-sub">
            «
            </button>
            <button disabled className="join-item btn btn-outline disabled:opacity-100 disabled:bg-transparent disabled:text-current disabled:border-current">
            {currentPage-72}
            </button>
            <button onClick={() => paginate(currentPage+1)} disabled={currentPage === totalPages} className="join-item btn btn-outline disabled:opacity-100 disabled:bg-transparent disabled:text-current disabled:border-current hover:bg-sub">
            »
            </button>
            <button onClick={() => paginate(totalPages)} className="join-item btn btn-outline disabled:opacity-100 disabled:bg-transparent disabled:text-current disabled:border-current hover:bg-sub">
            Last
            </button>
        </li>
        </ul>
    </nav>
    </div>
    </>
  )
}
