import Home from '../page/home';
import Navbar from '../component/navbar';
import Eaproduct from '../page/EaProduct';
import About from '../page/About';
import Signin from '../page/Signin';


import { Routes,Route } from 'react-router-dom';
function Navitem() {

  
  return (
    <div className=''>
    <Routes>
      <Route path="/"element={<Home/>} ></Route>
      <Route path="/About" element={ <About/>} ></Route>
      <Route path="/Eaproduct" element={<Eaproduct/>} ></Route>
      <Route path="/Signin" element={<Signin/>} ></Route>

    </Routes> 
    </div>


  );
}

export default Navitem;