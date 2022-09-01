import React, { useState } from 'react'
import Modal from './Modal'

const ServiceBtn = (props) => {
  const [visible,setVisible] = useState(false);
  return (
    <div className="xs:h-[15vh] ss:h-[20vh] w-full flex justify-center items-center">
        <button className="xs:w-[80vw] xs:h-[70px] ss:w-[280px] ss:h-[60px] sm:w-[300px] sm:h-[70px] lg:w-[360px] lg:h-[80px] bg-serviceBtn rounded-[15px] border-2 border-secondary text-secondary font-bold text-2xl" onClick={()=>setVisible(true)}>{props.data.title}</button>
        {visible ? <Modal data={props.data} setVisit={()=>setVisible(false)}/> : ''}
    </div>
  )
}

export default ServiceBtn