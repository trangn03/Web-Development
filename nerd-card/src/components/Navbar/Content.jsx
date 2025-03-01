import React from 'react';
import {FaUser} from 'react-icons/fa';
import { BsFillCreditCardFill } from 'react-icons/bs';
import checkIconMobile from "../../assets/mobile/checkpoint.svg";
import { useSpring, animated } from 'react-spring';

const Content = () => {
    const customer = useSpring({ customers: 10245, from: { customers: 0 } });
    const card = useSpring({ cards: 12045, from: { cards: 0 } });
    
  return (
    <section className="md:flex md:flex-row">
        <div className="ml-[70px] mr-[54px] text-bold flex flex-col items-center bg-gradient-to-b shadow-md from-white/40 to-transparent rounded-[24px] md:w-[20%]">
            <div className="gap-8 mt-16 flex items-start">
                <FaUser size={"22px"} className='mt-[12px]'/>
                <div className="text-[26px]">
                    <animated.div>
                        {customer.customers.to((val) => Math.floor(val))}
                    </animated.div>
                    <p className="text-[13px] font-semibold mb-[36px] md:text-[16px]">Customers</p>
                </div>

            </div>

            <div className="gap-8 flex items-start">
                <BsFillCreditCardFill size={"22px"} className='mt-[12px]'/>
                <div className="text-[26px]">
                    <animated.div>
                        {card.cards.to((val)=>Math.floor(val))}
                    </animated.div>
                    <p className="text-[13px] font-semibold md:text-[16px]">Card issues</p>
                </div>
            </div>
        </div>

        <div className="text-[13px] flex flex-col w-[100%] mt-[90px] font-semibold md:w-[30%] md:mt-0 md:text-[16px] md:ml-[20%]">
            {/* Custom the class in index.css */}
            <div className="check-content">
                <img src={checkIconMobile} alt="" />
                <p className="">Card reports sent to your phone every week</p>
            </div>

            <div className="check-content">
                <img src={checkIconMobile} alt="" />
                <p className="">No external fees</p>
            </div>

            <div className="check-content">
                <img src={checkIconMobile} alt="" />
                <p className="">Set spending limits and subscription</p>
            </div>
        </div>
    </section>
  )
}

export default Content
