import { useDispatch } from 'react-redux';
import { register } from './redux/auth/authThunk';
import { Button, FormControl, InputLabel, OutlinedInput } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: '195px', marginRight: 'auto', marginLeft: 'auto' }}
    >
      <h3 style={{ textAlign: 'center' }}>Registration</h3>
      <FormControl sx={{ display: 'block', marginBottom: 3 }}>
        <InputLabel htmlFor="component-name">Name</InputLabel>
        <OutlinedInput
          id="component-name"
          label="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormControl>
      <FormControl sx={{ display: 'block', marginBottom: 3 }}>
        <InputLabel htmlFor="component-email">Email</InputLabel>
        <OutlinedInput
          id="component-email"
          label="Email"
          type="email"
          name="email"
          required
        />
      </FormControl>
      <FormControl sx={{ display: 'block', marginBottom: 3 }}>
        <InputLabel htmlFor="component-password">Password</InputLabel>
        <OutlinedInput
          id="component-password"
          label="Password"
          type="password"
          name="password"
          required
        />
      </FormControl>
      <Button
        type="submit"
        style={{ display: 'block', marginRight: 'auto', marginLeft: 'auto' }}
      >
        Register
      </Button>
    </form>
  );
};
