import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const categorieItem = [
  "Automobile",
  "Car",
  "Fashion",
  "Mobile",
  "Laptop",
  "Desktop",
  "Tablet",
  "Fashion",
  "Electronics",
  "Furniture",
  "Camera",
  "Electronics",
];

const TopCategories = () => {
  return (
    <Container
      sx={{
        marginBottom: "40px ",

        // background: "#f2f5f4",
        // position: "relative",
        // fontsize: "14px",
        // color: "rgb(94, 92, 92)",
        // // margin: "2px",
        padding: "25px",
      }}
      fixed
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid container item spacing={2}>
            {categorieItem.map((item) => (
              <Grid item xs={2}>
                <Item sx={{ p: 2 }}>{item}</Item>
              </Grid>
            ))}
          </Grid>
          {/* <Grid container item spacing={2}>
            <FormRow />
          </Grid> */}
          {/* <Grid container item spacing={2}>
            <FormRow />
          </Grid> */}
        </Grid>
      </Box>
    </Container>
  );
};

export default TopCategories;
