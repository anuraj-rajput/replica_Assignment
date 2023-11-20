import React from "react";
import StackedImagesWrapper from "./helperCompForHero/StackedImagesWrapper";


const VideoSeriesItem = ({
  id,
  contentType,
  title,
  subtitle,
  language,
  thumbnail,
  coursesCount,
}) => {
  const images = [
    {
      src: `${thumbnail.domain}/${thumbnail.basePath}/${thumbnail.qualities[0]}/${thumbnail.key}`,
      alt: `${title} Thumbnail`,
      logo: `https://acharyaprashant.org/images/ic_apsignature_${language}.png`, // Update with the actual logo source
    },
  ];

  return (
    <a
      href={`/en/courses/series/${id}`}
      className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 laptop:rounded-lg laptop:hover:shadow"
    >
      <div className="flex flex-row items-start">
        <StackedImagesWrapper images={images} />

        <div className="ml-4 flex flex-shrink flex-col">
          <div className="text-lg font-semibold text-gray-title ">
            <span className="font-hi svelte-t3mcl">{title}</span>
          </div>
          <div className="text-sm leading-normal text-gray-subtitle laptop:text-base svelte-t3mcl">
            <span className="font-hi">{subtitle}</span>
          </div>
          <div className="text-sm text-gray-subtitle">
            <span className="font-en">{`${coursesCount} Video Series`}</span>
          </div>
        </div>
      </div>
      <div className="pt-2 group-hover:invisible tab:pr-4">
        <div className="h-[0.5px] w-full bg-gray-separator"></div>
      </div>
    </a>
  );
};

function HelpfulSeries(props) {
  const dataArray = props.fetchedData;

  return (
    <>
      <div className="px-4 laptop:px-8">
        <div>
          <div className="mt-8 text-lg font-medium tab:mt-12 tab:text-xl laptop:mt-16">
            <span className="font-en svelte-t3mcl">
              Other Helpful Video Series
            </span>
          </div>

          <div className="mt-1 h-[0.5px] w-full bg-gray-separator tab:mt-2"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 tab:grid-cols-2 tab:gap-y-4 laptop:gap-x-8 laptop:px-4 desk:grid-cols-3">
        {dataArray.map((data, index) => (
          <VideoSeriesItem key={index} {...data} />
        ))}
      </div>
    </>
  );
}

export default HelpfulSeries;
