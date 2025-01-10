import React from "react";
import ReactDOM, { createRoot } from 'react-dom/client';


export default Footer = () =>{
    return(
        <>
            <footer className="footer bg-gray-800 text-white py-5" id="contact">
                <div className="text-center">
                    <h2>Contact Us</h2>
                    <p>Email: support@jobportal.com | Phone: +1 (555) 123-4567</p>
                    <p>&copy; 2025 JobPortal. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};