import React, { useState } from "react";

const InnerNavBar = () => {

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearchPanel = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div
      id="inner-nav-bar"
      className="sticky top-0 z-secondary-navbar bg-white shadow"
    >
      <div id="inner-nav-bar" className="mx-auto max-w-screen-2xl select-none">
        <div className="h-12">
          <div className="flex h-full w-full items-center justify-between">
            {/* Left Side - SearchBar */}
            <div className="flex cursor-pointer items-center justify-center pl-4 laptop:pl-8">
              <div className="laptop:block svelte-eqd6zh">
                <img
                  className="h-6 object-contain"
                  src="https://acharyaprashant.org/images/ic_videoseries.png"
                  alt="content home"
                />
              </div>
              <div
                className={`ml-6 ${
                  isSearchOpen ? "block" : "hidden"
                } w-[36rem] flex-grow tab:block`}
              >
                <div className="items-center rounded border border-gray-disabled shadow-sm">
                  <div className="relative">
                    <div className="relative flex w-full flex-row">
                      <button className="flex flex-row items-center whitespace-nowrap rounded-l border-r pl-2 text-xs font-normal">
                        <div className="text-xs font-medium text-gray-subtitle">
                          <span className="font-en svelte-t3mcl">All</span>
                        </div>{" "}
                        <div className="px-3 text-slate-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="9"
                            height="6"
                            viewBox="0 0 9 6"
                            className="fill-current"
                          >
                            <path d="m.354 1.354 3.792 3.792a.5.5 0 0 0 .708 0l3.792-3.792A.5.5 0 0 0 8.293.5H.707a.5.5 0 0 0-.353.854Z"></path>
                          </svg>
                        </div>
                      </button>
                      <input
                        type="search"
                        className="h-9 w-full border-0 text-gray-title caret-brand-600 focus:ring-0 svelte-501o6l"
                        placeholder=" Search for video series"
                      />
                      <button
                        id="main-website-search-courses-btn"
                        className="items-end rounded-r bg-brand-200 fill-current py-1 px-2 text-slate-700"
                        onClick={toggleSearchPanel}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6Z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-10 content-center items-center justify-center space-x-4 pr-4 laptop:pr-12">
              <div className="invisible">
                <a
                  href="/en/cart"
                  className="inline-flex cursor-pointer items-center px-1.5 py-2"
                  id="main-website-main-nav-bar-cart-icon"
                >
                  <div className="flex items-center pr-1">
                    <div className="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="19"
                        viewBox="0 0 23 19"
                        className="fill-current text-white"
                      >
                        <path d="M8.094 14.263h11.568a.808.808 0 0 0 .567-.223.74.74 0 0 0 .241-.569.74.74 0 0 0-.241-.568.808.808 0 0 0-.567-.223H8.293a.848.848 0 0 1-.63-.243 1.132 1.132 0 0 1-.304-.64L5.763 1.188C5.7.795 5.57.499 5.37.299 5.17.1 4.804 0 4.272 0H.83a.808.808 0 0 0-.577.243A.777.777 0 0 0 0 .822c0 .223.084.414.252.573.168.159.36.238.577.238h3.244L5.627 11.99c.112.704.365 1.258.76 1.664.396.406.965.609 1.707.609Zm-1.785-3.47h13.405c.75 0 1.321-.204 1.717-.613.395-.41.649-.97.76-1.68l.767-4.94a8.02 8.02 0 0 1 .026-.202A1.36 1.36 0 0 0 23 3.175c0-.25-.09-.455-.268-.614-.178-.159-.421-.238-.73-.238H5.428l.021 1.572h15.673l-.661 4.443a1.161 1.161 0 0 1-.29.635c-.15.158-.358.238-.624.238l-13.248.01.011 1.572ZM8.881 19c.476 0 .875-.157 1.197-.472.322-.314.482-.695.482-1.14 0-.447-.16-.828-.482-1.142-.322-.315-.721-.472-1.197-.472-.462 0-.856.157-1.181.472a1.529 1.529 0 0 0-.488 1.141c0 .446.162.827.488 1.141.325.315.719.472 1.18.472Zm9.248 0c.462 0 .856-.157 1.181-.472.326-.314.488-.695.488-1.14 0-.447-.162-.828-.488-1.142a1.637 1.637 0 0 0-1.18-.472c-.463 0-.86.157-1.192.472a1.513 1.513 0 0 0-.499 1.141c0 .446.166.827.499 1.141.332.315.73.472 1.191.472Z"></path>
                      </svg>{" "}
                      <div className="absolute -top-2 left-3 flex h-4 w-4 items-center justify-center rounded-full text-xs svelte-1iksi9k cart-dark">
                        3
                      </div>
                    </div>
                  </div>
                </a>
              </div>{" "}
              <div className="cursor-pointer tab:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  className="fill-current"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6Z"
                  ></path>
                </svg>
              </div>{" "}
              <div className="whitespace-nowrap py-2 text-sm bg-brand-600  px-3 rounded-md font-semibold text-white">
                <div className="cursor-pointer  text-center transition-colors duration-150 btn-solid btn-sm ">
                  <span className="font-en svelte-t3mcl">My Video Series</span>
                </div>
              </div>
            </div>
            {/* ... (Your existing RightMenu component code) */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerNavBar;
