import React from 'react'
import LineItems from './LineItems'

const Line = () => {
  return (
    <div className='bg-wallet-gradient '>
    <div className='w-full mt-12 flex justify-between container mx-auto py-1'>
        <LineItems src="far3.svg"/>
        <LineItems src="far2.svg"/> 
        <LineItems src="far.svg"/>
    </div>
    </div>
  )
}

export default Line