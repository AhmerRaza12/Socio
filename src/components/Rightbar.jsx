import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

export const Rightbar = () => {
  return (
    <Box  flex={3} p={2}sx={{display:{xs:"none",sm:"block"}}}>
    <Box position="fixed" width={400}>
    <Typography variant='h6' fontWeight="100">Online Friends </Typography>
    <AvatarGroup max={6}>
  <Avatar alt="Rehan Ahmed" src="https://mui.com/static/images/avatar/1.jpg" />
  <Avatar alt="Abdullah Haris" src="https://mui.com/static/images/avatar/2.jpg" />
  <Avatar alt="Ayesha Ift" src="https://mui.com/static/images/avatar/3.jpg" />
  <Avatar alt="Tim horny" src="https://mui.com/static/images/avatar/5.jpg" />
  <Avatar alt="Abacab" src="https://mui.com/static/images/avatar/4.jpg" />
  <Avatar alt="Ohio" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
<Typography variant='h6' fontWeight="100" mt={2} mb={2}>Latest Photos </Typography>
<ImageList cols={3} rowHeight={300} gap={5}>
<ImageListItem>
            <img
              src="https://images.pexels.com/photos/15885269/pexels-photo-15885269/free-photo-of-wood-city-street-building.jpeg?auto=compress&cs=tinysrgb&w=1250&h=350&dpr=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1685728399140-5650bbcfc015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1250&h=350"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/15935347/pexels-photo-15935347/free-photo-of-buckets-of-tulips-on-display.jpeg?auto=compress&cs=tinysrgb&w=1250&h=350&dpr=1"
              alt=""
            />
          </ImageListItem>
          
</ImageList>
<Typography variant='h6' fontWeight="100" mt={2} mb={2}>Conversations </Typography>
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Where were you?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ayesha Ift
              </Typography>
              {" — I was at your G looking for ya all the place mate…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/6.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Weeknd Movie Night"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Rehan, Abdullah, Tim horny
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/4.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Chelsea's Game v United"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — They will kick their asses like they always do...'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Box>
    </Box>
  )
}
