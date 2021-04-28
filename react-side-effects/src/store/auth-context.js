import React, {useEffect, useState} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn');

        if (loggedIn === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const logoutHandler = () => {
        console.log('logout handler');
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    const loginHandler = () => {
        console.log('login handler');
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    }

   return <AuthContext.Provider
       value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler}}>{props.children}</AuthContext.Provider>
}

export default AuthContext;
