// Import components and libraries
import Container from "@mui/material/Container";
import ActionAreaCard from "../../sharedComponents/ActionAreaCard/ActionAreaCard";
import ResponsiveAppBar from "../../sharedComponents/Navbar/ResponsiveAppBar";
import Hero from "./components/Hero";

// import css module
import styles from "./Home.module.css";

// Import dummy json data
import { marketingCampaigns } from "../../assets/dummyData/marketingCampaigns.json";

const Home = () => {
  // console.log(marketingCampaigns);
  return (
    <div style={{ backgroundColor: "#121212", height: "100vh" }}>
      {/* Place the NavBar at the top */}
      <ResponsiveAppBar />
      {/* Place the Hero section below the NavBar */}
      <Hero />
      {/* Place the marketing campaigns container below the Hero section */}
      <Container
        sx={{
          padding: "20px",
          bgcolor: "background.default",
          display: "flex",
          justifyContent: "center",
          gap: 3,
          flexDirection: { xs: "column", sm: "row", md: "row" },
          flexWrap: { xs: "nowrap", sm: "wrap", md: "wrap" },
        }}
      >
        {/* Marketing Campaign Cards */}
        {marketingCampaigns.map((campaign) => (
          <ActionAreaCard key={campaign.id} campaign={campaign} />
        ))}
      </Container>
    </div>
  );
};

export default Home;
