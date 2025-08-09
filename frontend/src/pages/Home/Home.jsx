// Import components and libraries
import { Container, Stack } from "@mui/material";
import ActionAreaCard from "../../sharedComponents/ActionAreaCard/ActionAreaCard";
import ResponsiveAppBar from "../../sharedComponents/Navbar/ResponsiveAppBar";
import Hero from "./components/Hero";

// Import dummy json data
import { marketingCampaigns } from "../../assets/dummyData/marketingCampaigns.json";

const Home = () => {
  console.log(marketingCampaigns);
  return (
    <div>
      <ResponsiveAppBar />
      <Hero />
      <Container maxWidth="lg">
        <Stack sx={{ margin: "3rem auto", justifyContent: "center" }} direction="row" spacing={2}>
          {marketingCampaigns.map((campaign) => (
            <ActionAreaCard key={campaign.id} campaign={campaign} />
          ))}
        </Stack>
      </Container>
    </div>
  );
};

export default Home;
