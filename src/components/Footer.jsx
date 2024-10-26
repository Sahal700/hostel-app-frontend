import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div >
      <div className='grid grid-cols-[repeat(1,2fr_1fr_1fr_2fr)] md:p-5 bg-[#1c6bb0]'>
            <div className=' p-3 '>
         <div className='flex p-2'>
                <img src="https://tse2.mm.bing.net/th?id=OIP.09ERKUaIiUq2mf1x9W-gywHaHw&pid=Api&P=0&h=180" alt="" className='w-[30px] me-3 rounded-[50%]' />
                <h5 className='text-2xl font-[500] text-white '>Hostel</h5> 
         </div>
            <p className='p-3  text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam nobis blanditiis mollitia nesciunt, consectetur totam iste maiores repudiandae maxime. Adipisci ipsa repudiandae dolores unde earum voluptates cupiditate saepe velit?</p>
            </div>
            <div className=' flex justify-center p-5'>
               <div>
                    <h1 className='text-2xl text-white '>Links</h1>
                    <p className=' mt-3'>Landing</p>
                    <p className=' mt-3'>Home</p>
                    <p className=' mt-3'>people</p>
                    <p className=' mt-3'>Room</p>
               </div>
            </div>
            <div className='flex justify-center p-5'>
            <div>
                <h1 className='text-2xl text-white '>Guides</h1>
                    <p className=' mt-3'>React</p>
                    <p className=' mt-3'>React Bootstrap</p>
                    <p className=' mt-3'>Bootswatch</p>
            </div>
            </div>
            <div className=' p-5'>
            <h1 className='text-2xl text-white p'>Contact us</h1>
            <div className='flex mt-3'>
                <input type="text" placeholder='Email' className='w-full border border-slate-700 rounded p-1 ps-2 me-3' />
                <button className='bg-[#92ddfd] p-1 px-2 rounded hover:bg-[#a7e1f9]'>Subscribe</button>
            </div>
            <div className='flex text-3xl justify-between p-5'>
            <FontAwesomeIcon  icon={faInstagram} className='hover:text-white'  />
            <FontAwesomeIcon icon={faXTwitter} className='hover:text-white' />
            <FontAwesomeIcon icon={faFacebook} className='hover:text-white'  />
            </div>
            </div>
      </div>
    </div>
  )
}

export default Footer
