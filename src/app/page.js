import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import CardContaner from './components/Card/CardContaner'

const page = () => {
  return (
    <>
      <Navbar />
      <div className='px-10 py-6'>
        <Hero />
        <CardContaner />
      </div>

    </>
  )
}

export default page
