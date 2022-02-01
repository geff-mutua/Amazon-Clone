import React from 'react';
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import {addToBasket,removeFromBasket} from '../slices/basketSlice'

function CheckoutProduct({
   id,title, price, description, category, image,rating,hasPrime
}) {

    const dispatch=useDispatch();

    const addItemToBasket=()=>{
        const product={
            id,title, price, description, category, image,rating,hasPrime
        };
     dispatch(addToBasket(product));
    }

    const removeFromBusket=()=>{
     dispatch(addToBasket({id}));
    }



  return (
      <div className='grid grid-cols-5'>
          <Image src={image} height={200} width={200} alt='Image' objectFit='contain' />
          <div className='col-span-3 mx-5'>
              <p>{title}</p>
              <div className='flex'>
                  {Array(rating).fill().map((_,i)=>(
                       <StarIcon className='h-5 text-yellow-500'/> 
                  ))}
              </div>
              <p className='text-xs mt-2 my-2 line-clamp-3'>{description}</p>
              <p>$ {price}</p>
              {hasPrime && (
                  <div className='flex items-center space-x-2'>
                      <img
                      loading='lazy'
                      className='w-12'
                      src='https://links.papareact.com/fdw'
                      alt='Image Prime'
                       />
                        <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                  </div>
              )}
          </div>
          <div className='flex  flex-col space-y-2 justify-self-end'>
          <button onClick={addItemToBasket} className='mt-auto button'>Add to Basket</button>
          <button onClick={removeFromBusket}  className='mt-auto button'>Remove from Basket</button>
          </div>
      </div>
  )
}

export default CheckoutProduct;
