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

// Main title text
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

// Highlighted text
const Highlight = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main, // Vibrant blue for emphasis
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  maxWidth: "600px",
  margin: "0 auto",
  color: "#e0e0e0", // Lighter text for contrast
}));

const SearchButton = styled(Button)(({ theme }) => ({
  // marginTop: theme.spacing(4),
  padding: theme.spacing(1.5, 4),
  fontSize: "1rem",
  fontWeight: "bold",
  color: "#ffffff",
  backgroundColor: theme.palette.primary, // Vibrant blue for the call-to-action
  border: "2px solid",
  borderColor: theme.palette.primary.dark,
  width: "100%", // Full width on mobile
  [theme.breakpoints.up("sm")]: {
    width: "auto", // Auto on larger screens
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    transform: "scale(1.05)",
    transition: "transform 0.2s ease-in-out",
  },
}));

// Train Animation
// const AnimatedTrain = styled(TrainIcon)(({ theme }) => ({
//   fontSize: "4rem",
//   [theme.breakpoints.down("sm")]: {
//     fontSize: "2.5rem", // Smaller on mobile
//   },
//   color: theme.palette.primary.main,
//   position: "absolute",
//   bottom: "15px",
//   left: "-50px",
//   animation: "moveTrain 10s linear infinite",
//   "@keyframes moveTrain": {
//     "0%": {
//       transform: "translateX(0vw)",
//     },
//     "100%": {
//       transform: "translateX(110vw)",
//     },
//   },
// }));

// This SVG filter definition only needs to be included ONCE in your app
const NeonGlowDefs = () => (
  <svg width="0" height="0" style={{ position: "absolute" }}>
    <defs>
      <filter id="tronTrainGlow" x="-50%" y="-50%" width="200%" height="200%">
        {/* <!-- Bright blue core --> */}
        <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#00f0ff" floodOpacity="1" />
        {/* <!-- Cyan halo --> */}
        <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#00d4ff" floodOpacity="0.8" />
        {/* <!-- Purple outer glow --> */}
        <feDropShadow dx="0" dy="0" stdDeviation="9" floodColor="#8a2be2" floodOpacity="0.6" />
        {/* <!-- Magenta ambient glow --> */}
        <feDropShadow dx="0" dy="0" stdDeviation="14" floodColor="#ff00ff" floodOpacity="0.3" />
      </filter>
    </defs>
  </svg>
);

const GhostTrain = styled(TrainIcon, {
  shouldForwardProp: (prop) => !["delay", "blur", "opacity"].includes(prop),
})(({ delay, blur, opacity }) => ({
  fontSize: "4rem",
  position: "absolute",
  bottom: "15px",
  left: "-50px",
  animation: `moveTrain 10s linear infinite`,
  animationDelay: delay,
  opacity,
  color: "#00f0ff",
  filter: `url(#tronTrainGlow) ${blur ? `blur(${blur}px)` : ""}`,
  transform: "translateZ(0)",

  "@keyframes moveTrain": {
    "0%": { transform: "translateX(0vw)" },
    "100%": { transform: "translateX(110vw)" },
  },
}));

const AnimatedTrain = () => {
  return (
    <>
      <NeonGlowDefs />
      {/* Main train */}
      <GhostTrain delay="0s" blur={0} opacity={1} />
      {/* Ghost trails */}
      <GhostTrain delay="0.4s" blur={2} opacity={0.6} />
      <GhostTrain delay="0.8s" blur={4} opacity={0.4} />
      <GhostTrain delay="1.2s" blur={6} opacity={0.2} />
    </>
  );
};

// Search text field
const SearchInput = styled(TextField)(({ theme }) => ({
  flexGrow: 1,
  border: "1px solid",
  borderColor: theme.palette.primary.main,
  borderRadius: "4px",
  backgroundColor: "#ffffff73",
  width: { xs: "100%", sm: "auto" }, // Full width on mobile
  cursor: "url('/icons/cursor.png'), pointer",
}));

const Hero = () => {
  // console.log(styles);
  return (
    <HeroSection>
      <ContentContainer maxWidth="lg" sx={{ textAlign: "left" }}>
        {/* Main Hero Title */}
        <Title variant="h2" component="h1">
          Code the noise. <br />
          <Highlight>Own the name.</Highlight>
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
          {/* Custom search input */}
          <SearchInput id={styles.searchInput} type="search" />
          {/* Custom search button */}
          <SearchButton id={styles.searchButton} variant="contained">
            Scavenge
          </SearchButton>
        </Stack>
      </ContentContainer>

      <AnimatedTrain id={styles.trainIcon} />
    </HeroSection>
  );
};

export default Hero;
