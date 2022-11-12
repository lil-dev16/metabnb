import React from 'react'
import Adventure from '../components/Adventure'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Line from '../components/Line'
import MetaNfts from '../components/MetaNfts'
import { Navbar } from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Line />
        <Adventure />
        <MetaNfts />
        <Footer />
    </div>
  )
}

export default Home