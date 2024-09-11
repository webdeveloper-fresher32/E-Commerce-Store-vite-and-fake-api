import React, { useContext } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  IconButton,
  Grid,
} from "@mui/material";
import { CartContext } from "./CartProvider";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckoutIcon from "@mui/icons-material/Payment";

function Cart() {
  const {
    cart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <React.Fragment>
      <Box sx={{ padding: 4, marginTop: 5 }}>
        <Typography variant="h4" gutterBottom>
          <ShoppingCartIcon /> Your Cart
        </Typography>

        {cart.length === 0 ? (
          <Typography variant="h6">Your cart is empty</Typography>
        ) : (
          <Grid container spacing={2}>
            {cart.map((item) => (
              <Grid item xs={12} key={item.id}>
                <Card
                  sx={{ display: "flex", alignItems: "center", padding: 2 }}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                    />
                    <Box sx={{ marginLeft: 2 }}>
                      <Typography variant="h6">{item.title}</Typography>
                      <Typography variant="body2">
                        Price: ${item.price}
                      </Typography>
                      <Typography variant="body2">
                        Quantity: {item.quantity}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton
                      onClick={() => handleDecreaseQuantity(item)}
                      disabled={item.quantity === 1}
                      sx={{ color: "red" }}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography>{item.quantity}</Typography>
                    <IconButton
                      onClick={() => handleIncreaseQuantity(item)}
                      sx={{ color: "green" }}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                  <IconButton
                    onClick={() => removeFromCart(item)}
                    sx={{ color: "black" }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Card>
              </Grid>
            ))}
            <Grid item xs={12}>
              <CardContent sx={{ textAlign: "right" }}>
                <Typography variant="h6">
                  Total: ${totalPrice.toFixed(2)}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  startIcon={<CheckoutIcon />}
                >
                  Proceed to Checkout
                </Button>
              </CardContent>
            </Grid>
          </Grid>
        )}
      </Box>
    </React.Fragment>
  );
}

export default Cart;
