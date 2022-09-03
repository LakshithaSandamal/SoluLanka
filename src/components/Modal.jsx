import { useState } from 'react'

const Modal = (prop) => {
    const [visible , setVisible] = useState(true);
  return (
    <div  className={`inset-0 bg-darkPrimary bg-opacity-30 z-[199] backdrop-blur-sm flex justify-center items-center ${visible ? 'fixed' : 'hidden'}`}>
        <div className="h-auto xs:w-[70vw] md:w-[600px] p-3 rounded-lg border-2 border-secondary bg-primary">
            <div className="xs:max-h-[60vh] ss:max-h-[70vh] ss:h-auto xs:overflow-y-scroll scroll">
                {/* HEADER */}
                <div className="flex xs:flex-col-reverse sm:flex-row">
                    <div className="xs:w-full sm:w-[200px] flex justify-center">
                        <img src={prop.data.img} alt={prop.data.title} className="xs:w-[60%] sm:w-auto" />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-center">
                            <h1 className="text-secondary font-bold text-xl mt-[10px]">{prop.data.title} Devlopment</h1>
                        </div>
                        <div className="flex justify-end mt-[30px]">
                            <p className="text-secondary text-sm w-[95%]">{prop.data.firstP}</p>
                        </div>
                    </div>
                </div>
                {/* BODY */}
                <div>
                    <div className="flex my-5 justify-center">
                        <p className="text-secondary text-sm w-[90%]">{prop.data.secondP}</p>
                    </div>
                </div>
            </div>
            {/* FOOTER */}
            <div className="">
                <hr className="border-secondary border-[1px] w-full my-2" />
                <div className="flex justify-end mr-5">
                    <button className="text-white text-sm font-bold bg-primary h-[27px] w-[100px] border-2 border-secondary mr-[10px] rounded-lg" onClick={()=> {
                        setVisible(()=> false);
                        prop.setVisit();
                    }}>Close</button>
                    <button className="text-primary bg-white font-bold text-sm h-[27px] w-[100px] border-2 border-white rounded-lg">Projects</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal