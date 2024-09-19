import { useContext } from "react";
import Button from "../UI/Button";
import classes from "./Header.module.css";
import Context from "../store/context";

const Header = () => {
    const loggedInfo = useContext(Context);
    const loginHandler = () => {
        loggedInfo.handleLogging(false)
    }
    return (
        <div className={classes.header}>
            <h1>Context Auth</h1>
            <ul>
                <li>
                    <a href="/">My Products</a>
                </li>
                <li>
                    <a href="/">My Sales</a>
                </li>
                <li>
                    <Button onClick={loginHandler} className={classes.button}>Logout</Button>
                </li>
            </ul>
            
        </div>
    )
};

export default Header;