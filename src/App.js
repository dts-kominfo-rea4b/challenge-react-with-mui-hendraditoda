import { Grid } from '@mui/material';
import './App.css';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Header from './components/Header';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = (contacts) => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const handleNewContact = () => {
    // const valueInput = input.value;
    // const list = document.createElement('li');
    // list.append(valueInput);
    // output.appendChild(list);
    // input.value = '';
  };

  return (
    <div className="App">
      <Header />
      <Grid container spacing={2}>
        <Grid item xs="auto" md="auto">
          <ContactForm handleNewContact={handleNewContact} />
        </Grid>
        <Grid item xs="auto" md="auto">
          {contacts.map((contact, index) => (
            <Contact data={contact} key={index} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
