import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className='min-h-screen'>
        <div className='w-full flex items-center justify-center'>
            <h2 className='text-[#F2522E] border-b border-b-[#F2522E] w-fit p-4 text-2xl'>ABOUT ECELL</h2>
        </div>
        <div className='w-full flex flex-col sm:flex-row items-center justify-center'>
            <div className='w-9/12 flex flex-col sm:flex-row gap-20 sm:mt-20 mt-10 justify-center'>
                <div className='w-full sm:w-1/2 flex flex-col gap-5 items-center justify-center'>
                    <div className='w-full  flex gap-10'>
                        <div className='w-1/2 bg-[#242526] rounded-xl'> 
                            <p className='text-[#EC6E41] p-4 font-thin'>Business need to go beyond the interest of their companies to the communities they serve.</p> <span className='text-[#EC6E41] p-4'>-RATAN TATA</span> 
                        </div>
                        <div className='w-full sm:w-1/2'>
                            <Image src="./images.about_img1.png" alt='Image'/>
                        </div>
                    </div>
                    <div className='h-[60%]'>
                        <p className='text-white bg-gradient-to-r from-black via-rgba-gray-700 to-transparent p-4 font-thin rounded-xl'>Opportunities and networks are the two defining factors in the realm of entrepreneurship that makes all the difference. We want to make sure that there’s no dearth of either. Our team is a small group of hard-working individuals who work day in, day out to bring us closer to our vision, one step at a time.</p>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 flex flex-col gap-5'>
                    <div>
                        <p className='text-white bg-gradient-to-r from-[#011640] via-rgba-gray-700 to-transparent  p-4 font-thin rounded-xl'>Enigma E-Cell aims to transform itself into a platform to launch the leaders of tomorrow towards the path of success. We plan to widen our scope of impact by allowing not only students but also working professionals, retired personnel, etc. to have an opportunity to fabricate their vision into reality.</p>
                    </div>
                    <div className=''>
                        <Image className='' src="./images.about_img1.png" alt='Image'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPage
