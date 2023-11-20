// MenuButton.js
import React from "react";

const MenuButton = () => {
  return (
    <div
      id="main-website-right-menu-btn"
      className="mx-2 inline-flex cursor-pointer items-center px-2 py-2 text-white tab:pl-0 tab:pr-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="16"
        viewBox="0 0 22 16"
        className="fill-current"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.826"
          d="M1 1.609h20M1 8h20M1 14.391h20"
        ></path>
      </svg>
      <div className="hidden pl-2 laptop:block lg:flex py-3">
        <span className="font-en font-sm">Menu</span>
      </div>
    </div>
  );
};

export default MenuButton;
