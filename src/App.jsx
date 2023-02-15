import React, { useState } from 'react'
import {MdDarkMode} from 'react-icons/md'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai'
import '../styles/globals.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
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
          <div className='text-center p-14'>
            <h2 className='text-3xl py-4 font-semibold text-zinc-800 dark:text-zinc-300'>Hello, My Name is Sean.</h2>
            <h3 className='text-xl py-2 font-medium text-zinc-800 dark:text-zinc-300'>I'm a Full-Stack Web Developer</h3>
            <div>
              <img className='mx-auto h-85 w-80 pb-2 pt-2x' src='../src/assets/profile.png'></img>
            </div>
            <div className='text-3xl flex justify-center gap-5 p-3'>
              <a className='text-zinc-800 p-1 dark:text-zinc-300' href="https://github.com/smfitz"><AiFillGithub /></a>
              <a className='text-zinc-800 p-1 dark:text-zinc-300' href="https://www.linkedin.com/in/s3an-f1tzpatrick/"><AiFillLinkedin /></a>
              <a className='text-zinc-800 p-1 dark:text-zinc-300' href="#"><AiFillInstagram /></a>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center">
            <h3 className='text-zinc-800 dark:text-zinc-300 text-3xl py-1'>Here are some of my skills.</h3>
            <p className='text-center text-zinc-800 dark:text-zinc-300 text-md pb-12 pt-2 leading-6 w-120'>
               I have a range of skills from from almost a decade spent in Customer Service,
               to an Associates In Engineering & now a recent graduate from the UNC Coding Bootcamp,
               I am ready to start my journey as a Software Developer on a team of Engineers!
            </p>
          </div>
          <div className='text-center'>
            <h3 className='text-zinc-800 dark:text-zinc-300 text-3xl py-1 pb-6'>Here's some of my projects.</h3>
            <div className="py-1 flex justify-center">
              <img className='flex justify-center rounded-xl basis-1/3 max-w-xl' src='../src/assets/filmdex.png' href="https://mdlahey1.github.io/Project1-Front-End-App-Group6/"></img>
            </div>
            <div className="py-1 pb-3 flex justify-center">
              <img className='flex justify-centerobject-center rounded-xl basis-1/3 max-w-xl' src='../src/assets/libscrib.png' href="https://mdlahey1.github.io/Project1-Front-End-App-Group6/"></img>
            </div>
          </div>
        </section>

        <section>

        </section>
      </main>
    </div>
  )
}

export default App
