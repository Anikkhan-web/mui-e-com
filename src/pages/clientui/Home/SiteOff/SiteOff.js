import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import image1 from "./Optimized-Screenshot_8.png";
import image2 from "./Screenshot_9.png";
import { Grid } from "@mui/material";

const SiteOff = () => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Box>
  );
};

export default SiteOff;
