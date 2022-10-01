// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import {
  Avatar,
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import React from 'react';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <Card sx={{ minWidth: 'auto' }}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'backgroundg.paper' }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={data.photo} />
            <ListItemText primary={data.name}></ListItemText>
            <ListItemText primary={data.phone}></ListItemText>
            <ListItemText primary={data.email}></ListItemText>
          </ListItemAvatar>
        </ListItem>
      </List>
    </Card>
  );
};

export default Contact;
