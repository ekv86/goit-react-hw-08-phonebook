import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from './redux/auth/authSelectors';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="h6" component="div" sx={{ marginRight: 5 }}>
        <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Home
        </NavLink>
      </Typography>
      {isLoggedIn && (
        <Typography variant="h6" component="div">
          <NavLink
            to="/contacts"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Contacts
          </NavLink>
        </Typography>
      )}
    </div>
  )
};
