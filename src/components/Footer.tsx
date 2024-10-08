import logo from '../assets/logo.png'
import EmailIcon from '../assets/email.svg'
import ArrowUpRight from '../assets/right-up-arrow.svg'

import WhatsappIcon from '../assets/whatsapp.svg'
import LinkedInIcon from '../assets/linkedin.svg'
import InstagramIcon from '../assets/instagram.svg'
import XIcon from '../assets/x.svg'

export const Footer = () => {
  return (
    <footer className='mt-48 py-14 px-4 md:px-16 xl:px-[88px] bg-gradient-to-b from-black to-black/80 '>
      <div className='max-w-screen-xl lg:mx-auto flex flex-col gap-20'>
        <div className='flex flex-col gap-12'>
          <div className='max-w-xl lg:max-w-full w-full mx-auto'>
            <img src={EmailIcon} alt="" className='w-16 p-3.5 rounded-full bg-primary-700' />
          </div>

          <div className='flex flex-wrap justify-center xl:justify-between gap-20'>
            <div className='flex flex-col w-max max-w-xl'>
              <h1 className='text-white font-medium text-[55px] leading-[82px] mb-8'>Keep up with the latest</h1>
              <p className='font-medium text-xl text-textGray'>
                join our newsletter to stay up to date on features and releases.
              </p>
            </div>

            <div className='w-full flex flex-col gap-8 max-w-xl'>
              <span className='text-white text-base md:text-xl font-medium'>Stay up to date</span>

              <div className='flex flex-col gap-2 sm:flex-row sm:gap-0'>
                <input type="email" name="" id="" className='w-full px-6 py-5 sm:pl-9 sm:pr-5 text-white rounded-[40px] sm:rounded-tl-[40px] sm:rounded-bl-[40px] sm:rounded-br-none sm:rounded-tr-none text-xl bg-[#252525] placeholder:text-[#D9D9D9] outline-none' placeholder='Enter your email' />
                
                <button className='group transition-all relative flex justify-center sm:justify-start items-center gap-4 px-5 py-4 sm:text-left sm:pl-6 sm:pr-10 bg-primary-700 rounded-[40px] sm:rounded-tl-none sm:rounded-bl-none sm:rounded-br-[40px] sm:rounded-tr-[40px] text-xl font-medium'>
                  Subscribe

                  <img src={ArrowUpRight} alt="" className='w-6 sm:absolute sm:left-32 group-hover:scale-110 group-hover:rotate-12 transition-all' />
                </button>
              </div>

              <p className='font-medium text-xl text-textGray'>By subscribing you agree with our 
                <a href="" className='underline font-semibold hover:text-primary-700 transition-colors'> Privacy Policy.</a>
              </p>
            </div>
          </div>
        </div>

        <div className='w-full h-px bg-[#6E6E6E]' />

        <div className='flex justify-center lg:justify-between flex-wrap gap-20'>
          <div className='space-y-10'>
            <a href="#" className="relative flex items-center">
              <img
                src={logo}
                className="w-24 h-22 absolute -left-7 sm:w-auto"
                alt=""
              />

              <span className="self-center text-primary-700 text-2xl font-extrabold whitespace-nowrap ml-9 sm:ml-14 sm:text-2xl logo">
                BinexoPay
              </span>
            </a>

            <i className='block text-textGray'>Your money at your tips</i>
          </div>

          <div className='space-y-5'>
            <h5 className='block text-2xl text-textGray font-medium'>Quick Access</h5>

            <div className='lg:pl-5 text-center flex flex-col gap-4 text-white font-medium text-xl lg:text-left'>
              <a href="" className='hover:text-primary-700 hover:scale-105 transition-all'>Home</a>
              <a href="" className='hover:text-primary-700 hover:scale-105 transition-all'>About us</a>
              <a href="" className='hover:text-primary-700 hover:scale-105 transition-all'>Features</a>
              <a href="" className='hover:text-primary-700 hover:scale-105 transition-all'>Reviews</a>
            </div>
          </div>

          <div className='space-y-8'>
            <h5 className='text-textGray font-medium text-2xl text-center'>Contact us:</h5>
            
            <div className='flex gap-12 text-white font-medium text-xl'>
              <a href="">
                <img src={WhatsappIcon} alt="" className='w-6  hover:scale-110 transition-all' />
              </a>
              
              <a href="">
                <img src={LinkedInIcon} alt="" className='w-6 hover:scale-110 transition-all' />
              </a>
              
              <a href="">
                
                <img src={InstagramIcon} alt="" className='w-6 hover:scale-110 transition-all' />
              </a>

              <a href="">
                <img src={XIcon} alt="" className='w-6 hover:scale-110 transition-all' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}