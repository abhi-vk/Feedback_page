import React, { useState } from 'react';
import {
  Box, Typography, Avatar, Button, TextField, Modal, Fab,
  IconButton, Tooltip, Menu, Select, Snackbar, MenuItem
} from '@mui/material';
import { Feedback, Close, ThumbUp, Info, Edit, Chat, BugReport, Report, MailOutline, DesignServices, Settings, Visibility, ArrowBack, RocketLaunch } from '@mui/icons-material';
import Navbar from './Navbar';

const FeedbackPage = () => {
  const [open, setOpen] = useState(false);
  const [feedbackType, setFeedbackType] = useState('');
  const [feedback, setFeedback] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleFabClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = (type) => {
    setFeedbackType(type);
    setOpen(true);
    handleMenuClose();
  };

  const handleClose = () => setOpen(false);

  const handleFeedbackChange = (event) => setFeedback(event.target.value);

  const handleSubmitFeedback = () => {
    setOpen(false);
    setSnackbarOpen(true);
    setFeedback('');
  };

  const handleSnackbarClose = () => setSnackbarOpen(false);

  return (
    <Box sx={{ bgcolor: '#121212', color: '#fff', minHeight: '100vh' }}>
      <Navbar />
      <Box sx={{ maxWidth: 800, margin: 'auto', padding: { xs: 1, sm: 2 } }}>
        <Button sx={{ color: '#fff', marginBottom: 2 }} startIcon={<ArrowBack />}>
          Back to Questions
        </Button>
        <Box sx={{ padding: 2, backgroundColor: '#f5f5f5', borderRadius: 2, marginBottom: 2, color: '#000', position: 'relative' }}>
          <Box sx={{ display: 'flex', gap: 1, marginBottom: 1 }}>
            <Button variant="contained" startIcon={<DesignServices />} sx={{ backgroundColor: '#4A90E2', color: '#fff' }}>Design</Button>
            <Button variant="contained" startIcon={<Settings />} sx={{ backgroundColor: '#4A90E2', color: '#fff' }}>Technology</Button>
          </Box>
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            A travel startup wants Amazon to pre-install their personal travel agent bot on existing Amazon Echos. What is the value of the partnership to the travel startup?
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec viverra tincidunt? Amet ullamcorper velit tristique scelerisque donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices magna cursus se?
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
            <Visibility sx={{ marginRight: 0.5, color: '#000' }} />
            <Typography variant="body2" sx={{ marginRight: 1 }}>
              100 Views
            </Typography>
            <Tooltip title="How should you word your answer?">
              <Info sx={{ color: '#000' }} />
            </Tooltip>
          </Box>
          <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
            <RocketLaunch sx={{ fontSize: 40, color: '#4A90E2' }} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
          <Typography variant="h6">Answers (23)</Typography>
          <Select variant="outlined" defaultValue="Popular" size="small" sx={{ color: '#000', backgroundColor: '#fff' }}>
            <MenuItem value="Popular">Popular</MenuItem>
            <MenuItem value="Newest">Newest</MenuItem>
          </Select>
        </Box>
        <Box sx={{ padding: 2, backgroundColor: '#E6F0FF', borderRadius: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
            <Avatar sx={{ marginRight: 1 }}>N</Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body1" sx={{ color: '#000' }}>Neha Bhat (You)</Typography>
              <Typography variant="body2">Jun 27, 2023</Typography>
            </Box>
            <Button size="small" startIcon={<Edit />} sx={{ color: '#000' }}>Edit</Button>
          </Box>
          <Typography variant="body2" sx={{ color: '#000', marginBottom: 1 }}>
            Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum enim ornare feugi vitae. Eget proin aliquam blandit eget vitae erat fermentum lacus. Dignissim done mi vel fermentum. Id ultrices risus sit pel sit elit morbi. Mi sed mauris aenean odio egestas ullamcorper. Dignissim in vel fusce id. Sit blandit diam ridiculus ipsum interdum ut velit quam. Bibendum amet mi.... <span style={{ color: '#00f', cursor: 'pointer' }}>Show more</span>
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ color: '#00f' }}>
              <ThumbUp />
            </IconButton>
            <TextField
              variant="outlined"
              placeholder="Add a comment"
              size="small"
              sx={{ backgroundColor: '#fff', borderRadius: 1, flexGrow: 1, marginLeft: 1 }}
            />
            <Button variant="contained" color="primary" sx={{ marginLeft: 1 }}>Post</Button>
          </Box>
        </Box>
      </Box>

      <Fab
        color="primary"
        aria-label="feedback"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        onClick={handleFabClick}
      >
        <Feedback />
      </Fab>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{ mt: -6, ml: -2 }}
      >
        <MenuItem onClick={() => handleOpen('General Feedback')}>
          <Chat sx={{ mr: 1 }} /> General Feedback
        </MenuItem>
        <MenuItem onClick={() => handleOpen('Report a Bug')}>
          <BugReport sx={{ mr: 1 }} /> Report a Bug
        </MenuItem>
        <MenuItem onClick={() => handleOpen('Feature Request')}>
          <Report sx={{ mr: 1 }} /> Feature Request
        </MenuItem>
        <MenuItem onClick={() => handleOpen('Contact Support')}>
          <MailOutline sx={{ mr: 1 }} /> Contact Support
        </MenuItem>
      </Menu>

      <Modal open={open} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: { xs: '90%', sm: 400 }, bgcolor: 'background.paper', p: 4, borderRadius: 1 }}>
          <Typography variant="h6">{feedbackType}</Typography>
          <TextField
            fullWidth
            label="Write here..."
            margin="normal"
            value={feedback}
            onChange={handleFeedbackChange}
          />
          {feedbackType === 'Contact Support' && (
            <TextField
              fullWidth
              label="Enter your email to receive an update"
              margin="normal"
              type="email"
            />
          )}
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSubmitFeedback}>
            Submit
          </Button>
        </Box>
      </Modal>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Feedback submitted successfully!"
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleSnackbarClose}>
            <Close fontSize="small" />
          </IconButton>
        }
      />
    </Box>
  );
};

export default FeedbackPage;
