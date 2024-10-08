
import ArrowDown from '../assets/arrow-down.svg'

export const ScrollDown = () => {
  return (
    <section className='mt-24 lg:mt-20 mx-auto px-2 md:px-10 lg:px-16'>
      <div className='animate-bounce flex items-center gap-5 max-w-screen-xl mx-auto px-4'>
        <img src={ArrowDown} alt="" className='rounded-[35px] border border-black px-2.5 py-5' />
        <p className='text-xl font-medium'>Scroll down</p>
      </div>
    </section>
  )
}