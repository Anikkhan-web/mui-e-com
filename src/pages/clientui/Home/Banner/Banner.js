import React from "react";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import banner from ".//Screenshot_6.png";

const Banner = () => {
  return (
    <Box>
      <Grid item xs={12} md={12}>
        <img style={{ width: "100%", height: "400px" }} src={banner} alt="" />
      </Grid>
    </Box>
  );
};

export default Banner;
