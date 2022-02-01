import React from 'react';
import Header from '../components/Header';
import Image from 'next/image'
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../slices/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';
import { useSession } from 'next-auth/client';
import Currency from 'react-currency-formatter'

function Checkout() {
    const items=useSelector(selectItems);
    const total=useSelector(selectTotal);
    const [session]=useSession();
  return (
    <div className='bg-gray-100'>
        <Header />
    <main className='lg:flex max-w-screen-2xl'>
        {/* left side */}
        <div className='flex-grow m-5 shadow-sm'>
            <Image src='https://links.papareact.com/ikj'
            width={1020}
            height={250}
            objectFit='contain'
            />
            <div className='flex p-5 bg-white space-y-10 flex-col'>
                <h1 className='text-3xl border-b pb-4'>
                    {items.length ===0 ? 'Your Basket is empty' : 'Shopping Basket'}
                </h1>
                {items.map((item,index)=>
                <CheckoutProduct 
                key={index}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                rating={item.rating}
                hasPrime={item.hasPrime}
                />
                )}
            </div>
        </div>
        {/* right side */}
        <div className='flex flex-col bg-white p-10 shadow-md'>
            {items.length >0 &&(
                <>
                <h2 className='white-space-nowrap'>Subtotal
                    ({items.length} items)
                    <span className='font-bold'>
                        <Currency quantity={total} currency='USD' className="pl-2"  />
                    </span>
                </h2>
                <button disabled={!session} className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-300 cursor-not-allowed text-gray-300'}`}>
                    {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
                </button>
                </>
            )}
        </div>
    </main>
</div>
  )
  
}

export default Checkout;