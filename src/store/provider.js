import { useReducer } from "react";
import Context from "./context";

const defaultLoggedData = {
    isLoggedIn: false
}

const LoggedReducer = (state, action) => {
    const isLoggedIn = action.isLoggedIn
    return {
        isLoggedIn: isLoggedIn
    }
};

const Provider = (props) => {

    const [loggedInfo, dispatchLoggedInfo] = useReducer(LoggedReducer, defaultLoggedData);

    const handleLogging = (loggedIn) => {
        dispatchLoggedInfo({isLoggedIn: loggedIn});
    }

    const context = {
        isLoggedIn: loggedInfo.isLoggedIn,
        handleLogging: handleLogging
    }

    return (
        <Context.Provider value={context}>{props.children}</Context.Provider>
    )
};

export default Provider;