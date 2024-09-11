import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import ProductsInterface from "./productsInterface";
import {
  Box,
  Button,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "./CartProvider";
import Popup from "./Popup";

const Products = () => {
  const { addToCart } = React.useContext(CartContext);
  const [products, setProducts] = React.useState<ProductsInterface[]>([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product: ProductsInterface) => {
    addToCart(product);
    setPopupMessage(`Product added to cart`);
    setPopupOpen(true);
    setTimeout(() => {
      setPopupOpen(false);
    }, 3000);
  };

  const descriptionThreshold = 100;

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, padding: 2, marginTop: "50px" }}>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Price : </strong> ${product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Description : </strong> {product.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                {product.description.length > descriptionThreshold ? (
                  <Box sx={{ flexGrow: 1 }}></Box>
                ) : null}

                <Box
                  sx={{ display: "flex", justifyContent: "center", padding: 2 }}
                >
                  <Button
                    onClick={() => handleAddToCart(product)}
                    variant="contained"
                    color="primary"
                    sx={{
                      mt: 2,
                      ":hover": { backgroundColor: "blue", color: "white" },
                    }}
                  >
                    Add to Cart <ShoppingCartIcon sx={{ ml: 1 }} />
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Popup
        open={popupOpen}
        message={popupMessage}
        onClose={() => setPopupOpen(false)}
      />
    </React.Fragment>
  );
};

export default Products;
