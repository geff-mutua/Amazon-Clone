import React from 'react'
import Image from 'next/image'
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { useSession, signIn, signOut,Provider } from "next-auth/client"
import {useRouter} from 'next/router'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'


function Header() {
    const [session]=useSession();
    const router=useRouter();
    const items=useSelector(selectItems);
    
    return (
        <header>
            <div className='flex item-center bg-amazon_blue p-1 flex-grow py-2'>
                {/* Logo Section */}
                <div className='mt-2 flex item-center flex-grow sm:flex-grow-0'>
                    <Image src='https://links.papareact.com/f90'
                        width={150}
                        height={40}
                        objectFit='contain'
                        className='cursor-pointer'
                        onClick={()=>router.push('/')}
                    />
                </div>
                {/* Search Section */}
                <div className='cursor-pointer bg-yellow-400 sm:flex items-center h-10 rounded-md flex-grow hover:bg-yellow-500 hidden'>
                    <input className='px-4 focus:outline-none p-2 h-full w-6 flex-grow rounded-l-md flex-shrink' type="text" />
                    <SearchIcon className='h-12 p-4 text-white' />
                </div>
                {/* Right Section */}
                <div className='text-white flex item-center text-xs space-x-6 mx-6'>
                    <div className='link' onClick={!session ? signIn :signOut}>
                        <p>
                            {session ? `Hello, ${session.user.name}` : 'Sign In'}
                        </p>
                        <p className='font-extrabold md:text-sm'>Account & Lists</p>
                    </div>
                    <div className=' link'>
                        <p>Returns</p>
                        <p className='font-extrabold md:text-sm'>& Orders</p>
                    </div>
                    <div className=' link relative flex items-center' onClick={()=>router.push('/checkout')}>
                        <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
                            {items.length}
                        </span>
                        <ShoppingCartIcon className='h-10' />
                        <p className='hidden md:inline font-extrabold md:text-sm mt-2 '>Busket</p>
                    </div>
                </div>
            </div>
            {/* Bottom Header */}
            <div className='space-x-3 p-2 pl-6 flex items-center text-white text-sm bg-amazon_blue-light'>
                <p className='link flex items-center'>
                    <MenuIcon className='h-6 mr-1' />
                    All</p>
                    <p className='link'>Prime Video</p>
                    <p className='link'>Amazon Business</p>
                    <p className='link'>Todays Deal</p>
                    <p className='link'>Prime Video</p>
                    <p className='link hidden lg:inline-flex'>Electronics</p>
                    <p className='link hidden lg:inline-flex'>Food & Grocery</p>
                    <p className='link hidden lg:inline-flex'>Prime</p>
                    <p className='link hidden lg:inline-flex'>Buy Again</p>
                    <p className='link hidden lg:inline-flex'>Shopper Tollkit</p>
                    <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header
