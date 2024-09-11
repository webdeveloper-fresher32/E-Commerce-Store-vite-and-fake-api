import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";

const About: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: "80px" }}>
      <Paper elevation={3} sx={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
        <Typography variant="h4" gutterBottom align="center">
          About Our E-commerce Website
        </Typography>
        <Box sx={{ marginBottom: "1.5rem" }}>
          <Typography variant="body1" gutterBottom>
            Welcome to our online store! We are dedicated to providing the best
            shopping experience for our customers by offering a wide range of
            quality products, seamless checkout, and fast delivery. Whether
            you're looking for electronics, fashion, home appliances, or
            accessories, we've got you covered!
          </Typography>
        </Box>

        <Box sx={{ marginBottom: "1.5rem" }}>
          <Typography variant="h6" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1">
            Our mission is to bring convenience to your shopping experience by
            providing a vast selection of products at competitive prices. We aim
            to make shopping online easy and enjoyable, from the moment you
            browse our store to the time your order is delivered.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: "1.5rem" }}>
          <Typography variant="h6" gutterBottom>
            Why Choose Us?
          </Typography>
          <Typography variant="body1">
            - Wide variety of products across different categories
            <br />
            - Secure and fast checkout process
            <br />
            - Free shipping on orders over $50
            <br />- 24/7 customer support to assist you with any queries
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            Our Vision
          </Typography>
          <Typography variant="body1">
            We envision a future where shopping online is not just about
            convenience, but also about creating meaningful connections with
            brands and products. We strive to continuously enhance the customer
            experience and to be the go-to online store for all your needs.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default About;
