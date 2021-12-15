import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/system";
import { Container, Grid } from "@mui/material";
import "./Categories.css";
import { useRef } from "react";
// Import Swiper React components

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
import { NavLink } from "react-router-dom";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Categories = () => {
  const [flasDealProducts, setFlasDealProducts] = useState([]);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    fetch("./last.json")
      .then((res) => res.json())
      .then((data) => setFlasDealProducts(data));
  }, []);

  return (
    <Container
      fixed
      sx={{
        marginBottom: "40px ",

        background: "#f2f5f4",
        position: "relative",
        fontsize: "14px",
        color: "rgb(94, 92, 92)",
        // marginbottom: "-22px",
        padding: "10px",
      }}
    >
      <Box
        sx={{
          fontFamily: "Raleway",
          display: "flex",

          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" gutterBottom component="div">
          Top Categories
        </Typography>
      </Box>
      <Box
        sx={{
          fontFamily: "Raleway",
          display: "flex",
          marginTop: "-30px",
          justifyContent: "flex-end",
        }}
      >
        <Typography variant="h6" gutterBottom component="div">
          <NavLink
            to="/products"
            style={{
              textDecoration: "none",
              color: "#1f75fe",
              bgcolor: "#fff",
            }}
            activeClassName="selected"
          >
            viewall—
          </NavLink>
        </Typography>
      </Box>

      {/* <Grid container spacing={2}> */}
      <Swiper
        // slidesPerView={4}
        paddingLeft={"40px"}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
        p={2}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
      >
        {/* <Grid
              container
              spacing={{ xs: 2 }}
              columns={{ xs: 4, sm: 4, md: 4 }}
            > */}

        {flasDealProducts.map((flasDealProduct) => (
          <Box
            md={{
              display: "grid",
              gridColumn: "3",
              columns: { xs: 12, sm: 6, md: 4 },

              // padding: "10px",
              m: 1,
              // width: "100%",
              bgcolor: "background.paper",
            }}
          >
            <SwiperSlide>
              <Grid
                // container
                // spacing={{ xs: 2 }}
                columns={{ xs: 12, sm: 6, md: 4 }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    image={flasDealProduct.img}
                    alt="green iguana"
                  />
                </Card>
              </Grid>
            </SwiperSlide>
          </Box>
        ))}

        {/* </Grid> */}

        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>
      {/* </Grid> */}
    </Container>
  );
};

export default Categories;
