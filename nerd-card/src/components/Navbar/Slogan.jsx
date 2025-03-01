import React from 'react'
import Cards from '../../assets/desktop/isocard.svg'

const Slogan = () => {
  return (
    <section className='text-[36px] relative my-14 font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-[48px]'>
        <div className='text-center md:col-span-1 md:col-start-2'>
            <p>Earn <span className='text-purple-300'>More</span> </p>
            <p className="">Pay Less</p>

            <button className="text-white text-[20px] px-6 py-[6px] font-bold mt-[27px] bg-purple-500 rounded-xl hover:bg-pink-500 transition-all duration-300 md:text-[25] md:px-8">Start</button>
        </div>

        <div className="mt-[60px] md:absolute md:right-[-5rem]">
            <img src={Cards} alt="Cards" />
        </div>

    </section>
  )
}

export default Slogan
