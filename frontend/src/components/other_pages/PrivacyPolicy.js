import React from "react";
import TitleContaint from "../innerCom/TitleContaint";

const PrivacyPolicy = () => {
  return (
    <>
    <TitleContaint name={"Privacy policy"} path={"Privacy"}/>
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">Last updated: April 1, 2025</p>

      <h2 className="text-xl font-semibold mt-4">1. Introduction</h2>
      <p className="mb-4">
        Welcome to our Job Portal. Your privacy is important to us. This Privacy
        Policy explains how we collect, use, and protect your information.
      </p>

      <h2 className="text-xl font-semibold mt-4">2. Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Personal details (name, email, phone number, etc.)</li>
        <li>Resume and job application details</li>
        <li>Usage data (how you interact with our platform)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">3. How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To provide job recommendations and services</li>
        <li>To improve our platform</li>
        <li>To communicate with you regarding applications</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">4. Data Protection</h2>
      <p className="mb-4">
        We implement security measures to safeguard your information. However,
        no online platform is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-4">5. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us
        at <a href="mailto:support@jobportal.com" className="text-blue-500">support@jobportal.com</a>.
      </p>
    </div>
    </>
  );
};

export default PrivacyPolicy;
