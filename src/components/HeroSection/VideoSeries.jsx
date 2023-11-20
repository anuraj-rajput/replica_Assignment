// VideoSeries.jsx
import React from "react";
import { useCart } from "../../contexts/CartContext";


const VideoSeriesCard = (props) => {

  const { data, count } = props

  const { addToCart } = useCart();

  function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  function convertDecimalToTime(decimalHours) {
    const hours = Math.floor(decimalHours);
    const minutes = Math.round((decimalHours - hours) * 60);

    return `${hours} hours and ${minutes} minutes`;
  }

  return (
    <a
      href={`https://acharyaprashant.org/en/courses/course/${data.id}`}
      className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 laptop:rounded-lg laptop:hover:shadow"
    >
      <div className="flex flex-col space-y-2">
        <div className="self-start pb-2">
          <div id="part-pointer">
            <span className="font-en">Part {count}</span>
          </div>
        </div>

        <div className="flex w-full flex-col text-left">
          <div>
            <div className="text-lg font-semibold leading-normal text-gray-title svelte-t3mcl">
              <span className="font-hi">{data.title}</span>
            </div>
            <div className="text-sm leading-normal text-gray-subtitle laptop:text-base">
              <span className="font-hi">{data.subtitle}</span>
            </div>
            <div className="pt-1 text-xs text-gray-subtitle laptop:text-sm">
              <span className="font-en">
                {convertDecimalToTime(data.courseHours)}
              </span>
            </div>
            <div className="pt-1 text-xs text-gray-subtitle laptop:text-sm">
              <span className="font-en">Contribution: ₹{data.amount}</span>
              <del>
                <span className="pl-1 font-en">₹{data.originalAmount}</span>
              </del>
            </div>
          </div>

          <div className="mt-2 flex flex-wrap text-xs">
            <div className="mr-1">
              <div className="flex items-center rounded px-1.5 py-0.5 text-xs text-slate-700 bg-blue-background">
                <span className="font-en">{capitalize(data.language)}</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center space-x-3 text-xs font-medium ">
            <div
              className="cursor-pointer rounded-md text-center transition-colors  duration-150 btn-borderless btn-base text-brand-text"
              onClick={(e) => {
                e.preventDefault();
                return addToCart(data);
              }}
            >
              <span className="font-en font-semibold svelte-t3mcl">
                ADD TO CART
              </span>
            </div>
            <div className="self-stretch py-2">
              <div className="h-full w-px bg-gray-separator"></div>
            </div>
            <div
              id="main-website-enroll-in-course-button"
              className="cursor-pointer rounded-md text-center transition-colors duration-150 btn-borderless btn-base svelte-1r7fe4c text-brand-text"
              href={`https://acharyaprashant.org/en/enroll/course/${data.id}`}
            >
              <span className="font-en font-semibold svelte-t3mcl">ENROL</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-2 group-hover:invisible">
        <div className="h-[0.5px] w-full bg-gray-separator"></div>
      </div>
    </a>
  );
};

const VideoSeries = (props) => {
 
  const { courses } = props.fetchedData;
  return (
    <div className="px-4 laptop:px-8">
      <div>
        <div className="mt-8 text-lg font-medium tab:mt-12 tab:text-xl laptop:mt-16">
          <span className="font-en">Video Series ({courses.length})</span>
        </div>
        <div className="mt-1 h-[0.5px] w-full bg-gray-separator tab:mt-2"></div>
      </div>

      <div className="grid grid-cols-1 gap-x-4 tab:grid-cols-2 tab:gap-y-4 laptop:grid-cols-3 laptop:gap-x-8 laptop:px-4 desk:grid-cols-4">
        {courses.map((course, index) => {
          return <VideoSeriesCard key={course.id} data={course} count={index+1} />;
        })}
      </div>
    </div>
  );
};

export default VideoSeries;
