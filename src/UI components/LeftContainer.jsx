import React from 'react'

const LeftContainer = () => {
  return (
    <div>
                            <div className=' border-t border-r h-full '>
                            <div className='  space-y-18 mx-20 max-[725px]:mx-10 max-[394px]:mx-5 py-10'>
                                <div className='flex flex-col font-weigh gap-2  max-[350px]:text-center'>
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
      
    </div>
  )
}

export default LeftContainer
