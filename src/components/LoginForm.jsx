import { useDispatch } from 'react-redux';
import { logIn } from './redux/auth/authThunk';
import { Button, FormControl, InputLabel, OutlinedInput } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
      <h3 style={{ textAlign: 'center' }}>LogIn</h3>
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
        LogIn
      </Button>
    </form>
  );
};
