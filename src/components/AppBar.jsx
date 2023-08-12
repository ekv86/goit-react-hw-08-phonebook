import { selectIsLoggedIn } from "components/redux/auth/authSelectors"
import { useSelector } from "react-redux"
import { Navigation } from "./Navigation";
import { UserMenu } from "./UserMenu";
import { AuthNav } from "./AuthNav";
import { AppBar, Toolbar } from "@mui/material";


export const AppBarEl = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

     return (
       <AppBar position="static">
         <Toolbar sx={{justifyContent: "space-between"}}>
           <Navigation />
           {isLoggedIn ? <UserMenu /> : <AuthNav />}
         </Toolbar>
       </AppBar>
     );
}