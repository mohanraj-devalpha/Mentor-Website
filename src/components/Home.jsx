import React from 'react'
import Image_1 from "../assets/Person_103.png"
import Image_2 from "../assets/Person_102.png"
import Image_3 from "../assets/Person_101.png"
import Image_4 from "../assets/Person_104.png"
import Star from "../assets/Star_101.png"

const Home = () => {
  return (
    <div>
        <div className='flex flex-col justify-evenly bg-[#FFFFFF] overflow-hidden border-2 my-5 min-[1400px]:my-20 mx-5 min-[1400px]:mx-20 '>
            <h1 className='text-4xl md:text-6xl lg:text-8xl text-center py-7 '>Find your right mentor</h1>
            <div className='grid grid-cols-1 min-[1400px]:grid-cols-2 max-[1400px]:gap-10 '>
                <div className=' border-t border-r h-full '>
                        <div className='  space-y-18 mx-20 max-[725px]:mx-10 max-[394px]:mx-5 py-10'>
                            <div className='flex flex-col  gap-2  max-[350px]:text-center'>
                                <span className='text-6xl max-[725px]:text-4xl max-[528px]:text-2xl '>Learn from experts</span>
                                <span className='text-6xl max-[725px]:text-4xl max-[528px]:text-2xl max-[350px]:text-center'>Grow your careers</span>
                            </div>
                            <p className='text-3xl max-[725px]:text-2xl max-[528px]:text-xl  pr-10 max-[453px]:px-5 max-[400px]:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Faucibus in libero risus semper habitant arcu eget. Et integer.</p>
                            <button className='bg-[#333333]  text-white py-3 px-9 text-2xl max-[528px]:text-xl max-[355px]:text-base rounded-full shadow-[5px_10px_0px_rgba(0,0,0,0.7)]'>Explore our mentors</button>
                        </div>
                        <div className="rounded-xl grid grid-cols-1 md:grid-cols-2  my-10 md:my-4 mx-5 md:mx-20 border-2 border-[#333333] ">
                            <div className="flex flex-col gap-5 p-5 max-[300px]:items-center">
                                <div className="flex flex-col max-[300px]:items-center">
                                    <span className="font-bold text-2xl pt-3">34</span>
                                    <span>Lorem ipsum dolor sit consectetur adipiscing</span>
                                </div>
                                <div className="border-[3px] mr-40 border-emerald-900 "></div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-2xl pt-3">15+</span>
                                    <span>Lorem ipsum dolor sit consectetur adipiscing</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 p-5 ">
                                <div className="flex flex-col ">
                                    <span className="font-bold text-2xl pt-3">256+</span>
                                    <span>Lorem ipsum dolor sit consectetur adipiscing</span>
                                </div>
                                <div className="border-[3px] mr-40 border-emerald-900 "></div>
                                <div className="flex flex-col ">
                                    <span className="font-bold text-2xl pt-3">4.89</span>
                                    <span>Lorem ipsum dolor sit consectetur adipiscing</span>
                                </div>
                            </div>
                        </div>



                            </div>
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
                                {/* <div className='border-t grid grid-cols-2 max-[776px]:grid-cols-1 gap-10 max-[776px]:gap-4'>
                    <div className='grid grid-rows-2 relative mx-auto'>
                        <div className="relative max-w-[400px] ">
                            <img src={Star} alt="Star" className="object-cover w-full mt-30" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-2xl font-bold">
                                <span className="block">Anything</span>
                                <span className="block">Anywhere</span>
                                <span className="block">Anytime</span>
                            </div>
                        </div>

                        <img src={Image_4} alt="Person 4" className="max-w-[400px] object-cover mx-auto" />
                    </div>
                    
                    <div className='grid grid-rows-3 gap-4'>
                        <img src={Image_2} alt="Person 2" className="max-w-[400px] object-cover mx-auto" />
                        <img src={Image_1} alt="Person 1" className="max-w-[400px] object-cover mx-auto" />
                        <img src={Image_3} alt="Person 3" className="max-w-[400px] object-cover mx-auto" />
                    </div>
                </div>
                */}

            </div>
        </div>
      
    </div>
  )
}

export default Home
