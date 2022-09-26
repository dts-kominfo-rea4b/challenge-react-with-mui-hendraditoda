// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import {
  Card,
  CardContent,
  Box,
  TextField,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import { padding } from '@mui/system';

const ContactForm = () => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  return (
    <>
      <Card sx={{ margin: 'auto', width: '400px' }}>
        <CardContent sx={{ padding: '50px' }}>
          <TextField fullWidth required id="Name" label="Name"></TextField>
          <TextField fullWidth required id="Phone" label="Phone"></TextField>
          <TextField fullWidth required id="Email" label="Email"></TextField>
          <TextField
            fullWidth
            required
            id="Photo"
            label="Photo Url"
          ></TextField>
          <CardActions>
            <Button size="small">Add New</Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default ContactForm;
