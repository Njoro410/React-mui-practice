import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  Typography,
  styled,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import { Mail, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          BORU
        </Typography>
        <PublicIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="data:image/jpeg;base64,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"
            onClick={e=>setOpen(true)}
          />
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="data:image/jpeg;base64,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"
          />
          <Typography variant="span">Brian</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
