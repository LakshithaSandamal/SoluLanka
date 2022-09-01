import React, { useEffect, useState } from 'react'
import {FaTimes} from "react-icons/fa"

const Modal = (prop) => {
    const [visible , setVisible] = useState(true);
  return (
    <div className={`inset-0 bg-darkPrimary bg-opacity-30 z-[199] backdrop-blur-sm flex justify-center items-center ${visible ? 'fixed' : 'hidden'}`}>
        <div className="h-auto w-[600px] p-3 rounded-lg bg-primary border-2 border-secondary">
            {/* HEADER */}
            <div className="flex justify-between items-center">
                <h1 className="text-white">{prop.data.title}</h1>
                <button className="text-secondary p-1 text-lg" onClick={()=> {
                    setVisible(()=> false);
                    prop.setVisit();
                }}><FaTimes/></button>
            </div>
            {/* BODY */}
            <div className=""></div>
        </div>
    </div>
  )
}

export default Modal