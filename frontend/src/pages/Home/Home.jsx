// Import components and libraries
import Container from "@mui/material/Container";
import ActionAreaCard from "../../sharedComponents/ActionAreaCard/ActionAreaCard";
import ResponsiveAppBar from "../../sharedComponents/Navbar/ResponsiveAppBar";
import Hero from "./components/Hero";

// Import dummy json data
import { marketingCampaigns } from "../../assets/dummyData/marketingCampaigns.json";

const Home = () => {
  // console.log(marketingCampaigns);
  return (
    <div style={{ backgroundColor: "#121212", height: "100vh" }}>
      <ResponsiveAppBar />
      <Hero />
      <Container
        sx={{
          padding: "20px",
          bgcolor: "background.default",
          display: "flex",
          justifyContent: "space-between",
          gap: 3,
          // alignItems: "center",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          flexWrap: { xs: "nowrap", sm: "wrap", md: "wrap" },
        }}
      >
        {marketingCampaigns.map((campaign) => (
          <ActionAreaCard key={campaign.id} campaign={campaign} />
        ))}
      </Container>
    </div>
  );
};

export default Home;
