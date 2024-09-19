import { useContext } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Login.module.css";
import Context from "../store/context";

const Login = () => {
    const loggedInfo = useContext(Context)
    const loginHandler = () => {
        loggedInfo.handleLogging(true);
    };
    return (
        <Card className={classes['login-dialog']}>
            {!loggedInfo.isLoggedIn && 
                <><label>EMAIL</label><input type="email"></input><label>PASSWORD</label>
                  <input type="password"></input><Button onClick={loginHandler} 
                  className={classes.button} type="button">Login</Button>
                </>
            }
            {loggedInfo.isLoggedIn && 
                <>
                    <p>My User Profile</p>
                </>
            }
        </Card>
    )
}

export default Login;