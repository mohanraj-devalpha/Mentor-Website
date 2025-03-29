import React from 'react'
import Image_1 from "../assets/Person_103.png"
import Image_2 from "../assets/Person_102.png"
import Image_3 from "../assets/Person_101.png"
import Image_4 from "../assets/Person_104.png"
import Star from "../assets/Star_101.png"

const RightContainer = () => {
  return (
    <div>
        <div className="relative grid sm:grid-cols-1 md:grid-cols-2 gap-4 border-t ">
                            <div className="relative flex justify-center items-center">
                                <img src={Star} alt="Star" className="w-full max-w-[400px] object-cover" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-black text-2xl font-bold text-center p-4">
                                    <span className="block">Anything</span>
                                    <span className="block">Anywhere</span>
                                    <span className="block">Anytime</span>
                                </div>
                            </div>
                        
                            <img src={Image_2} alt="Person 2" className="w-full max-w-[400px] object-cover mx-auto" />
                            <img src={Image_4} alt="Person 4" className="w-full row-span-2 max-w-[400px] object-cover mx-auto" />
        
                            <img src={Image_1} alt="Person 1" className="w-full max-w-[400px] object-cover mx-auto" />
                            <img src={Image_3} alt="Person 3" className="w-full max-w-[400px] object-cover mx-auto" />    
                        </div>
      
    </div>
  )
}

export default RightContainer
