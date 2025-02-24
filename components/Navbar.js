import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='h-14 bg-purple-700 flex justify-between px-3 items-center text-white'>
            <div className="logo font-bold text-2xl">
                <Link href="/"><h1>BitLinks</h1></Link>
            </div>
            <ul className='flex justify-center gap-4 items-center'>
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/shorten"><li>Shorten</li></Link>
                <Link href="/contact"><li>Contact Us</li></Link>
                <li className='flex gap-4'>
                    <Link href="/shorten"><button className='bg-purple-500 shadow-lg font-bold rounded-lg p-3 py-1'>Try Now</button></Link>
                    <Link href="/github"><button className='bg-purple-500 shadow-lg font-bold rounded-lg p-3 py-1'>GitHub</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
