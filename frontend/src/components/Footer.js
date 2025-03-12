import React from "react";
import ReactDOM, { createRoot } from 'react-dom/client';



export default Footer = () =>{
    return(
        <>
            {/* <footer className="footer bg-gray-800 text-white py-5" id="contact">
                <div className="text-center">
                    <h2>Contact Us</h2>
                    <p>Email: support@jobportal.com | Phone: +1 (555) 123-4567</p>
                    <p>&copy; 2025 JobPortal. All rights reserved.</p>
                </div>
            </footer> */}



<footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                
                {/* Company Info */}
                <div>
                    <h2 className="text-xl font-bold">JobPortal</h2>
                    <p className="text-gray-400 mt-2">Find your dream job with us!</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="/jobs" className="text-gray-400 hover:text-white">Find Jobs</a></li>
                        <li><a href="/employers" className="text-gray-400 hover:text-white">Employers</a></li>
                        <li><a href="/candidates" className="text-gray-400 hover:text-white">Candidates</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Support</h3>
                    <ul className="space-y-2">
                        <li><a href="/faq" className="text-gray-400 hover:text-white">FAQ</a></li>
                        <li><a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                        <li><a href="/terms" className="text-gray-400 hover:text-white">Terms of Use</a></li>
                        <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
                    </ul>
                </div>

                {/* Newsletter Subscription */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
                    <p className="text-gray-400 mb-2">Subscribe to our newsletter</p>
                    <div className="flex items-center bg-gray-800 p-2 rounded-lg">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="bg-transparent outline-none text-white flex-1 px-2"
                        />
                        <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white font-medium">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 px-6 lg:px-20">
                <p>© {new Date().getFullYear()} JobPortal. All rights reserved.</p>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-white">Facebook</a>
                    <a href="#" className="hover:text-white">Twitter</a>
                    <a href="#" className="hover:text-white">LinkedIn</a>
                </div>
            </div>
        </footer>
        </>
    );
};