import { Box, Container, Typography, Button, styled, TextField, Stack } from "@mui/material";
import TrainIcon from "@mui/icons-material/Train";

// Define a styled component for the Hero section for easy customization
const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "500px",
  padding: theme.spacing(8, 2),
  backgroundColor: "#1a1a2e", // A deep, dark blue for a techy feel
  color: "#ffffff",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: "linear-gradient(45deg, #16222A 30%, #3A6073 90%)", // Gradient overlay
    opacity: 0.5,
  },
}));

const ContentContainer = styled(Container)({
  position: "relative",
  zIndex: 1,
  textAlign: "center",
  // maxWidth: "80vw",
});

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
  letterSpacing: "1.5px",
  textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  maxWidth: "600px",
  margin: "0 auto",
  color: "#e0e0e0", // Lighter text for contrast
}));

const CtaButton = styled(Button)(({ theme }) => ({
  // marginTop: theme.spacing(4),
  padding: theme.spacing(1.5, 4),
  fontSize: "1rem",
  fontWeight: "bold",
  color: "#ffffff",
  backgroundColor: "#f9a825", // Vibrant yellow for the call-to-action
  border: "2px solid #fbc02d",
  "&:hover": {
    backgroundColor: "#fdd835",
    transform: "scale(1.05)",
    transition: "transform 0.2s ease-in-out",
  },
}));

const AnimatedTrain = styled(TrainIcon)(({ theme }) => ({
  fontSize: "8rem",
  color: "#f9a825",
  position: "absolute",
  bottom: "10%",
  left: "-100px",
  animation: "moveTrain 20s linear infinite",
  "@keyframes moveTrain": {
    "0%": {
      transform: "translateX(0vw)",
    },
    "100%": {
      transform: "translateX(110vw)",
    },
  },
}));

const Hero = () => {
  return (
    <HeroSection>
      <ContentContainer sx={{ textAlign: "left", maxWidth: "80vw" }}>
        <Title variant="h2" component="h1">
          Code the noise.
          <br />
          <span style={{ color: "#f9a825" }}>Build the future.</span>
          <br />
          Own the name.
        </Title>
        {/* <Subtitle sx={{ margin: "0" }} variant="h5" component="p">
          NexRail Marketing is a covert branding agency embedded in the digital underworld of
          tomorrow's cities.
        </Subtitle> */}
        <Stack
          sx={{ marginTop: "100px", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <TextField
            sx={{
              flexGrow: 1,
              border: "1px solid #f9a825",
              borderRadius: "4px",
              backgroundColor: "#ffffff",
            }}
            id="outlined-search"
            type="search"
          />
          <CtaButton variant="contained">Search the Tech</CtaButton>
        </Stack>
      </ContentContainer>
      <AnimatedTrain />
    </HeroSection>
  );
};

export default Hero;
