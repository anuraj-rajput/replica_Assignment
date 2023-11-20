import React, { useState, useContext } from "react";
import MenuButton from "../Buttons/MenuButton";
import LiveSessionsDropdown from "../Buttons/LiveSessionsDropdown";
import InviteDropdown from "../Buttons/InviteDropdown";

import { CartContext } from "../../contexts/CartContext";

import "../../styles/Navbar.css";

const Navbar = () => {
  // State for managing the visibility of the Live Sessions dropdown
  const [isLiveSessionsDropdownOpen, setLiveSessionsDropdownOpen] =
    useState(false);

  // State for managing the visibility of the Invite dropdown
  const [isInviteDropdownOpen, setInviteDropdownOpen] = useState(false);

  // State for managing the visibility of the Language dropdown
  const [isLangDropdownOpen, setLangDropdownOpen] = useState(false);

  // Function to handle the click on the "Live Sessions" dropdown
  const handleLiveSessionsClick = () => {
    setLiveSessionsDropdownOpen(!isLiveSessionsDropdownOpen);
    // Close the Invite and Language dropdown when Live Sessions dropdown is clicked
    setInviteDropdownOpen(false);
    setLangDropdownOpen(false);
  };

  // Function to handle the click on the "Invite" dropdown
  const handleInviteClick = () => {
    setInviteDropdownOpen(!isInviteDropdownOpen);
    // Close the Live Sessions and language dropdown when Invite dropdown is clicked
    setLiveSessionsDropdownOpen(false);
    setLangDropdownOpen(false);
  };

  const handleLanguageSelectorClick = () => {
    setLangDropdownOpen(!isLangDropdownOpen);
    console.log(isLangDropdownOpen);
    // Close the Live Sessions and Invite dropdown when Invite dropdown is clicked
    setInviteDropdownOpen(false);
    setLiveSessionsDropdownOpen(false);
  };

  const { cartItems } = useContext(CartContext);
 

  return (
    <>
      <div className="z-navbar" style={{ position: "relative" }}>
        <div id="main-nav-bar" className="h-12 bg-brand-700">
          <div className="mx-auto h-full max-w-screen-2xl select-none text-white">
            <div className="flex h-full justify-between text-xs">
              {/*left navbar*/}
              <div className="flex items-stretch pl-4 text-sm laptop:pl-8">
                {/*logo*/}
                <a
                  className="shrink-0 self-center"
                  href="https://acharyaprashant.org/"
                >
                  <img
                    className="mr-2 h-8 w-8 rounded-full"
                    src="https://acharyaprashant.org/images/ic_favicon.png"
                    alt="Acharya Prashant"
                  />
                </a>

                <div className="hidden lg:flex h-full items-stretch justify-center font-[480] tab:flex ">
                  <a
                    id="main-website-nav-item-internal-home"
                    href="/https://acharyaprashant.org"
                    className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4  hover:bg-brand-600"
                  >
                    <div className="relative flex items-center space-x-2 ">
                      <span className="font-en text-base">Home</span>
                    </div>
                  </a>

                  <div
                    id="main-website-nav-item-in-place-live"
                    className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 hover:bg-brand-600"
                    onClick={handleLiveSessionsClick}
                  >
                    <div className="relative flex items-center space-x-2">
                      <span className="font-en text-base font-medium">
                        Live Sessions
                      </span>

                      <div
                        className={`pt-0.5 transition duration-400 transform ${
                          isLiveSessionsDropdownOpen ? "rotate-180" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          className="fill-current"
                        >
                          <path d="M.208.255A.696.696 0 0 0 0 .796a.892.892 0 0 0 .238.582l3.754 4.115c.212.225.431.375.659.45.228.074.457.076.688.005.232-.072.453-.223.664-.455l3.744-4.115A.803.803 0 0 0 10 .802a.718.718 0 0 0-.213-.547A.746.746 0 0 0 9.222 0H.773a.746.746 0 0 0-.565.255Z"></path>
                        </svg>
                      </div>
                    </div>
                    {isLiveSessionsDropdownOpen && <LiveSessionsDropdown />}
                  </div>

                  <a
                    id="main-website-nav-item-internal-courses"
                    href="https://acharyaprashant.org/en/courses"
                    className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4  bg-brand-600"
                  >
                    <div className="relative flex items-center space-x-2 ">
                      <span className="font-en text-base ">Video Series</span>
                    </div>
                  </a>

                  <a
                    id="main-website-nav-item-internal-books"
                    href="https://acharyaprashant.org/en/books"
                    className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4  hover:bg-brand-600"
                  >
                    <div className="relative flex items-center space-x-2 ">
                      <span className="font-en text-base ">AP Articles</span>
                    </div>
                  </a>

                  <a
                    id="main-website-nav-item-internal-articles"
                    href="https://acharyaprashant.org/en/articles"
                    className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4  hover:bg-brand-600"
                  >
                    <div className="relative flex items-center space-x-2 ">
                      <span className="font-en text-base ">AP Books</span>
                    </div>
                  </a>

                  <div
                    id="main-website-nav-item-in-place-invite"
                    className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 hover:bg-brand-600"
                    onClick={handleInviteClick}
                  >
                    <div className="relative flex items-center space-x-2 ">
                      <span className="font-en text-base ">Invite</span>
                      <div
                        className={`pt-0.5 transition duration-500 transform ${
                          isInviteDropdownOpen ? "rotate-180" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          className="fill-current"
                        >
                          <path d="M.208.255A.696.696 0 0 0 0 .796a.892.892 0 0 0 .238.582l3.754 4.115c.212.225.431.375.659.45.228.074.457.076.688.005.232-.072.453-.223.664-.455l3.744-4.115A.803.803 0 0 0 10 .802a.718.718 0 0 0-.213-.547A.746.746 0 0 0 9.222 0H.773a.746.746 0 0 0-.565.255Z"></path>
                        </svg>
                      </div>
                    </div>
                    {isInviteDropdownOpen && <InviteDropdown />}
                  </div>

                  <a
                    id="main-website-nav-item-internal-articles"
                    href="https://acharyaprashant.org/en/articles"
                    className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4  hover:bg-brand-600"
                  >
                    <div className="relative flex items-center space-x-2 ">
                      <span className="font-en text-base ">In Media</span>
                    </div>
                  </a>

                  <a
                    id="main-website-nav-item-internal-contribute"
                    href="https://acharyaprashant.org/en/contribute"
                    className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4  hover:bg-brand-600"
                  >
                    <div className="relative flex items-center space-x-2 ">
                      <span className="font-en text-base ">Donate</span>
                    </div>
                  </a>
                </div>
              </div>

              {/*right navbar*/}

              <div className="flex h-full content-center items-center justify-center laptop:mt-[1px] laptop:pr-8">
                {/*Donate*/}
                <a
                  className="rounded border-[1.5px] border-white px-2 text-sm tab:hidden md:inline-block lg:hidden"
                  href="/en/contribute"
                >
                  <span className="font-en text-base font-medium">Donate</span>
                </a>
                {/*Language // TODO- implement Laguage selector logic  */}
                <div
                  id="main-website-navbar-language-selector"
                  className="ml-3 flex cursor-pointer items-center px-2 tab:px-0"
                  onClick={handleLanguageSelectorClick}
                >
                  <div className="relative">
                    <div className="flex items-center space-x-1 py-2 font-medium opacity-90 transition-opacity duration-300 ease-in-out hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="21"
                        viewBox="0 0 28 21"
                        className="fill-current"
                      >
                        <path d="M24.193 0c1.27 0 2.22.301 2.855.904.59.56.905 1.372.947 2.437l.005.25v13.817c0 1.19-.317 2.085-.952 2.688-.589.56-1.452.86-2.588.9l-.267.004H3.807c-1.252 0-2.2-.301-2.843-.904-.597-.56-.916-1.372-.96-2.437L0 17.409V3.591C0 2.402.321 1.507.964.904c.597-.56 1.457-.86 2.58-.9L3.806 0h20.386Zm.435 1.5H3.346c-.598 0-1.055.153-1.371.458-.282.271-.438.66-.47 1.166l-.005.195v14.375c0 .593.158 1.043.475 1.348.281.271.673.422 1.177.452l.194.006h21.282c.597 0 1.059-.153 1.384-.458.29-.271.45-.657.482-1.156l.006-.192V3.319c0-.602-.163-1.056-.488-1.361-.325-.305-.787-.458-1.384-.458ZM11.905 5.559v1.6H7.511v2.533h4.128v1.498H7.511v2.65h4.394v1.599h-6.32v-9.88h6.32Zm3.236 0 4.35 6.572h.065V5.559h1.812v9.88h-1.61L15.391 8.83h-.057v6.609h-1.812v-9.88h1.618Z"></path>
                      </svg>

                      <div
                        className={`pt-0.5 transition duration-400 transform ${
                          isLangDropdownOpen ? "rotate-180" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          className="fill-current"
                        >
                          <path d="M.208.255A.696.696 0 0 0 0 .796a.892.892 0 0 0 .238.582l3.754 4.115c.212.225.431.375.659.45.228.074.457.076.688.005.232-.072.453-.223.664-.455l3.744-4.115A.803.803 0 0 0 10 .802a.718.718 0 0 0-.213-.547A.746.746 0 0 0 9.222 0H.773a.746.746 0 0 0-.565.255Z"></path>
                        </svg>
                      </div>
                    </div>
                    {isLangDropdownOpen && (
                      <div className="absolute left-1/2 mt-2 -translate-x-1/2 transform whitespace-nowrap rounded-lg shadow-lg">
                        <div className="z-menu flex flex-col items-start rounded-md bg-white py-1.5">
                          <div
                            className="w-full cursor-pointer px-5 py-2 text-base font-medium hover:bg-slate-100 text-slate-900"
                            id="main-website-hindi-language-toggle"
                          >
                            <div className="font-hi">हिन्दी</div>
                          </div>
                          <div
                            className="w-full cursor-pointer px-5 py-2 text-base font-medium hover:bg-slate-100 text-slate-900"
                            id="main-website-english-language-toggle"
                          >
                            <div className="font-en">ENGLISH</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/*contact*/}
                <a
                  id="main-website-navbar-contact-icon"
                  className="ml-4.5 hidden text-white hover:cursor-pointer laptop:block lg:block"
                  href="/en/enquiry"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="h-5 w-5 fill-current"
                  >
                    <path d="M11.895 16c.708 0 1.314-.104 1.817-.313.503-.209.965-.548 1.388-1.017a1.27 1.27 0 0 0 .094-.103l.086-.103a2.93 2.93 0 0 0 .544-.81 1.98 1.98 0 0 0 .176-.785c0-.298-.086-.585-.257-.862-.171-.278-.44-.54-.806-.785l-2.382-1.665a2.048 2.048 0 0 0-1.17-.39c-.408-.003-.781.164-1.118.502l-.617.609c-.097.103-.193.159-.287.167a.49.49 0 0 1-.305-.09 8.1 8.1 0 0 1-.544-.416 18.5 18.5 0 0 1-1.332-1.205c-.206-.2-.405-.405-.596-.614a11.947 11.947 0 0 1-.527-.613 5.1 5.1 0 0 1-.394-.558.42.42 0 0 1-.095-.296.506.506 0 0 1 .163-.287l.609-.618c.343-.343.512-.719.51-1.128a1.985 1.985 0 0 0-.399-1.162L4.782 1.047C4.536.692 4.275.431 3.998.262A1.699 1.699 0 0 0 3.137 0C2.61-.01 2.08.223 1.543.704a.848.848 0 0 0-.108.09.648.648 0 0 1-.098.081c-.469.43-.809.897-1.02 1.403C.106 2.784 0 3.398 0 4.118c0 .784.153 1.612.458 2.484.306.872.762 1.76 1.367 2.664a18.027 18.027 0 0 0 2.237 2.685 18.605 18.605 0 0 0 2.674 2.217c.897.604 1.782 1.06 2.657 1.369.874.309 1.708.463 2.502.463Zm0-1.295c-.691.005-1.428-.146-2.211-.455a11.557 11.557 0 0 1-2.365-1.296 16.925 16.925 0 0 1-2.28-1.921 16.885 16.885 0 0 1-1.941-2.3A12.06 12.06 0 0 1 1.765 6.32c-.32-.798-.474-1.543-.462-2.235.005-.44.087-.847.244-1.218a2.64 2.64 0 0 1 .788-1.038c.026-.023.053-.046.082-.069.114-.097.233-.173.355-.227a.895.895 0 0 1 .365-.082c.251 0 .45.115.6.343l1.55 2.317a.663.663 0 0 1 .13.411c-.007.143-.075.28-.207.412l-.685.678c-.291.292-.437.6-.437.922 0 .323.1.625.3.905.223.31.515.67.878 1.081.363.412.707.78 1.033 1.107.228.223.48.462.754.716.274.255.546.496.814.725.269.229.503.418.703.566.28.2.581.3.904.3.323 0 .63-.148.921-.445l.677-.678c.132-.137.27-.208.416-.21a.69.69 0 0 1 .416.133L14.2 12.26c.12.08.206.171.257.274a.738.738 0 0 1 .078.335c0 .234-.103.474-.309.72a2.054 2.054 0 0 1-.137.155c-.269.314-.591.55-.968.708a3.384 3.384 0 0 1-1.226.253Z"></path>
                  </svg>
                </a>

                {/*cart*/}
                <div className="ml-1.5 laptop:pl-[3px] laptop:pr-0.5">
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
                        <div className="absolute -top-2 left-3 flex h-4 w-4 items-center justify-center rounded-full text-xs svelte-1iksi9k cart-light">
                          {cartItems.length}
                          {/*TODO -- connect this to cart*/}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <MenuButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
