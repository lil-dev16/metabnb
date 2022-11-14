import React, { useState } from 'react'
import Adventure from '../components/Adventure'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Line from '../components/Line'
import MetaNfts from '../components/MetaNfts'
import Modal from '../components/Modal'
import { Navbar } from '../components/Navbar'

const Home = () => {
  const [isHidden, setIsHidden] = useState(false)
  return (
    <div>
        <Navbar changeVal={()=> {
          setIsHidden(prev => !prev);
          console.log(isHidden);}
          }/>
        <Hero />
        <Line />
        <Adventure />
        <MetaNfts />
        <Footer />
        <Modal isHidden={isHidden} changeVal={()=> {
          setIsHidden(prev => !prev);
          console.log(isHidden);}
          }/>
    </div>
  )
}

export default Home