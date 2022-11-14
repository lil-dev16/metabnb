import React from 'react'
import AdventureCards from './AdventureCards'

const Adventure = () => {
  return (
    <div className='container mx-auto'>
        <h1 className='text-4xl text-center py-[3rem]'>Inspiration for your next adventure</h1>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-3 '>
            <AdventureCards img="frame8.png"/>
            <AdventureCards img="frame1.png"/>
            <AdventureCards img="frame3.png"/>
            <AdventureCards img="frame2.png"/>
            <AdventureCards img="frame4.png"/>
            <AdventureCards img="frame5.png"/>
            <AdventureCards img="frame6.png"/>
            <AdventureCards img="frame7.png"/>
        </div>
        
    </div>
  )
}

export default Adventure