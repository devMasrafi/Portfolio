import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <section>
      <div className=' bg-bg-main-col'> 
        <div className='container mx-auto flex justify-between items-center'>
          <div >
            <ul className='text-white flex gap-6 font-semibold capitalize py-2 w-[426px]'>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About me</Link>
              </li>
              {/* <li>
                <Link to="/blogs">Blogs</Link>
              </li> */}
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </div>
          <div className='flex justify-center items-center gap-4 w-[210px]'>
            <Link to="https://github.com/devMasrafi" target='_blank'>
              <img className='h-6 w-6' src="./src/assets/github.png" alt="github image" />
            </Link>

            <Link to="https://www.facebook.com/MasrafiMondol22/" target='_blank'>
              <img className='h-6 w-6' src="./src/assets/facebook.png" alt="facebook image" />
            </Link>

            <img className='h-6 w-6' src="src/assets/twitter.png" alt="twitter image" />

            <Link to="https://www.linkedin.com/in/masrafi-mondol/" target='_blank'>
              <img className='h-6 w-6' src="src/assets/linkedin.png" alt="linkedin image" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;