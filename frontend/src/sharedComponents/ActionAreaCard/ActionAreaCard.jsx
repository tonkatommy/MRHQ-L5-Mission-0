import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

// Import styles
import styles from "./ActionAreaCard.module.css";

// This component renders a card with an image, title, and description.
// It uses Material-UI components for styling and layout.
const ActionAreaCard = ({ campaign: { image, title, description } }) => {
  return (
    <Card sx={{ maxWidth: { xs: "100%", sm: "47%", md: "31%", lg: "23%" } }}>
      <CardActionArea onClick={() => console.log("Card clicked!")}>
        <CardMedia
          component="img"
          height="140"
          image={image || "/static/images/cards/contemplative-reptile.jpg"}
          alt={title || "Card image"}
        />
        <CardContent>
          <Typography className={styles.title} gutterBottom variant="h5" component="div">
            {title || "Default Title"}
          </Typography>
          <Typography
            className={styles.description}
            variant="body2"
            sx={{ color: "text.secondary" }}
          >
            {description || "Default Description"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActionAreaCard;
