import React from 'react'

const Home = () => {
  return (
    <div  id="home" className="bg-transparent w-full absolute xs:mt-[-90px] md:mt-auto xs:h-[100vh] md:h-[calc(100vh-100px)] overflow-hidden">
      <div className='absolute bg-logo xs:h-[100vh] xs:w-screen md:h-full md:w-[100vh] bg-no-repeat bg-contain bg-right-bottom mix-blend-overlay rotate-[-15deg] xs:right-[-10vw] xs:bottom-[-10vh] ss:right-[-10vw] ss:bottom-[-15vh] md:right-[-3vw] md:bottom-[-17vh]'></div>
      <div className="z-10 absolute">
        <h1 className="text-white xs:text-3xl ss:text-5xl sm:text-6xl md:text-7xl font-bold xs:ml-[20px] ss:ml-[50px] md:mt-[10vh] xs:mt-[20vh]">Lets's Create Your Own <br/> Digital Solution <br/> Today !</h1>
        <p className="text-secondary xs:ml-[20px] ss:ml-[50px] xs:w-[80vw] ss:w-auto mt-[3vh] xs:text-sm ss:text-base md:text-lg">Problems are everywhare.It may be bussiness or personal, but every <br className="xs:hidden ss:block sm:hidden" /> problem has a solution. <br className="xs:hidden sm:block md:hidden" /> We will help <br  className="xs:hidden md:block"/> you to create the best <br className="xs:hidden ss:block sm:hidden" /> solution for your own matter.</p>
        <button className="bg-white text-primary rounded-[10px] w-[180px] h-[45px] border-white font-bold border-2 mt-[3vh] xs:ml-[20px] ss:ml-[50px] hover:bg-primary hover:border-secondary hover:text-secondary">I need solution</button>
      </div>
    </div>
  )
}

export default Home