import React, { useState } from 'react'
import AdventureCards from '../components/AdventureCards'
import Footer from '../components/Footer'
import items from '../components/items'
import Modal from '../components/Modal'
import { Navbar } from '../components/Navbar'

const PlaceToStay = () => {
  const [isHidden, setIsHidden] = useState(false);
  const ite = items.map(item=> {
    return <AdventureCards
    img={item.imgSrc}
    key={item.id}/>
  })
  return (
    <div className=' '>
      <Navbar 
      changeVal={()=> {
        setIsHidden(prev => !prev);
        console.log(isHidden);}
        }/>
      <div className='my-8 container mx-auto'>
        <ul className='flex justify-between items-center'>
          <li>Restaurant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>fantasy city</li>
          <li>beach</li>
          <li>carbins</li>
          <li>Off-grid</li>
          <li>Farm</li>
          <img src="loc.png" alt="" />
        </ul>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-3 mb-8 container mx-auto'>
        {ite}
      </div>
      <Footer />
      <Modal isHidden={isHidden} changeVal={()=> {
          setIsHidden(prev => !prev);
          console.log(isHidden);}
          }/>
    </div>
  )
}

export default PlaceToStay