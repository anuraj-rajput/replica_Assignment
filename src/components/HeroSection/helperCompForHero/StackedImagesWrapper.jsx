import "../../../styles/StackedImages.css"
import React from "react";

const StackedImagesWrapper = ({ images }) => {
  return (
    <div className="flex w-1/3 flex-shrink-0 flex-col items-start space-y-1">
      <div className="w-full">
        <div
          id="stacked-images-wrapper"
          className="relative aspect-[16/9] w-full overflow-hidden svelte-1csyku9"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 ${
                index > 0 ? `top-${index}` : "mx-2"
              } border border-t border-white`}
            >
              <div className="relative h-full w-full cursor-pointer overflow-hidden rounded">
                <img
                  className="h-full w-full object-cover"
                  src={image.src}
                  alt={image.alt}
                />
                <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white"></div>
                {image.logo && (
                  <img
                    className="absolute object-contain logo-height-base right-1 bottom-1 svelte-cz7db6"
                    src={image.logo}
                    alt="AP Name Logo"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackedImagesWrapper;
