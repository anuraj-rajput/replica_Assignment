import React from "react";
import ShareButtons from "./helperCompForHero/ShareButtons";
const CourseInformation = (props) => {
  // console.log(props.fetchedData);
  const courseInfo = props.fetchedData;

  return (
    <div className="px-4 laptop:px-8">
      <div className="flex flex-col tab:flex-row tab:items-start">
        {/* Left section (image and share buttons) */}
        <div className="w-full shrink-0 tab:w-2/5">
          {/* Main image */}
          <div className="aspect-[16/9] w-full">
            <div className="relative h-full w-full cursor-pointer overflow-hidden rounded">
              <img
                className="h-full w-full object-cover"
                src={`https://cimg.acharyaprashant.org/${courseInfo.details.thumbnail.basePath}/${courseInfo.details.thumbnail.qualities[0]}/image.jpg`}
                alt="Thumbnail"
              />
              {/* Gradient */}
              <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white"></div>
              {/* Logo */}
              <img
                className="absolute object-contain  h-1/4 logo-height-lg right-1 bottom-1"
                src={
                  "https://acharyaprashant.org/images/ic_apsignature_hindi.png"
                }
                alt="AP Name Logo"
              />
            </div>
          </div>
          {/* Share buttons */}

          <ShareButtons />

          {/* Share buttons code here */}
        </div>

        {/* Right section (Intro of course) */}
        <div className="flex flex-col self-stretch pt-4 text-sm tab:pl-4 tab:pt-0 laptop:text-lg">
          {/* Right section Heading */}
          <div className="text-lg font-semibold text-gray-title laptop:text-xl">
            <span className="font-en">{courseInfo.details.subtitle}</span>
          </div>

          <div className="text-justify text-base font-medium pt-3 text-gray-subtitle tab:pr-4">
            {/* Course description */}
            {courseInfo.details.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInformation;
