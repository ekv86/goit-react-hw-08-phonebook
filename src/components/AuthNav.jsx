import { Button} from "@mui/material";
import { NavLink } from "react-router-dom";

export const AuthNav = () => {
    return (
      <div>
        <Button color="inherit">
          <NavLink to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register</NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Log In</NavLink>
        </Button>
      </div>
    );
}