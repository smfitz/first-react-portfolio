import React, { useState } from 'react'
import '../styles/globals.css'

function Contact() {
    return (
            <div className={darkMode ? 'dark' : ''}>
              <main className='bg-zinc-300 dark:bg-zinc-900 px-8'>
                <section className='min-h-screen'>
                  <nav className='py-10 mb-10 flex justify-between'>
                    <h1 className='text-xl font-spacemono text-zinc-900 dark:text-zinc-300'>Sean Fitzpatrick</h1>
                    <ul className='flex items-center'>
                      <li>
                        <MdDarkMode 
                        onClick={() => setDarkMode(!darkMode)}
                        className='cursor-pointer text-3xl text-zinc-800 dark:text-zinc-300'/>
                      </li>
                      <li>
                        <a className="font-spacemono text-zinc-300 bg-zinc-800 dark:text-zinc-900 dark:bg-zinc-300 px-4 py-2 rounded-lg ml-6" href="">My Work</a>
                      </li>
                      <li>
                        <a className="font-spacemono text-zinc-300 bg-zinc-800 dark:text-zinc-900 dark:bg-zinc-300 px-4 py-2 rounded-lg ml-6" href="https://www.linkedin.com/in/s3an-f1tzpatrick/">Resume</a>
                      </li>
                      <li>
                        <a className="font-spacemono text-zinc-300 bg-zinc-800 dark:text-zinc-900 dark:bg-zinc-300 px-4 py-2 rounded-lg ml-6" href="">Contact Me</a>
                      </li>
                    </ul>
                  </nav>
                </section>
              </main>
            </div>
           
    )
}

export default Contact