import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Fab, Fade, Slide, useScrollTrigger } from "@mui/material";
import logo from "../assests/logo.ico";
const drawerWidth = 240;

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 30,
          transform: "1s ease-in-out",
          scrollBehavior: "smooth",
        }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Navbar = function DrawerAppBar(props) {
  const [navItems] = React.useState([
    {
      name: "Home",
      to: "/",
    },
  ]);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h4">
        <img src={logo} alt="logo" />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link
            to={item.to}
            smooth={true}
            duration={300}
            key={item.name}
            className="cursor-pointer hover:text-gray-700 transition "
          >
            <button
              key={item.name}
              className="p-2"
              initial={{ translateX: -50, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <span>{item.name}</span>
            </button>
          </Link>
        ))}
      </List>
      <List>
        <Link
          to="/login"
          smooth={true}
          duration={300}
          className="cursor-pointer hover:text-stone-700 transition "
        >
          <button className="bg-white px-3 py-2 rounded-xl hover:bg-black hover:text-white ease-in duration-200">
            <span className="p-4">Login</span>
          </button>
        </Link>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <HideOnScroll {...props}>
          <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-10">
            <Toolbar className="p-4 text-stone-900 flex justify-between items-center font-bold">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <div
                className="text-2xl inline-block text-center"
                style={{ width: "100%" }}
              >
                <Link to="/" className="cursor-pointer flex justify-center align-center">
                  {/* <span style={{position : 'relative' , left: '10px' }}> */}
                  <img src={logo} alt="logo" className="w-16 h-16 text-center rounded-xl" />
                </Link>
              </div>
              <div className="text-lg flex gap-8 text-md float-right mobile:hidden">
                {navItems.map((item) => {
                  return (
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={300}
                      key={item.name}
                      className="cursor-pointer hover:text-gray-700 transition "
                    >
                      <motion.button
                        key={item.name}
                        className="p-2"
                        initial={{ translateX: -50, opacity: 0 }}
                        animate={{ translateX: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                      >
                        <motion.span className="navItemsAnimation">
                          {item.name}
                        </motion.span>
                      </motion.button>
                    </Link>
                  );
                })}
                <Link
                  to="/login"
                  smooth={true}
                  duration={300}
                  className="cursor-pointer hover:text-stone-700 transition "
                >
                  <motion.button
                    className="bg-white px-3 py-2 rounded-xl hover:bg-black hover:text-white ease-in duration-200"
                    initial={{ translateX: -50, opacity: 0 }}
                    animate={{ translateX: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <motion.span className="p-4">Login</motion.span>
                  </motion.button>
                </Link>
              </div>
            </Toolbar>
          </nav>
        </HideOnScroll>
        {/* id to scroll up from button */}
        <Typography id="back-to-top-anchor" />
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
};

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
