import {Add as AddIcon, AddLocation, AttachFile, DateRange, EmojiEmotions, VideoCameraBack }from "@mui/icons-material"
import { Avatar, Box, Button, ButtonGroup, Fab,  Modal,  Stack,  TextField,  Tooltip, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import myprofileavatar from '../assets/avatars/ahmer-green.jpg'

const StyledModal=styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
});
const UserBox=styled(Box)({
display:"flex",
alignItems:"center",
gap:"10px",
marginBottom:"20px"
})


export const Add = () => {
  const [open,setOpen]=useState(false);
  return (
    <>
    <Tooltip onClick={e=>setOpen(true)} title="Delete" sx={{position:"fixed",bottom:20,left:{xs:"calc(50% - 25px)",md:30}}}>
  <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
  </Tooltip>
  <StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} bgcolor={"background.default"} color={"text.primary"} height={280}  p={3} borderRadius={4}>
    <Typography variant="h6" color="grey" textAlign="center">Post something </Typography>
    <UserBox>
    <Avatar sx={{width:30,height:30}} src={myprofileavatar}/>
    <Typography fontWeight={500} variant="span">Muhammad Ahmer</Typography>
   
    </UserBox>
    <TextField
          sx={{width:"100%"}}
          id="standard-multiline-static"
          
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />
        <Stack direction="row" gap={2} mt={2} mb={2}>
          <EmojiEmotions sx={{color:"orange"}}/>
          <VideoCameraBack sx={{color:"purple"}}/>
          <AttachFile sx={{color:"blue"}}/>
          <AddLocation sx={{color:"red"}}/>
          
        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
  <Button>Post</Button>
  <Button sx={{width:"100px"}}><DateRange/></Button>
  
</ButtonGroup>
  </Box>
</StyledModal>
</>
  )
}
