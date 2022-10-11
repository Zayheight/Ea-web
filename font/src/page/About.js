import Navbar from '../component/navbar';
import About1 from '../component/com-about/aboutus1';
import { BrowserRouter as Router,Route } from 'react-router-dom';
function About() {

  
  return (
    <div>
      <Navbar></Navbar>
      <body>
        <div class="landingpage">

          
          <section>
            <About1></About1>
          </section>
          
        </div>
        
      </body>
    </div>
    
  );
}

export default About;
