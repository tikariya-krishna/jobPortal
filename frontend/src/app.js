import React from "react";
import ReactDOM, { createRoot } from 'react-dom/client';
import Home from "./components/Home.js";
import Registration from "./components/Registration.js";
import Footer from "./components/Footer.js";
import { BrowserRouter , Routes , Route } from 'react-router';
import Menu from './components/Menu.js'


 // react component
 const AppLayout = () =>{
  return( 
     <div>
                        <BrowserRouter>
                            <Menu/>
                              <Routes>
                                <Route path='/' element={<Home/>}/>
                                {/* <Route path='/tour_packeg' element={<Tour_packeg/>}/>
                                <Route path='/contect' element={<Contact/>}/>
                                <Route path='/about' element={<About/>}/>
                                <Route path='/login' element={<Login/>}/> */}
                                <Route path='/registration' element={<Registration/>}/>
                              </Routes>
                            <Footer/>
                        </BrowserRouter>
    </div>
  )
 };

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout/>);