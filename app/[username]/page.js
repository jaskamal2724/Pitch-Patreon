"use client"
import React, { useState } from 'react'

// import url('https://fonts.googleapis.com/css2?family=Playwrite+NZ:wght@300&display=swap')


const username = ({ params }) => {
  const [inputValue, setInputValue] = useState('')

  const handleclick = () => {
    setInputValue('10')
  }
  const handleclick1 = () => {
    setInputValue('20')
  }
  const handleclick2 = () => {
    setInputValue('50')
  }
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <>

      <div >
        <div>
          <img height={450} width={450} src="\file.png" alt="" className='mx-auto ' />
        </div>

        <div className='text-center text-5xl font-bold text-slate-600 gfont'>
          @{params.username}
        </div>

        <div className='text-center my-5 gfont'>
          Creating Animated art for VTT's
        </div>

        <div className='text-center my-5 gfont'>
          11,880 members • 85 posts • $16,240/release
        </div>

        <div className="payments">

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
              <div className="flex flex-wrap -m-4 mx-auto" >

                <div className="p-4 lg:w-1/2 md:w-full ">
                  <div className="flex border-2 rounded-lg border-blue-500 border-opacity-50 p-8 sm:flex-row flex-col border-2 border-blue-400">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0 border-2 border-blue-400">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <div className="flex-grow" >
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-3 gfont">Make Payment</h2>
                      <div className="flex w-full justify-center items-end">
                        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2  /4 md:w-full text-left">

                          <input onChange={handleInputChange} value={inputValue} id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-green-200 focus:bg-transparent border border-gray-300 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" style={{"marginLeft":"-83px","width":"282px"}} />
                        </div>
                        <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg gfont">Pay</button>

                      </div>
                      <div >
                        <button onClick={handleclick} className="mx-2 my-5 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg gfont">10</button>
                        <button onClick={handleclick1} className="mx-2 my-5 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg gfont">20</button>
                        <button onClick={handleclick2} className="mx-2 my-5 nline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg gfont">50</button>
                      </div>
                      <label htmlFor="email" className="leading-7 text-sm text-gray-600 gfont">Name</label>
                      <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

                      <label htmlFor="message" className="leading-7 text-sm text-gray-600 gfont">Message</label>
                      <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                  </div>

                </div>

              </div>

              <div className="p-4 lg:w-1/2 md:w-full">
                <div className="flex border-2 rounded-lg border-blue-500 border-opacity-50 p-8 sm:flex-row flex-col border-2 border-blue-400">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0 border-2 border-blue-400">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3 gfont">Followers </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui dolor aut, soluta vero facilis eum hic est optio ipsum quaerat, odio in culpa! Veritatis quae corrupti consequuntur vel odit.</p> 
                   <ul className='my-5'>
                    <li>jassi donated Rs.200</li>
                    <li>jassi donated Rs.200</li>
                    <li>jassi donated Rs.200</li>
                    <li>jassi donated Rs.200</li>
                    <li>jassi donated Rs.200</li>
                    <li>jassi donated Rs.200</li>
                   </ul>
                  </div>
                </div>
              </div>

            </div>
        </div>
      </section>
    </div >
      </div >
    </>
  )
}

export default username