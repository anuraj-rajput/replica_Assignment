import React, { useState, useEffect } from "react";

const FaqItem = ({ question, answer}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <div
          className="flex items-center justify-between tab:cursor-pointer"
          onClick={toggleOpen}
        >
          <div className="pr-2 font-semibold text-gray-subtitle">
            <span className="font-en svelte-t3mcl">{question}</span>
          </div>

          <div
            className={`h-3 w-3 text-slate-400 hover:text-slate-800 transition duration-500 transform ${
              isOpen ? "rotate-180" : ""
            } `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="7"
              viewBox="0 0 11 7"
              className="fill-current"
            >
              <path
                fillRule="evenodd"
                d="M.793.793a1 1 0 0 1 1.414 0L5.5 4.086 8.793.793a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
              ></path>
            </svg>
          </div>
        </div>
        {isOpen && (
          <div className="w-full" id="markdown">
            <div className="tab:text-md pt-1 pr-4 leading-normal text-gray-subtitle tab:pr-8">
              <span className="font-en dynamicHTMLContainer svelte-t3mcl">
                <p>{answer}</p>
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="my-4 h-[0.5px] justify-start bg-gray-separator"></div>
    </>
  );
};

const FaqSection = () => {
   const [faqs, setFaqs] = useState([]);
    const [openIndex, setOpenIndex] = useState(null);

    const handleFaqClick = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    
  useEffect(() => {
    // Fetch data from your API
    // Replace the URL with the actual API endpoint
    fetch(
      "https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=english"
    )
      .then((response) => response.json())
      .then((data) => setFaqs(data))
      .catch((error) => console.error("Error fetching FAQs:", error));
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-slate-50 px-4 py-16 tab:px-4 laptop:px-20">
        <div className="tab:flex">
          <div className="pb-10 tab:w-1/3 tab:pb-0">
            <div className="text-lg font-semibold text-gray-title">
              <span className="font-en svelte-t3mcl">FAQs</span>
            </div>

            <div className="pt-1">
              <span className="font-en dynamicHTMLContainer svelte-t3mcl">
                <p>
                  Can’t find the answer you’re looking for? Reach out to our{" "}
                  <a
                    className="text-brand-text"
                    target="_blank"
                    href="/en/technical-support"
                  >
                    <span>support</span>
                  </a>{" "}
                  team.
                </p>
              </span>
            </div>
          </div>

          <div className="w-full tab:pl-24">
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq?.question}
                question={faq?.question}
                answer={faq?.answer}
                isOpen={index === openIndex}
                onClick={() => handleFaqClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
