
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Navbar from "../component/navbar";
import { Fragment } from 'react';

function Signin() {

  
  return (
    <Fragment>
      <Navbar></Navbar>
      <h1> sign in</h1>
    </Fragment>
  );
}

export default Signin;
