import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { Avatar, Alert } from 'flowbite-react';
import { FaTelegramPlane } from 'react-icons/fa';
import chatbot from '../assets/images/chatbot.png';
import HashLoader from 'react-spinners/HashLoader';
import ChatMessage from '../components/ChatMessage';
import { Box, Grid, TextField, Button, IconButton, Typography, InputAdornment, Toolbar, useTheme, useMediaQuery,  Modal, Backdrop, Fade } from '@mui/material';

function UserChat(props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const {
    chatLog, setChatLog,
    themeColor,
    responseReceived, setResponseReceived,
    error, setError,
    isLoading, setIsLoading,
    successMessage, setSuccessMessage,
    showInitialView, setShowInitialView,
    requestId, setRequestId
    } = props;

  const endOfMessagesRef = useRef(null);
  const [apiResponse, setApiResponse] = useState(null); // New state for storing API response
  const [appCd, setAppCd] = useState('Chat_Bot'); // User input for app_cd
  const [input, setInput] = useState('');
  const layoutWidth = isSmallScreen ? '100%' : isMediumScreen ? '80%' : '70%';
  const inactivityTimeoutRef = useRef(null); // Ref for the inactivity timeout
  const [sessionActive, setSessionActive] = useState(true); // State to track session activity
  const [openPopup, setOpenPopup] = useState(false); 
  // const INACTIVITY_TIME = 30 * 60 * 1000;
  const INACTIVITY_TIME = 1 * 60 * 1000; // 1 minute in milliseconds

  // Scroll to the bottom when a new message is added
  useLayoutEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatLog]);


    // Start or reset the inactivity timer
    const resetInactivityTimeout = () => {
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
  
      inactivityTimeoutRef.current = setTimeout(() => {
        handleSessionEnd(); // End session after 30 minutes of inactivity
      }, INACTIVITY_TIME);
    };

    // Handle session end due to inactivity
  const handleSessionEnd = () => {
    setSessionActive(false);
    setChatLog([...chatLog, { role: 'assistant', content: 'Session has ended due to inactivity.' }]);
    setOpenPopup(true); // Show the popup
  };

  // Update handleSubmit
 
  async function handleSubmit(e) {
    e.preventDefault();
    
    // Prevent empty messages
    if (!input.trim()) return;
    
    // Validate appCd and requestId
    if (!appCd.trim() || !requestId.trim()) {
      setError('Please provide valid app_cd and request_id.');
      return;
    }
  
    const newMessage = {
      role: 'user',
      content: input,
    };
    const newChatLog = [...chatLog, newMessage]; // Add user's message to chat log
    setChatLog(newChatLog);
    setInput(''); // Clear the input field
    setIsLoading(true); // Set loading state
    setError(''); // Clear any previous error
    setShowInitialView(false);
    resetInactivityTimeout(); // Reset the inactivity timer on user action
    try {
      // Dynamic API URL based on user inputs
      const response = await fetch(
        `http://10.126.192.122:8001/get_llm_response/?app_cd=${appCd}&request_id=${requestId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([newMessage]),
        }
      );
  
      // Check if response is okay
      if (!response.ok) {
        if (response.status >= 500) {
          throw new Error('Server error, please try again later.');
        } else if (response.status === 404) {
          throw new Error('API endpoint not found.');
        } else if (response.status === 400) {
          throw new Error('Bad request. Please check the input parameters.');
        } else {
          throw new Error('Network response was not ok');
        }
      }
  
      const data = await response.json();
      setApiResponse(data);
      
      // Handle different formats of modelReply
      let modelReply;
      if (typeof data.modelreply === 'string') {
        modelReply = data.modelreply; // If it's a string, use it directly
      } else if (typeof data.modelreply === 'object' && data.modelreply.NAME) {
        modelReply = Object.values(data.modelreply.NAME).join('\n'); // Convert object to a string
      } else {
        modelReply = 'No valid reply found.'; // Fallback if modelreply is neither
      }
  
      const botMessage = {
        role: 'assistant',
        content: modelReply,
      };
  
      setChatLog([...newChatLog, botMessage]); // Update chat log with assistant's message
  
    } catch (err) {
      // Enhanced error messaging
      setError(`Error: ${err.message || 'Error communicating with backend'}`);
      console.error(err);
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  }
  

  // Handle focus or input changes
  const handleInputFocusOrChange = () => {
    setShowInitialView(false);
    resetInactivityTimeout(); 
  };
 
   // Effect to handle session end when the user closes or navigates away
   useEffect(() => {
    resetInactivityTimeout();

    return () => {
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
    };
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: layoutWidth,
        flexDirection: 'column',
        margin: 'auto',
      }}
    >
      {showInitialView && (
        <>
          <div
            style={{
              width: '40px',
              height: 'auto',
              overflow: 'hidden',
              marginRight: 2,
            }}
          >
            <img
              src={chatbot}
              alt="Chatbot"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',  // Ensures the image fits within the container
              }}
            />
          </div>
          {/* <Avatar img={chatbot} altText="Chatbot" rounded sx={{ width: '40px !important', height: '40px !important' }} /> */}

          <Box
            component="p"
            sx={{
              marginTop: '10px',
              fontSize: '16.5px',
              fontWeight: 600,
              color: themeColor,
              textAlign: 'center',
              marginBottom: '19%',
            }}
          >
            Hello there, I am your Chat Assistant. How can I help you today?
          </Box>

        </>
      )}

      <Box
        sx={{
          flex: 1,
          width: '100%',
          overflowY: 'auto',
          maxHeight: '73vh',
          padding: '10px',
        }}
      >
        <ChatMessage chatLog={chatLog} />
        <div ref={endOfMessagesRef} />
        {isLoading && <HashLoader color="#1a3673" size={30} aria-label="Loading Spinner" data-testid="loader" />}
        {/* {responseReceived && <Feedback />} */}
        {successMessage && (
          <Alert color="success">
            <span className="font-medium">{successMessage}</span>
          </Alert>
        )}
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '100%',
          flexDirection: 'column'
        }}
      >
        <Grid container spacing={2} sx={{ width: '100%', maxWidth: '100%', position: 'fixed', bottom: '50px', left: '67%', transform: 'translateX(-50%)', width: '70%', marginLeft: '8px', flexDirection: 'column' }}>
          {/* Input Field */}
          <Grid item xs={12} sm={6}>
            <form onSubmit={handleSubmit} style={{ width: '100%', backgroundColor: '#fff', boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.1)' }}>
              <TextField
                fullWidth
                placeholder="What can I help you with..."
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  handleInputFocusOrChange(); // Ensure elements disappear when typing
                }}
                onFocus={handleInputFocusOrChange}
                inputProps={{ maxLength: 400 }}
                InputProps={{
                  sx: {
                    '& .MuiInputBase-input': {
                      padding: '12px',
                      fontSize: '13px',
                      fontWeight: 'bold',
                      color: themeColor,
                    },
                    '& .MuiInputAdornment-root button': {
                      color: themeColor,
                    },
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton type="submit">
                        <FaTelegramPlane className="h-6 w-6" color={themeColor} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </form>
          </Grid>
        </Grid>
      </Box>
      {/* Modal Popup for session ended */}
      <Modal
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openPopup}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 300,
              bgcolor: 'background.paper',
              borderRadius: '8px',
              boxShadow: 24,
              p: 4,
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" component="h2">
              Session Ended
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Your session has ended due to 30 minutes of inactivity.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}

export default UserChat;
