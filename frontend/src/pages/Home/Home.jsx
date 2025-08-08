// Import components and libraries
import ActionAreaCard from "../../sharedComponents/ActionAreaCard/ActionAreaCard";
import ResponsiveAppBar from "../../sharedComponents/Navbar/ResponsiveAppBar";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Hero />
      <ActionAreaCard />
    </div>
  );
};

export default Home;
