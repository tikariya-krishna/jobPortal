import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import TitleContaint from "../innerCom/TitleContaint";

const faqs = [
  {
    category: "General Questions",
    questions: [
      { q: "What is Hire Hub?", a: "Hire Hub is an online platform where job seekers can find job opportunities and employers can hire the best talent." },
      { q: "Is this platform free to use?", a: "Yes, job seekers can create an account, upload their resumes, and apply for jobs for free. Employers may have premium features for job postings." }
    ]
  },
  {
    category: "Account & Profile",
    questions: [
      { q: "How do I create an account?", a: "Click on the Sign Up button, fill in your details, and verify your email to create an account." },
      { q: "How can I update my profile?", a: "Go to your Dashboard → Click on Edit Profile → Update your details and save changes." }
    ]
  },
  {
    category: "Job Applications",
    questions: [
      { q: "How do I apply for a job?", a: "Browse job listings, click on the Apply button, fill out the application form, and submit it." },
      { q: "Can I track my job applications?", a: "Yes, go to your Dashboard → Click on Applied Jobs to view your application status." }
    ]
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <TitleContaint name={"FAQ"} path={"FAQ"}/>
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h1>
      {faqs.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">{section.category}</h2>
          <div className="space-y-3">
            {section.questions.map((item, index) => (
              <div key={index} className="border p-4 rounded-md">
                <button
                  className="flex justify-between items-center w-full text-left font-medium"
                  onClick={() => toggleFAQ(`${sectionIndex}-${index}`)}
                >
                  {item.q}
                  {openIndex === `${sectionIndex}-${index}` ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openIndex === `${sectionIndex}-${index}` && (
                  <p className="mt-2 text-gray-600">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default FAQ;
