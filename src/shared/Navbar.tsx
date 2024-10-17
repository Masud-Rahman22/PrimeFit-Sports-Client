import * as React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import "./Navbar.css";

const settings = [
  <ul className="flex flex-col items-center text-lg font-semibold mt-4">
  <li className="mb-2">
    <MenuItem component={NavLink} to="/login" key="login">
      Login
    </MenuItem>
  </li>
</ul>
];


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navlinks = (
    <ul
      className="flex gap-x-6 text-lg font-semibold"
      style={{
        listStyle: "none",
        padding: 0,
        marginTop: "15px",
        marginLeft: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#2b2b2b",
      }}
    >
      <li>
        <NavLink to="/" className="navlink">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-products" className="navlink">
          All Products
        </NavLink>
      </li>
      <li>
        <NavLink to="/manage-products" className="navlink">
          Manage Products
        </NavLink>
      </li>
      <li>
        <NavLink to="/cart" className="navlink">
          Cart
        </NavLink>
      </li>
      <li>
        <NavLink to="/aboutus" className="navlink">
          About Us
        </NavLink>
      </li>
    </ul>
  );

  const navlinksForMenuBar = (
    <ul
      className="flex flex-col justify-center items-center gap-2 text-lg font-semibold"
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#2b2b2b",
      }}
    >
      <li>
        <NavLink to="/" style={{ textDecoration: "none", color: "#2b2b2b" }}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-products"
          style={{ textDecoration: "none", color: "#2b2b2b" }}
        >
          All Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/manage-products"
          style={{ textDecoration: "none", color: "#2b2b2b" }}
        >
          Manage Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          style={{ textDecoration: "none", color: "#2b2b2b" }}
        >
          Cart
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutus"
          style={{ textDecoration: "none", color: "#2b2b2b" }}
        >
          About Us
        </NavLink>
      </li>
    </ul>
  );

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              height: "90px",
              mr: 2,
            }}
          >
            <img
              src="/src/assets/images/PRIME__2_-removebg-preview.png"
              alt="Logo"
              className="logo"
              style={{
                height: "100%",
                width: "auto",
                objectFit: "contain",
                transition: "transform 0.5s ease",
              }}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "#2b2b2b" }} />
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                {navlinksForMenuBar}
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
            {navlinks}
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center", color: "#2b2b2b" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
