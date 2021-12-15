import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";

// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static" sx={{ bgcolor: "#fff", color: "#000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            E-COM
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <NavLink
                to="/"
                style={{ textDecoration: "none", color: "#1c313a" }}
                activeClassName="selected"
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </NavLink>

              <NavLink
                to="/page"
                style={{ textDecoration: "none", color: "#1c313a" }}
                activeClassName="selected"
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Page</Typography>
                </MenuItem>
              </NavLink>
              <NavLink
                to="/shop"
                style={{ textDecoration: "none", color: "#1c313a" }}
                activeClassName="selected"
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Shop</Typography>
                </MenuItem>
              </NavLink>
              <NavLink
                to="/products"
                style={{ textDecoration: "none", color: "#1c313a" }}
                activeClassName="selected"
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Products</Typography>
                </MenuItem>
              </NavLink>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", color: "#4b636e" },
            }}
          >
            E-COM
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <NavLink
              to="/"
              style={{ textDecoration: "none", color: "#1c313a" }}
              activeClassName="selected"
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#34515e", display: "block" }}
              >
                Home
              </Button>
            </NavLink>
            <NavLink
              to="/shop"
              style={{ textDecoration: "none", color: "#1c313a" }}
              activeClassName="selected"
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#34515e", display: "block" }}
              >
                Shop
              </Button>
            </NavLink>
            <NavLink
              to="/page"
              style={{ textDecoration: "none", color: "#1c313a" }}
              activeClassName="selected"
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#34515e", display: "block" }}
              >
                Page
              </Button>
            </NavLink>
            <NavLink
              to="/products"
              style={{ textDecoration: "none", color: "#1c313a" }}
              activeClassName="selected"
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#34515e", display: "block" }}
              >
                Products
              </Button>
            </NavLink>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <NavLink
                to="/profile"
                style={{ textDecoration: "none", color: "#1c313a" }}
                activeClassName="selected"
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
              </NavLink>

              <NavLink
                to="/account"
                style={{ textDecoration: "none", color: "#1c313a" }}
                activeClassName="selected"
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Account</Typography>
                </MenuItem>
              </NavLink>
              <NavLink
                to="/dashboard"
                style={{ textDecoration: "none", color: "#1c313a" }}
                activeClassName="selected"
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"> Dashboard</Typography>
                </MenuItem>
              </NavLink>
              <NavLink
                to="/login"
                style={{ textDecoration: "none", color: "#1c313a" }}
                activeClassName="selected"
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"> Login</Typography>
                </MenuItem>
              </NavLink>
              <NavLink
                to="/logout"
                style={{ textDecoration: "none", color: "#1c313a" }}
                activeClassName="selected"
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"> Logout</Typography>
                </MenuItem>
              </NavLink>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
