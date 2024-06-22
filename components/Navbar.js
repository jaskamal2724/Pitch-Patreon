"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const [showdropdown, setShowdropdown] = useState(false)
    const { data: session } = useSession()
    const [btnclick, setbtnclick] = useState(false)
   

    const toggleDropdown = () => {
        setShowdropdown(prev => !prev)
        setbtnclick(prev => !prev)
    }
    if (session) {
        const router = useRouter()
        router.push('/dashboard')
      }
    
   

    return (
        <>
            <header className="text-gray-600 body-font bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">PitchPatron</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/about" className="mr-5 hover:underline" style={{ color: "#FF007F", cursor: "pointer" }}>About</Link>
                        <Link href="/projects" className="mr-5 hover:underline" style={{ color: "#FF007F", cursor: "pointer" }}>Projects</Link>
                    </nav>
                    {!session && 
                        <Link href="/login">
                            <button className="inline-flex items-center bg-gray-100 border-2 border-pink-400 py-1 px-3 focus:outline-none hover:bg-blue-200 rounded text-base mt-4 md:mt-0">Log IN
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </Link>
                    }

                    {session && 
                        <>
                            <button onClick={() => signOut()} className="inline-flex items-center bg-gray-100 border-2 border-pink-400 py-1 px-3 focus:outline-none hover:bg-blue-200 rounded text-base mt-4 md:mt-0">Log OUT
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            <div className='relative'>
                                <button
                                    onClick={toggleDropdown}
                                    onBlur={()=>setShowdropdown(false)}
                                    className={`mt-4 md:mt-0 mx-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                                >
                                    Welcome : {session.user.name} 😊 {btnclick ? "▲" : "▼"}
                                </button>
                                <div
                                    id="dropdown"
                                    className={`mt-2 z-10 ${showdropdown ? "" : "hidden"} dropdown-custom bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute left-[100px]`}
                                >
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                        </li>
                                        <li>
                                            <Link href="/settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </header>
        </>
    )
}

export default Navbar
