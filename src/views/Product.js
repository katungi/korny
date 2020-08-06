import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader';
import { useAxiosGet } from '../Hooks/HttpRequests'

function Product(){
    // const { id } = useParams()
    // Create your own Mock API: https://mockapi.io/
    const url = `https://5f2b896fffc88500167b7fe6.mockapi.io/api/products/`
    
    let product = useAxiosGet(url)

    let content = null

    
    if(product.error){
        content = <div>
            {/* <div className="bg-blue-300 mb-2 p-3">
                If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
            </div> */}
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    }

    if(product.loading){
        content = <Loader></Loader>
    }

    
    if(product.data){
        console.log(product.data.image)
        content = 
        <div className="flex justify-center">
            <h1 className="text-2xl font-bold mb-3">
                {product.data.name}
            </h1>
            <div>
                <img
                    src={product.data.image}
                    alt={product.data.name}
                />
            </div>
            <div className="font-bold text-xl mb-3">
                $ {product.data.price}
            </div>
            <div>
                {product.data.description}
                
            </div>
        </div>
    }

    return (
        <div className="container flex mx-auto justify-center">
            {content}
        </div>
    )
}

export default Product