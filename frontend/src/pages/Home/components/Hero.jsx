import { Box, Container, Typography, Button, styled, TextField, Stack } from "@mui/material";
import TrainIcon from "@mui/icons-material/Train";

// Import css module
import styles from "./Hero.module.css";

// Define a styled component for the Hero section for easy customization
const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "500px",
  padding: theme.spacing(4, 2), // Smaller padding for mobile
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(8, 2), // Larger padding for bigger screens
  },
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
    backgroundImage: "url('/images/hero.png') ", // Gradient overlay
    backgroundSize: "cover", // Makes it fill the box
    backgroundPosition: "center", // Centers the image
    backgroundRepeat: "no-repeat", // Prevents tiling
    opacity: 0.5,
    zIndex: 0, // Places it behind the content
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
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
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
  width: "100%", // Full width on mobile
  [theme.breakpoints.up("sm")]: {
    width: "auto", // Auto on larger screens
  },
  "&:hover": {
    backgroundColor: "#fdd835",
    transform: "scale(1.05)",
    transition: "transform 0.2s ease-in-out",
  },
}));

// Train Animation
const AnimatedTrain = styled(TrainIcon)(({ theme }) => ({
  fontSize: "4rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem", // Smaller on mobile
  },
  color: "#f9a825",
  position: "absolute",
  bottom: "15px",
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
  // console.log(styles);
  return (
    <HeroSection>
      <ContentContainer maxWidth="lg" sx={{ textAlign: "left" }}>
        {/* Main Hero Title */}
        <Title variant="h2" component="h1">
          Code the noise. <br />
          <span style={{ color: "#f9a825" }}>Own the name.</span>
        </Title>
        {/* Search bar & Button */}
        <Stack
          sx={{
            marginTop: "100px",
            maxWidth: "800px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
        >
          <TextField
            sx={{
              flexGrow: 1,
              border: "1px solid #f9a825",
              borderRadius: "4px",
              backgroundColor: "#ffffff73",
              width: { xs: "100%", sm: "auto" }, // Full width on mobile
            }}
            id={styles.searchInput}
            type="search"
          />
          <CtaButton id={styles.searchButton} variant="contained">
            Scavenge
          </CtaButton>
        </Stack>
      </ContentContainer>

      <AnimatedTrain />
    </HeroSection>
  );
};

export default Hero;
