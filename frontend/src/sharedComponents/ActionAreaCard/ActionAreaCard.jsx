import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

// This component renders a card with an image, title, and description.
// It uses Material-UI components for styling and layout.
const ActionAreaCard = ({ campaign: { image, title, description } }) => {
  return (
    <Card sx={{ width: "100%", maxWidth: 345 }}>
      <CardActionArea onClick={() => console.log("Card clicked!")}>
        <CardMedia
          component="img"
          height="140"
          image={image ? image : "/static/images/cards/contemplative-reptile.jpg"}
          alt={title ? title : "Card image"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title ? title : "Default Title"}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description ? description : "Default Description"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActionAreaCard;
