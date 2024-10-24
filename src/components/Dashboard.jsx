import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Drawer,
  Box,
  Button as MuiButton,
  useMediaQuery,
  Button,
} from "@mui/material";
import { Avatar } from 'flowbite-react';
import { HiOutlinePencilAlt } from "react-icons/hi";
import elevance from "../assets/images/logo.png";
import { createTheme, ThemeProvider } from "@mui/material/styles"; // For dynamic theme changes
import UserChat from './UserChat';
import { v4 as uuidv4 } from 'uuid';

const drawerWidth = 180;

const Dashboard = () => {
  const isMobile = useMediaQuery("(max-width:950px)");
  // Lift the states up from UserChat
  const [chatLog, setChatLog] = useState([]); // Chat log state
  const [responseReceived, setResponseReceived] = useState(false); // Hide helpfulness prompt
  const [error, setError] = useState(''); // Error message state
  const [isLoading, setIsLoading] = useState(false); // Loading indicator
  const [successMessage, setSuccessMessage] = useState(''); // New state for success message
  const [themeColor, setThemeColor] = useState("#1a3673"); // Default theme color
  const [requestId, setRequestId] = useState(uuidv4());  
  // New state to control visibility of the initial view (avatar, prompts, categories)
  const [showInitialView, setShowInitialView] = useState(true);

  // Handle New Chat button click
  const handleNewChat = () => {
    setChatLog([]); // Reset chat log
    setResponseReceived(false);
    setError('');
    setIsLoading(false);
    setSuccessMessage('');
    setShowInitialView(true); // Show avatar, categories, etc.
    // setRequestId(uuidv4()); // Generate new unique request ID
    const newRequestId = uuidv4(); // Generate new unique request ID
    setRequestId(newRequestId);
    console.log('New Request ID generated:', newRequestId);
  };

  // Define the theme dynamically based on selected color
  const theme = createTheme({
    palette: {
      primary: {
        main: themeColor,
      },
      background: {
        default: themeColor,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", height: '100vh', flexDirection: 'column', overflow: 'hidden' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: themeColor,
            boxShadow: "-1px -4px 14px #000",
            height: '64px',
          }}
        >
          <Toolbar sx={{ justifyContent: isMobile ? "space-between" : "flex-start" }}>
            <div
      style={{
        width: '120px',       // Explicit width
        height: 'auto',      // Explicit height
        overflow: 'hidden',
        marginRight: 2,
      }}
    >
      <img
        src={elevance}
        alt="Elevance Health Logo"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',  // Ensures the image fits within the container
        }}
      />
    </div>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: isMobile ? "1rem" : "1.5rem",
                marginLeft: '-80px'
              }}
            >
              Chat Assistant
            </Typography>
          </Toolbar>
        </AppBar>

        {!isMobile && (
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
                backgroundColor: "#fff",
                boxShadow: '-1px -3px 10px grey',
              },
            }}
          >
            <Toolbar />
            <Box sx={{ position: "relative", height: "100%", padding: 2, textAlign: 'center' }}>
              <MuiButton
                variant="contained"
                size="large"
                sx={{
                  position: "absolute",
                  bottom: 16,
                  width: "90%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontWeight: "bold",
                  backgroundColor: themeColor,
                }}
                startIcon={<HiOutlinePencilAlt />}
                onClick={handleNewChat}
              >
                New Chat
              </MuiButton>
            </Box>
          </Drawer>
        )}

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "#fff",
            p: 3,
            height: "100vh",
            overflow: "hidden",
            paddingTop: '64px',
          }}
        >
          <Toolbar />

          {isMobile && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 2,
              }}
            >
              <MuiButton
                variant="contained"
                size="large"
                sx={{ fontWeight: "bold" }}
                startIcon={<HiOutlinePencilAlt />}
                onClick={handleNewChat}
              >
                New Chat
              </MuiButton>
            </Box>
          )}

          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: '100%' }}>
            <UserChat
              chatLog={chatLog}
              setChatLog={setChatLog}
              responseReceived={responseReceived}
              setResponseReceived={setResponseReceived}
              error={error}
              setError={setError}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              successMessage={successMessage}
              setSuccessMessage={setSuccessMessage}
              showInitialView={showInitialView}
              setShowInitialView={setShowInitialView}
              themeColor={themeColor}
              requestId={requestId}
              setRequestId={setRequestId}
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
