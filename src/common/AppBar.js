import React, { useRef, useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  MenuItem,
  Container,
  Typography,
  Menu,
  useTheme,
  Drawer,
  Collapse,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/AppBar.css";
import { useTranslation } from "react-i18next";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import {
  getRoleBasedModules,
} from "../Utils.js";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  customSubMenu: {
    border: "0.5px solid #A2ABA6",
    minWidth: "130px !important",
    "& .MuiMenuItem-root": {
      minHeight: "25px",
      marginInline: "8px",
      borderRadius: "4px",
      paddingLeft: "10px",
    },
  },
});

function AppAppBar() {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const pages = getRoleBasedModules();
  const classes = useStyles();
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [anchorElMenuItem, setAnchorElMenuItem] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  // Refs for measuring
  const containerRef = useRef(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setExpandedMenu(null);
  };
  const onPageClick = (path, key) => {
    if (path === null) {
      navigate(`${window.contextPath}/${key}`);
    } else {
      navigate(path);
    }
  };

  const handleMenuClick = (path, key) => {
    handleCloseNavMenu();
    if (path === null) {
      navigate(`${window.contextPath}/${key}`);
    } else {
      navigate(path);
    }
  };

  const handleMenuOpen = (event, key) => {
    setAnchorElMenuItem(event.currentTarget);
    setOpenMenu(key);
  };

  const handleMenuClose = () => {
    setAnchorElMenuItem(null);
    setOpenMenu(null);
  };

  const handleMenuItemClick = (path) => {
    handleMenuClose();
    onPageClick(path, null);
  };

  const handleMenuExpand = (key) => {
    handleMenuClose();
    setExpandedMenu((prev) => (prev === key ? null : key)); // Toggle the expanded menu
  };

  const isParentSelected = (page) => {
    // Check if the current location matches any submenu item's path or the parent's path
    if (page.isMenu) {
      return page.menuItems.some((item) =>
        location.pathname.includes(item.path)
      );
    }
    return page.path !== null && location.pathname.includes(page.path);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 1)",
        color: "#000",
        boxShadow: "none",
      }}
    >
      <Container variant="tertiaryGreen" className="top-bottom-bar">
        <Toolbar
          disableGutters
          className="toolbarBottomNav"
          ref={containerRef}
        >
          <Box
            className="flex"
            alignItems="center"
            sx={{ objectFit: "contain" }}
          >
            <Box
              sx={{
                flexGrow: 1,
                alignItems: "center",
                display: { xs: "flex", md: "none" },
              }}
            >
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
              <Drawer
                anchor="left"
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  "& .MuiDrawer-paper": {
                    width: "232px",
                  },
                }}
              >
                <Box
                  className="flex flex-col h-full p-2"
                  role="presentation"
                  onClick={(e) => e.stopPropagation()} // Prevent Drawer from closing when clicking inside
                >
                  {pages?.map((page) => (
                    <React.Fragment key={page.title}>
                      <MenuItem
                        component="div"
                        data-testid="menu-item"
                        onClick={
                          page?.isMenu
                            ? () => handleMenuExpand(page.title)
                            : () => handleMenuClick(page.path, page.key)
                        }
                        className="py-3 px-2 flex items-center !justify-between"
                      >
                        <Typography
                          textAlign="center"
                          style={{
                            fontWeight: isParentSelected(page)
                              ? "700"
                              : "400",
                          }}
                          ml={"10px"}
                        >
                          {t(page.title)}
                        </Typography>
                        {page?.isMenu && (
                          <>
                            {expandedMenu === page.title ? (
                              <KeyboardArrowUp sx={{ marginLeft: 1 }} />
                            ) : (
                              <KeyboardArrowDown sx={{ marginLeft: 1 }} />
                            )}
                          </>
                        )}
                      </MenuItem>
                      {page?.isMenu && (
                        <Collapse
                          in={expandedMenu === page.title}
                          timeout="auto"
                          unmountOnExit
                          className="pl-3"
                        >
                          {page?.menuItems?.map((menuItem, index) => (
                            <MenuItem
                              key={`${menuItem.title}-${index}`}
                              onClick={() =>
                                handleMenuClick(menuItem.path, null)
                              }
                              className="px-3 py-2 flex items-center"
                            >
                              <Typography
                                textAlign="center"
                                style={{
                                  fontWeight:
                                    menuItem?.path !== null &&
                                      location.pathname.includes(menuItem?.path)
                                      ? "700"
                                      : "400",
                                }}
                                ml={"10px"}
                              >
                                {t(menuItem.title)}
                              </Typography>
                            </MenuItem>
                          ))}
                        </Collapse>
                      )}
                    </React.Fragment>
                  ))}
                </Box>
              </Drawer>
            </Box>
          </Box>
          <Box
            className="pr-2"
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "start",
                alignItems: "end",
              },
            }}
          >
            {pages?.map((page) => (
              <div className="button-style" key={page.title}>
                <Button
                  variant="textButton"
                  className="button-style text-nowrap"
                  href={page?.path === null ? page.key : null}
                  onClick={
                    page?.isMenu
                      ? (event) => handleMenuOpen(event, page.title)
                      : () => onPageClick(page?.path, page?.key)
                  }
                  sx={{
                    borderBottom: isParentSelected(page)
                      ? `solid 1px ${theme.palette.text.primary}`
                      : "none",
                    fontWeight: isParentSelected(page)
                      ? "700 !important"
                      : "400 !important",
                  }}
                >
                  {t(page?.title)}
                  {page?.isMenu && (
                    <>
                      {openMenu === page.title ? (
                        <KeyboardArrowUp sx={{ marginLeft: 1 }} />
                      ) : (
                        <KeyboardArrowDown sx={{ marginLeft: 1 }} />
                      )}
                    </>
                  )}
                </Button>
                {page?.isMenu && (
                  <Menu
                    anchorEl={anchorElMenuItem}
                    open={openMenu === page.title}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    classes={{ paper: classes.customSubMenu }}
                  >
                    {page?.menuItems?.map((menuItem, index) => (
                      <MenuItem
                        key={`${menuItem.title}-${index}`}
                        onClick={() => handleMenuItemClick(menuItem.path)}
                        sx={{
                          fontWeight:
                            menuItem?.path !== null &&
                              location.pathname.includes(menuItem?.path)
                              ? "700 !important"
                              : "400 !important",
                        }}
                      >
                        {t(menuItem.title)}
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </div>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppAppBar;
