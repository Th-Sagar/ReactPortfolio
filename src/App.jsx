import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import LastBottom from "./components/last/LastBottom";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/projects/Project";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />

      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Project />
        <Resume />
        <Contact />
        <LastBottom />
      </div>
    </div>
  );
}

export default App;
