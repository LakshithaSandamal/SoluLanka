import React, { useState } from 'react'
import { services } from '../constants'
import ServiceBtn from './ServiceBtn'
import {FaAngleDown,FaAngleUp} from 'react-icons/fa'

const Service = () => {
    const [count,setVal] = useState(1);
  return (
    <div id="service" className="h-screen w-screen bg-darkPrimary mt-[calc(100vh-90px)] grid grid-cols-1 md:grid-cols-3">
        <div className="text-white flex justify-center items-center xs:hidden md:block">
            <p>Robot</p>
        </div>
        <div className="col-span-2">
            <div className="flex justify-center xs:mt-[10vh] ss:mt-[15vh]">
                <h1 className="text-5xl text-white">What We Offer</h1>
            </div>
            <div className="flex justify-center mt-[5vh]">
                <button className={`text-5xl text-secondary ${count == 1 ? 'hidden' : 'block'}`} onClick={()=> setVal((val)=> val == 1 ? 1 : val-1)}><FaAngleUp/></button>
            </div>
            <div className="overflow-hidden">
                <div className="grid grid-rows-10 xs:grid-cols-1 ss:grid-cols-2 xs:h-auto xs:max-h-[60vh] ss:h-[40vh] xs:mt-[2vh] ss:mt-[5vh]">
                    {services.map((service,index)=>(
                        (count - 1)*4 <= index && (count*4) -1 >= index ? <ServiceBtn key={index} title={service.title}/> : ''
                    ))}
                </div>
            </div>
            <div className="flex justify-center xs:mt-[2vh] ss:mt-[5vh]">
                <button className="text-5xl text-secondary" onClick={()=> setVal((val)=> services.length/4 > val ? val+1 : val)}><FaAngleDown/></button>
            </div>
        </div>
    </div>
  )
}

export default Service