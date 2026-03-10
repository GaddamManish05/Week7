import React from 'react'
import {useLocation} from 'react-router'

function Product() {
    const {state} = useLocation();
    console.log(state?.product);
  return (
    <div className='flex flex-col sm:flex-row justify-between mt-14'>
        <div className='w-2/5 mt-14' >
            <img src={state?.product?.image} alt="" className='w-100 '/>
        </div>
        <div className='w-1/3 sm:p-10'>
            <h1 className='text-2xl'>{state?.product?.title}</h1>
            <p className='mb-10'>{state?.product?.description}</p>
            <p className='text-3xl mb-10'>{state?.product?.category}</p>
            <p className='text-2xl mb-10'>{state?.product?.price}</p>
        </div>
    </div>
  )
}

export default Product