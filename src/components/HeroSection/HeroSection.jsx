// HeroSection.jsx
import React, { useEffect, useState } from "react";

import InnerNavBar from "./InnerNavBar";
import MainContentHeading from "./MainContentHeading";
import VideoSeries from "./VideoSeries";
import HelpfulSeries from "./OtherHelpfulSeries";
import FAQs from "./FAQs";
import CourseInformation from "./CourseInformation";
import Footer from "./Footer";



const HeroSection = () => {
  const [courseInfo, setCourseInfo] = useState(null);

  // Use useEffect to fetch course information when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace the URL with your actual API endpoint
        // Make an API call to fetch course information
        const response = await fetch("https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3" );
        const data = await response.json();
        setCourseInfo(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []); // Empty

  // Return loading state while waiting for API response
  if (!courseInfo) {
    return <div>Loading...</div>;
  }
  return (
    <div className="min-h-full w-full flex-grow">
      <InnerNavBar />
      <div className="relative mx-auto max-w-screen-2xl">
        <div>
          
          <MainContentHeading fetchedData={courseInfo.details} />
          <CourseInformation fetchedData={courseInfo} />
          <VideoSeries fetchedData={courseInfo} />
          <HelpfulSeries fetchedData={courseInfo.relatedContent } />
          <FAQs />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
