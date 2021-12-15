import React from "react";

import { Box, Typography, Grid, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        p: 4,
        color: "whitesmoke",
        bgcolor: "#0C0E30",
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
        <Grid xs={6} md={3}>
          <Typography variant="h3" gutterBottom component="div">
            E-COM
          </Typography>
          <Typography variant="body2" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur
            <br /> elit. Auctor libero id et, in gravida. Sit diam duis <br />{" "}
            mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at
            amet.
          </Typography>
        </Grid>
        <Grid xs={6} md={3}>
          <Typography variant="h5" gutterBottom component="div">
            About Us
          </Typography>
          <Typography variant="body2" gutterBottom>
            <Link sx={{ color: "white", textDecoration: "none" }}>Careers</Link>{" "}
            <br /> Our Stores <br />
            Our Cares <br />
            Terms & Conditions
            <br /> Privacy Policy
          </Typography>
        </Grid>
        <Grid xs={6} md={3}>
          <Typography variant="h5" gutterBottom component="div">
            Customer Care
          </Typography>
          <Typography variant="body2" gutterBottom>
            Help Center <br /> How to Buy <br /> Track Your Order <br />{" "}
            Corporate & Bulk Purchasing <br />
            Returns & Refunds
          </Typography>
        </Grid>
        <Grid xs={6} md={3}>
          <Typography variant="h5" gutterBottom component="div">
            Contact Us
          </Typography>
          <Typography variant="body2" gutterBottom>
            70 Washington Square South, New York,
            <br /> NY 10012, United States <br />
            <br /> Email: uilib.help@gmail.com <br /> Phone: +1 1123 456 780
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
