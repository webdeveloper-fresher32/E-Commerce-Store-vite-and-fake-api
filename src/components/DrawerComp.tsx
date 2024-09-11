import React from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const PAGES = ["Products", "Cart", "Categories", "About", "Logout"];
function DrawerComp() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {PAGES.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
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
