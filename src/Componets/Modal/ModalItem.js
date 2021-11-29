import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField, Button } from '@mui/material';
import emailjs from 'emailjs-com'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



const ModalItem = ({ open, handleClose }) => {
  const sentEmail = e => {

    emailjs.sendForm("service_zsjryko", "template_xz3sknt", e.target, "user_i4shzSLwvJOusOVCZwUbV")
      .then(res => {
        console.log(res);
      }).catch(err => console.log(err));

    alert("submiting succesfullyu")
    handleClose();
    e.preventDefault();


  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Get in Touch
        </Typography>
        <form onSubmit={sentEmail}>

          <TextField
            sx={{ width: '100%', marginTop: "5px" }}
            id="standard-basic"
            label="Your Name"
            name='name'
            variant="standard" />

          <TextField
            sx={{ width: '100%', marginTop: "5px" }}
            id="standard-basic"
            label="Your Email"
            name="user-email"
            variant="standard" />

          <TextField
            sx={{ width: '100%', marginTop: "5px" }}
            id="standard-basic"
            name="massage"
            label="Your Massage"
            variant="standard" />

          <Button
            sx={{ marginTop: "5px" }}
            type="submit"
            variant="contained">Submit</Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ModalItem;