import React from "react";

const Context = React.createContext({
    isLoggedIn: false,
    handleLogging: () => {}
});

export default Context;