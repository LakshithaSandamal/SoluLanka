import React from 'react'
// import { BrowserRouter } from 'react-router-dom';
import { Navbar , Home , Service , Project , About} from './components';

const App = () => (
    <div className="bg-primary w-screen">
      <Navbar/>
      <Home/>
      <Service/>
      <Project/>
      <About/>
    </div>
  );

export default App