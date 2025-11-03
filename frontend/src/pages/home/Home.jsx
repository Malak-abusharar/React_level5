import "./Home.css";
import React from "react";
import {
  Typography,
  Button,
  Stack,
  Box,
  CircularProgress,
  IconButton,
  Badge,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { useGetproductsByNameQuery } from "../../Redux/productsApi";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  descreaseQuantity,
  increaseQuantity,
} from "../../Redux/cartSlice";
import { Add, Remove, ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {},
}));
const Home = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  // @ts-ignore
  const { selectedProducts, selectedProductsID } = useSelector(
    // @ts-ignore
    (state) => state.carttt
  );
// data => all product
  const { data, error, isLoading } = useGetproductsByNameQuery("bulbasaur");
  console.log(data);
  const navigate = useNavigate();
  if (error) {
    return (
      <Box>
        <Typography>Error</Typography>
      </Box>
    );
  }
  if (isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
  const productQuantity = (itemAPI) => {
    const myProduct = selectedProducts.find((itemUser) => {
      return itemUser.id === itemAPI.id;
    });
    // return myProduct.quantity
    return myProduct ? myProduct.quantity : 0;
  };

  if (data) {
    return (
      <Stack
        direction={"row"}
        sx={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        {data.map((item, index) => {
          return (
            <Card
              key={item.id}
              className="card"
              sx={{ maxWidth: 277, mb: 6, mx: 2 }}
            >
              <CardMedia
                component="img"
                height="277"
                image={item.imageLink[0]}
                alt="Paella dish"
                onClick={() => {
                  navigate(`product-details/${item.id}`);
                }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions
                sx={{ justifyContent: "space-between" }}
                disableSpacing
              >
                {selectedProductsID.includes(item.id) ? (
                  <div
                    dir="rtl"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <IconButton
                      color="primary"
                      sx={{ ml: "10px" }}
                      onClick={() => {
                        dispatch(increaseQuantity(item));
                      }}
                    >
                      <Add fontSize="small" />
                    </IconButton>

                    <StyledBadge
                      badgeContent={productQuantity(item)}
                      color="primary"
                    />

                    <IconButton
                      color="primary"
                      sx={{ mr: "10px" }}
                      onClick={() => {
                        dispatch(descreaseQuantity(item));
                      }}
                    >
                      <Remove fontSize="small" />
                    </IconButton>
                  </div>
                ) : (
                  <Button
                    sx={{ textTransform: "capitalize", p: 1, lineHeight: 1.1 }}
                    variant="contained"
                    color="primary"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    <ShoppingCart sx={{fontSize:"18px", mr:1}} /> Add to cart
                  </Button>
                )}

                <Typography
                  mr={1}
                  variant="body1"
                  color={theme.palette.error.light}
                >
                  ${item.price}
                </Typography>
              </CardActions>
            </Card>
          );
        })}
      </Stack>
    );
  }
};

export default Home;
