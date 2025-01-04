import React from "react";
import ReactDOM, { createRoot } from 'react-dom/client';
import Home from "./components/Home.js";


 // react component
 const AppLayout = () =>{
  return( 
     <div>
        <Home/>
    </div>
  )
 };

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout/>);