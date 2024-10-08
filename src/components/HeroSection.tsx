
import HeroImage from '../assets/hero-image.png'
import Line from '../assets/line.svg'
import YellowStar from '../assets/start-yellow.png'
import ButtonArrow from '../assets/button-arrow.svg'

import Person1 from '../assets/person-1.svg'
import Person2 from '../assets/person-2.svg'
import Person3 from '../assets/person-3.svg'


export const HeroSection = () => {
  return (
    <section className="mt-20 lg:mt-10 mx-auto px-2 md:px-10 lg:px-16">
      <div className="relative grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="relative mx-auto mr-auto place-self-center lg:col-span-8">
          
          <h1 className="text-black lg:max-w-2xl max-w-3xl mb-8 text-4xl !leading-[60px] md:!leading-[75px] font-semibold md:text-5xl xl:text-6xl">
            Control your financial future easily with&thinsp;
            <span className='relative'>
            Binexopay
              <img src={Line} alt="" className="absolute left-0 top-12 md:top-16 xl:top-20 xl:w-full z-10" />
            </span> .
          </h1>

          <p className=" max-w-2xl mb-12 font-medium text-description lg:mb-20 md:text-lg lg:max-w-lg lg:text-xl ">
            We facilitate payments for your convenience. Ensure your transactions are straightforward and secure.
          </p>

          <a
            href="#"
            className="inline-flex bg-primary-700 items-center justify-center px-8 py-3.5 text-lg lg:text-2xl font-semibold text-center text-gray-900 border rounded-[15px] hover:bg-primary-800 transition-all"
          >
            Create account
          </a>

          <img src={ButtonArrow} alt="" className='absolute hidden lg:block top-52 right-[calc(-3.2rem+8vw)]'/>

          <img src={YellowStar} alt="" className="absolute hidden sm:block top-20 md:top-28 right-20" />
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:absolute lg:left-1/2 lg:-top-10">
          <img
            src={HeroImage}
            alt="mockup"
          />
        </div>
      </div>

      <div className='grid grid-cols-1 gap-y-14 max-w-screen-xl mx-auto mt-24 md:mt-12 lg:mt-32 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='hidden lg:flex mr-5 pl-5'>
          <img src={Person1} alt="" className='w-20' />
          <img src={Person2} alt="" className='-ml-8 w-20'/>
          <img src={Person3} alt="" className='-ml-8 w-20' />
        </div>

        <div className='mx-2.5 text-center'>
          <h2 className='font-semibold !leading-[56px] text-4xl'>15 Million+</h2>
          <span className='text-xl font-medium leading-7 bg-gradient-to-l from-black/50 to-[#E3C13880] bg-clip-text text-transparent'>Trusted by million of satisfied users.</span>
        </div>

        <div className='mx-2.5 text-center'>
          <h2 className='font-semibold !leading-[56px] text-4xl'>230+</h2>
          <span className='text-xl font-medium leading-7 bg-gradient-to-l from-black/50 to-[#E3C13880] bg-clip-text text-transparent'>Trusted by company .</span>
        </div>

        <div className='mx-2.5 text-center sm:col-span-2 lg:col-span-1'>
          <h2 className='font-semibold !leading-[56px] text-4xl'>$30M+</h2>
          <span className='text-xl font-medium leading-7 bg-gradient-to-l from-black/50 to-[#e3c13880] bg-clip-text text-transparent'>Successful Transactions.</span>
        </div>
      </div>
    </section>
  )
}