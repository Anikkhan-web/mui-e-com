import { Box, Grid } from "@mui/material";
import React from "react";

const Products = () => {
  return (
    <div>
      <h2>this is products Flash Deals</h2>
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Products;
