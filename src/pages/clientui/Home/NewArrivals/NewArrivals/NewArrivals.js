import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const NewArrivals = () => {
  const [flasDealProducts, setFlasDealProducts] = useState([]);

  useEffect(() => {
    fetch("./newarrivals.json")
      .then((res) => res.json())
      .then((data) => setFlasDealProducts(data));
  }, []);

  return (
    <Container
      sx={{
        marginBottom: "40px ",

        padding: "15px",
      }}
      fixed
    >
      <Box sx={{ flexGrow: 1 }}>
        {/* <Grid container spacing={4}>
          <Grid container item spacing={2}>
            {categorieItem.map((item) => (
              <Grid item xs={2}>
                <Item sx={{ p: 2 }}>{item}</Item>
              </Grid>
            ))}
          </Grid>
        </Grid> */}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {flasDealProducts.map((item, index) => (
            <Grid item xs={2} sm={4} md={2}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="194"
                  image={item.img}
                  alt="Paella dish"
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default NewArrivals;
