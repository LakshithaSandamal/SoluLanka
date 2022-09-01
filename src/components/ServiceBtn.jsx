import React from 'react'

const ServiceBtn = (props) => {
  return (
    <div className="h-[20vh] w-full flex justify-center items-center">
        <button className="xs:w-[80vw] xs:h-[70px] ss:w-[280px] ss:h-[60px] sm:w-[300px] sm:h-[70px] lg:w-[360px] lg:h-[80px] bg-serviceBtn rounded-[15px] border-2 border-secondary text-secondary font-bold text-2xl">{props.title}</button>
    </div>
  )
}

export default ServiceBtn