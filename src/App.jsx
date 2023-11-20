import Navbar from "./components/Navbar/Navbar";
import SecondaryNavbar from "./components/Navbar/SecondaryNavbar";
import HeroSection from "./components/HeroSection/HeroSection";

import "./App.css";

function App() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col justify-between">
        <Navbar />
        <SecondaryNavbar />
        <HeroSection />
      </div>
    </>
  );
}

export default App;
