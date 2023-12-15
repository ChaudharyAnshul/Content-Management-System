import *  as React  from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import PersonIcon from "@mui/icons-material/Person";
import { mainListItems, secondaryListItems } from "./listItems";

import { clearDataFromLocalStorage } from "../../util/cache";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { cards } from "../../json/sampleData";
import CourseCard from "../../components/CourseCard";
import { Grid } from "@mui/material";
import { useEffect } from 'react';
import "./dashboard.js";
import { getQuiz } from "../../request/courseRequest1.js";
import { retrieveDataFromLocalStorage } from "../../util/cache";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const defaultTheme = createTheme();

export const Dashboard = () => {
  const navigate = useNavigate();

  const { auth: user, setAuth } = useAuth();
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [card, setCard] = React.useState();
  const [isProfessor, setisProfessor] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const a = await getQuiz();
      const arr = [];
      a.map((c) =>{
        if(isCurrentUser(c)){
          arr.push(c)
        }
      setCard(arr);
      });
    };
    fetchData();
    const auth = retrieveDataFromLocalStorage("UserAuth");
    if (auth.userRole === "PROFESSOR"){
      setisProfessor(true);
    }
  }, [card]);

  const handleLogout = () => {
    clearDataFromLocalStorage();
    setAuth({});
    navigate("/login");
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const isCurrentUser = (obj) =>{
    if(isProfessor){
      if(obj.professor.email === user.email){
        return true
      }
    } else{
      let temp = false;
      obj.students.map( (student) =>{
        if(student.email === user.email){
          temp = true;
          return temp;
        }
      });
      return temp;
    }
  };


  const handleClose = () => {
    setAnchorEl(null);
  };
  if (card !== undefined){
    return (
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: "flex"}}>
          <CssBaseline />
          <AppBar position="absolute">
            <Toolbar
              sx={{
                pr: "24px", // keep right padding when drawer closed
              }}
            >

              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Content Management System
              </Typography>

              {user && (
                <Typography variant="body1" sx={{ marginRight: "8px" }}>
                  Welcome, {user.firstName}!
                </Typography>
              )}
              <IconButton
                edge="end"
                color="inherit"
                aria-label="user account"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <PersonIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {/* Dropdown menu options */}
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>

          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
              padding:"10vw"
            }}
          >
            <Toolbar />
            <Grid container spacing={2} className="grid-container">
              {card.map((card) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={4}
                  className="grid-item"
                >
                  <CourseCard card={card} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }

};
