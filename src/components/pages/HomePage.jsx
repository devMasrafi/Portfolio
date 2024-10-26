import React from 'react'

const HomePage = () => {
  return (
    <section className='bg-bg-main-col pb-[144px] ' >
      <div className=' container mx-auto'>
        <div>
          <h1 className='font-inter text-white text-4xl font-semibold pt-[210px] pb-6 '>You have a <span className='text-sec-color'>vision</span> I have <span className='text-sec-color'>skill</span>
          <br />
          Lets make it <span className='text-sec-color'>reality</span> </h1>
          <p className='text-white w-[440px] pb-6 '>Let's work together to bring your digital ideas to life. Explore my portfolio to see my MERN magic in action!</p>
        </div>
        <div className='pb-[86px]'>
          <button className='font-inter font-medium text-white py-3 px-8 bg-sec-color rounded-tl-[10px] rounded-br-[10px] '>
            <p className='drop-shadow-xl'>contact</p>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HomePage