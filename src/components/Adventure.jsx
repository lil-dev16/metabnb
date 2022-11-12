import React from 'react'
import AdventureCards from './AdventureCards'

const Adventure = () => {
  return (
    <div className='container mx-auto'>
        <h1 className='text-4xl text-center py-[3rem]'>Inspiration for your next adventure</h1>
        <div className='grid grid-cols-4 gap-y-3 gap-x-3 '>
            <AdventureCards />
            <AdventureCards />
            <AdventureCards />
            <AdventureCards />
            <AdventureCards />
            <AdventureCards />
            <AdventureCards />
            <AdventureCards />
        </div>
        
    </div>
  )
}

export default Adventure