import React from "react";
import ReactDOM, { createRoot } from 'react-dom/client';
import './componentcss/footer.css';

export default Footer = () =>{
    return(
        <>
            <footer className="footer" id="contact">
                <h2>Contact Us</h2>
                <p>Email: support@jobportal.com | Phone: +1 (555) 123-4567</p>
                <p>&copy; 2025 JobPortal. All rights reserved.</p>
            </footer>
        </>
    );
};