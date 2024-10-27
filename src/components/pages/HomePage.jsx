import React from 'react'
import DownloadCV from '../DownloadCV'

const HomePage = () => {
  return (
  <section className='bg-bg-main-col pb-[144px] ' >
      {/* landing home page */}
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
      {/* about me short */}
      <div className='container mx-auto text-white flex justify-between items-center mt-[310px] '>
        <div className='w-[510px] '>
          <div>
            <h3 className='text-3xl py-3 font-inter font-bold  mb-[54px] capitalize '>who am i</h3>
          </div>
          <div className='font-inter leading-[150%]'>
            <p className=''>My name is <span className='text-sec-color '> Masrafi Mondol</span> , working on my carrier in full stack developer.
            </p>
            <p className='my-[18px] '>
            Specially passionate <span className='text-sec-color '>MERN Stack Developer</span> with a knack for crafting web solutions. With expertise in MongoDB, Express.js, React, and Node.js, I create dynamic, responsive, and user-friendly applications that elevate businesses.</p>
          </div>
          <button className='font-inter font-medium text-white py-2 px-6 bg-sec-color rounded-tl-[10px] rounded-br-[10px] '>
            {/* <Link to='src/assets/resume Md. Masrafi Mondol (MERN Stack Dev).pdf' download="my-cv" className='drop-shadow-xl'>download cv</Link > */}
            <DownloadCV/>
          </button>
        </div>
        <div className=' flex gap-8 '>
          <div className='border border-sec-color rounded-lg h-[175px] w-[194px] flex flex-col justify-center items-center '>
            <h2 className='font-semibold text-4xl text-sec-color'>2+</h2>
            <p>years of experience</p>
          </div>
          <p className='border border-sec-color rounded-lg h-[175px] w-[194px] flex flex-col justify-center items-center text-xl p-3 ' > <span className='text-sec-color text-4xl '>multiple</span> technology used</p>
        </div>
      </div>
    {/* skill section */}
    <div className='container mx-auto mt-[190px] '>
      <div class=" text-white">
        <h2 class="text-center text-3xl font-bold">Skills</h2>
        <div class="flex justify-between  py-8 font-inter ">
          <div className='w-[338px] h-[238px] '>
            <h3 class="text-lg font-bold mb-4">Front-end</h3>
            <ul class="list-none flex flex-wrap gap-4">
              <li class="mb-2 border p-2 rounded-md border-sec-color  ">HTML</li>
              <li class="mb-2  border p-2 rounded-md border-sec-color">CSS</li>
              <li class="mb-2  border p-2 rounded-md border-sec-color">SCSS</li>
              <li class="mb-2  border p-2 rounded-md border-sec-color">JavaScript</li>
              <li class="mb-2  border p-2 rounded-md border-sec-color">Tailwind CSS</li>
              <li class="mb-2  border p-2 rounded-md border-sec-color">React.js/Native</li>
              <li class="mb-2  border p-2 rounded-md border-sec-color">Bootstrap</li>
            </ul>
          </div>
          <div className='w-[338px] h-[238px] '>
            <h3 class="text-lg font-bold mb-4">Back-end</h3>
            <ul class="list-none flex flex-wrap gap-4">
              <li class="mb-2  border p-2 rounded-md border-sec-color">MongoDB</li>
              <li class="mb-2  border p-2 rounded-md border-sec-color">Express.js</li>
              <li class="mb-2  border p-2 rounded-md border-sec-color">Node.js</li>
              <li class="mb-2  border p-2 rounded-md border-sec-color">Rest API</li>
              <li class="mb-2  border p-2 rounded-md border-sec-color">Firebase</li>
              <li class="mb-2  border p-2 rounded-md border-sec-color">Socket.io</li>
            </ul>
          </div>
          <div className='w-[338px] h-[238px] '>
            <h3 class="text-lg font-bold mb-4">Tools</h3>
            <ul class="list-none flex flex-wrap gap-4">
              <li class="mb-2  border p-2 rounded-md border-sec-color">Figma</li>
              <li class="mb-2  border p-2 rounded-md border-sec-color">VS Code</li>
              <li class="mb-2  border p-2 rounded-md border-sec-color">canva</li>
              <li class="mb-2  border p-2 rounded-md border-sec-color">Android Studio</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* projects */}
    <div className='mt-[210px] container mx-auto '>
      <h3 className='text-white font-inter my-[80px] font-bold capitalize text-3xl text-center '>projects</h3>
      <div className='flex justify-between '>
        <div className='w-[390px] h-[510px] border-sec-color border rounded-xl '>

        </div>
        <div>
            <div className='w-[390px] h-[480px] border-sec-color border rounded-xl'>

            </div>
        </div>
        <div className='w-[390px] h-[510px] border-sec-color border rounded-xl'>

        </div>
      </div>
    </div>

  </section>
  )
}

export default HomePage