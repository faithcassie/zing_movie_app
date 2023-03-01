import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TextTruncate from "react-text-truncate";

function MovieCard({ title, overview, poster }) {
  return (
    <Card
      sx={{
        position: "relative",
        maxWidth: 300,
        paddingBottom: "10px",
        marginTop: "2rem",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={`https://image.tmdb.org/t/p/original${poster}`}
        alt={title}
      />
      <CardContent sx={{ height: "200px" }}>
        <Typography variant="h6" component="div" sx={{ marginY: "15px" }}>
          {title}
        </Typography>
        <Typography variant="body2">
          <TextTruncate
            line={3}
            element="Typoraphy"
            truncateText="…"
            text={overview}
          />
        </Typography>
      </CardContent>
      <CardActions sx={{ position: "relative", bottom: 0 }}>
        <Link className="link" to="/movie/:id" component={<MovieDetails />}>
          Details
        </Link>
        <IconButton aria-label="add favorite">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default MovieCard;
