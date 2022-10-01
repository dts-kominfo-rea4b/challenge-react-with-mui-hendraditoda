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
import { useState } from 'react';

const ContactForm = ({ handleNewContact }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    photo: '',
  });
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const onSubmitHandle = (event) => {
    event.preventDefault();
    handleNewContact(form);
  };
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  return (
    <>
      <Card sx={{ margin: 'auto', width: '400px' }}>
        <CardContent sx={{ padding: '50px' }}>
          <form onSubmit={onSubmitHandle}>
            <TextField
              margin="normal"
              fullWidth
              required
              id="Name"
              label="Name"
              name="name"
              value={form.name}
              onChange={onChangeHandler}
            ></TextField>
            <TextField
              margin="normal"
              fullWidth
              required
              id="Phone"
              label="Phone"
              name="phone"
              value={form.phone}
              onChange={onChangeHandler}
            ></TextField>
            <TextField
              margin="normal"
              fullWidth
              required
              id="Email"
              label="Email"
              name="email"
              value={form.email}
              onChange={onChangeHandler}
            ></TextField>
            <TextField
              margin="normal"
              fullWidth
              required
              id="Photo"
              name="photo"
              value={form.photo}
              onChange={onChangeHandler}
              label="Photo Url"
            ></TextField>
            <CardActions>
              <Button type="submit" size="small">
                Add New
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default ContactForm;
