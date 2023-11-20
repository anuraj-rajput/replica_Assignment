import Heading from "./helperCompForHero/Heading";

const MainContentHeading = (props) => {
  const { language, title } = props.fetchedData
  
  
  return (
    <>
      <Heading />
      <div className="flex items-center px-4 py-2 tab:py-4 tab:pt-4 laptop:px-8">
        <div
          className="text-lg font-semibold text-gray-title tab:text-xl laptop:py-0 laptop:text-2xl py-1.5"
          id="main-website-header-text"
        >
          <span className={`font-${language.slice(0, 2)}`}>{title}</span>
        </div>
      </div>
    </>
  );
};

export default MainContentHeading;
