import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, CardActionArea, Chip, Typography } from "@mui/material";
import "./SliderContainer.css";
import { useNavigate } from "react-router-dom";

function NetflixSlider(children) {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box className="slidercontainer">
      <Slider {...settings}>
        {children.children.results.map((result) => (
          <Card
            className="cardstyle"
            key={result.id}
            onMouseOver={() => setHoveredItem(result.id)}
            onMouseLeave={() => setHoveredItem(null)}
            // sx={{ paddingRight: "30px" }}
          >
            <CardActionArea
              sx={{ width: "fit-content" }}
              onClick={() => {
                if (!result.media_type || result.media_type === "movie") {
                  navigate(`movie/${result.id}`, {
                    state: { backgroundLocation: { pathname: "" } },
                  });
                } else {
                  navigate(`tv/${result.id}`, {
                    state: { backgroundLocation: { pathname: "" } },
                  });
                }
              }}
            >
              <img
                key={result.id}
                width="100%"
                src={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
                alt={result.title}
              />
              <Typography variant="body2">
                {result.title || result.name}
              </Typography>
              {hoveredItem === result.id && (
                <Box>
                  <p className="slide-details" variant="caption">
                    {result.media_type
                      ? result.media_type.toUpperCase()
                      : "MOVIE"}
                  </p>
                </Box>
              )}
            </CardActionArea>
          </Card>
        ))}
      </Slider>
    </Box>
  );
}

export default NetflixSlider;
