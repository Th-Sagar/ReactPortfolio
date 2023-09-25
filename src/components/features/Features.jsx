import { FaBars, FaGlobe, FaMobile } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import Title from "../layouts/Title";
import Card from "./Card";
import { SiAntdesign, SiProgress } from "react-icons/si";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20  border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />

      <div className="grid grid-cols-3 gap-20">
        <Card
          title="Business Strategy"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ea porro laudantium qui reiciendis deleniti? "
          icon={<FaBars />}
        />
        <Card
          title="App Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ea porro laudantium qui reiciendis deleniti? "
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimization"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ea porro laudantium qui reiciendis deleniti? "
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ea porro laudantium qui reiciendis deleniti? "
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ea porro laudantium qui reiciendis deleniti? "
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ea porro laudantium qui reiciendis deleniti? "
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features