import React, { useContext } from "react";
import {
  alpha,
  AppBar,
  Badge,
  Button,
  InputBase,
  styled,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import DrawerComp from "./DrawerComp";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./CartProvider";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

const PAGES = [
  {
    label: "Products",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = React.useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  return (
    <React.Fragment>
      <AppBar sx={{ backgroundColor: "#063970" }}>
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <Typography sx={{ fontSize: "1.5rem" }}>
              Ecommerce-website
            </Typography>
          </Link>
          {isMatch ? (
            <DrawerComp />
          ) : (
            <>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Tabs
                textColor="inherit"
                value={activeTab}
                indicatorColor="secondary"
                onChange={(event, newValue) => setActiveTab(newValue)}
              >
                {PAGES.map((page, index) => (
                  <Tab
                    key={index}
                    label={page.label}
                    onClick={() => navigate(page.path)}
                  />
                ))}
              </Tabs>

              <Button onClick={() => navigate("/cart")} sx={{ color: "white" }}>
                <Badge badgeContent={cart.length} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </Button>

              <Button variant="outlined" sx={{ color: "white" }}>
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
