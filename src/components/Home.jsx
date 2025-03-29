import React from 'react'

import Title from "../UI components/Title.jsx"
import LeftContainer from '../UI components/LeftContainer.jsx'
import RightContainter from "../UI components/RightContainer.jsx"

const Home = () => {
  return (
    <div>
        <div className='flex flex-col justify-evenly bg-[#FFFFFF] overflow-hidden border-2 my-5 min-[1400px]:my-20 mx-5 min-[1400px]:mx-20 '>
        <Title/>
            <div className='grid grid-cols-1 min-[1400px]:grid-cols-2 max-[1400px]:gap-10 '>
               <LeftContainer/>
               <RightContainter/>                
            </div>
        </div>
      
    </div>
  )
}

export default Home
