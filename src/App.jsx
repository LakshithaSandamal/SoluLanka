import React from 'react'
// import { BrowserRouter } from 'react-router-dom';
import { Navbar , Home , Service} from './components';

const App = () => (
    <div className="bg-primary w-screen">
      <Navbar/>
      <Home/>
      <Service/>
    </div>
  );

export default App