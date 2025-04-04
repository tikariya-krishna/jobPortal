import React from "react";
import TitleContaint from "../innerCom/TitleContaint";

const TermsOfUse = () => {
  return (
    <>
    <TitleContaint name={"Term Of Use"} path={"term"}/>
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
      <p className="mb-4">Last Updated: April 2025</p>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>By accessing and using our job portal, you agree to abide by these terms and conditions. If you do not agree, please do not use the platform.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. User Responsibilities</h2>
        <p>You must provide accurate information when creating an account and applying for jobs. Any fraudulent activities may result in the termination of your account.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Job Listings</h2>
        <p>We do not guarantee the accuracy or legitimacy of job listings. Users should verify job details before applying.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Privacy Policy</h2>
        <p>Your personal data will be handled as per our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Modifications</h2>
        <p>We reserve the right to modify these terms at any time. Changes will be posted on this page.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Contact Us</h2>
        <p>If you have any questions, please contact us at <a href="mailto:support@jobportal.com" className="text-blue-600 underline">support@jobportal.com</a>.</p>
      </section>
    </div>
    </>
  );
};

export default TermsOfUse;