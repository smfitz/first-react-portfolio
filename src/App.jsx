import React, { useState } from 'react'
import {MdDarkMode} from 'react-icons/md'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai'
import '../styles/globals.css'

function App() {
  return (
    <div>
      <main className='bg-zinc-300 px-8'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-10 flex justify-between'>
            <h1 className='text-xl font-spacemono text-zinc-800'>Sean Fitzpatrick</h1>
            <ul className='flex items-center'>
              <li>
                <MdDarkMode className='cursor-pointer text-3xl text-zinc-800'/>
              </li>
              <li>
                <a className="font-spacemono text-zinc-300 bg-zinc-800 px-4 py-2 rounded-lg ml-6" href="https://www.linkedin.com/in/s3an-f1tzpatrick/">More Info</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-14'>
            <h2 className='text-3xl py-4 font-semibold text-zinc-800'>Hello, My Name is Sean.</h2>
            <h3 className='text-xl py-2 font-medium text-zinc-800'>I'm a Full-Stack Web Developer</h3>
            <div>
              <img className='mx-auto h-85 w-80 pb-2 pt-2' src='../src/assets/profile.png'></img>
            </div>
            <div className='text-3xl flex justify-center gap-5 p-3'>
              <a className='text-zinc-800 p-1' href="https://github.com/smfitz"><AiFillGithub /></a>
              <a className='text-zinc-800 p-1' href="https://www.linkedin.com/in/s3an-f1tzpatrick/"><AiFillLinkedin /></a>
              <a className='text-zinc-800 p-1' href="#"><AiFillInstagram /></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
