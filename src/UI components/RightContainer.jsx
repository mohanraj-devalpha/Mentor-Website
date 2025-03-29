import React from 'react'
import Image_1 from "../assets/Person_103.png"
import Image_2 from "../assets/Person_102.png"
import Image_3 from "../assets/Person_101.png"
import Image_4 from "../assets/Person_104.png"
import Star from "../assets/Star_102.png"

const RightContainer = () => {
  return (
    <div>
        <div className="relative grid sm:grid-rows-1 md:grid-rows-2 gap-4 border-t ">
            {/* top */}
            <div className='grid grid-cols-2 place-items-center ]'>
                <img src={Star} alt="" className='h-full'/>
        

                            <img src={Image_1} alt="Person 1" className="w-full max-w-[400px] object-cover mx-auto my-auto" />
   

            </div>
            {/* bottom */}
            <div className='grid grid-cols-2 gap-2 row-span-20 h-full'>
            <img src={Image_4} alt="Person 4" className="w-full row-span-2 h-full max-w-[400px] object-cover mx-auto" />
            <img src={Image_3} alt="Person 3" className="w-full max-w-[400px] object-cover mx-auto my-auto"/> 

        
        <img src={Image_2} alt="Person 2" className="w-full h-full max-w-[400px] object-cover mx-auto" />


            </div>
            
                            
                        
                            
                        </div>
      
    </div>
  )
}

export default RightContainer
