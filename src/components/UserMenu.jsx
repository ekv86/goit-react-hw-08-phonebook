import { selectUser } from 'components/redux/auth/authSelectors';
import { logOut } from 'components/redux/auth/authThunk';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div style={{display:'flex', alignItems:'center'}}>
      <p>{user.email}</p>
      <Button
        color="inherit"
        sx={{ marginLeft: 2 }}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </Button>
    </div>
  );
};
