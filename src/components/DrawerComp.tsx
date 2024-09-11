import React from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const PAGES = [
  {
    label: "Products",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Cart",
    path: "/cart",
  },
];
function DrawerComp() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {PAGES.map((page, index) => (
            <ListItemButton key={index} onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItemText>
                  <Link to={page.path} style={{ textDecoration: "none" }}>
                    <Typography>{page.label}</Typography>
                  </Link>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpen(!open)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
}

export default DrawerComp;
