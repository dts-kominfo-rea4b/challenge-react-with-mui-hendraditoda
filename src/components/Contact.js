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
const Contact = ({ contact }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <Card sx={{ minWidth: 'auto' }}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'backgroundg.paper' }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={contact.photo} />
            <ListItemText primary={contact.name}></ListItemText>
            <ListItemText primary={contact.phone}></ListItemText>
            <ListItemText primary={contact.email}></ListItemText>
          </ListItemAvatar>
        </ListItem>
      </List>
    </Card>
  );
};

export default Contact;
