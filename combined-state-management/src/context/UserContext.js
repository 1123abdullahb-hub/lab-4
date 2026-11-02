
import React, {
    createContext,
    useState,
    useEffect
} from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState(() => {
        return localStorage.getItem("loggedIn") === "true";
    });

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    // Fetch API users
    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {

                setUsers(data);

                const savedId = localStorage.getItem("userId");

                const savedUser = data.find(
                    item => item.id === Number(savedId)
                );

                if (loggedIn && savedUser) {
                    setUser(savedUser);
                } else {
                    setLoggedIn(false);
                    setUser(null);
                    localStorage.setItem("loggedIn", "false");
                }

            })
            .catch(error => console.log(error));

    }, []);

    // Save login state
    useEffect(() => {
        localStorage.setItem("loggedIn", String(loggedIn));
    }, [loggedIn]);

    const login = () => {

        if (users.length > 0) {

            setUser(users[0]);
            setLoggedIn(true);

            localStorage.setItem(
                "userId",
                String(users[0].id)
            );
        }
    };

    const logout = () => {

        setLoggedIn(false);
        setUser(null);

        localStorage.removeItem("userId");
    };

    return (
        <UserContext.Provider
            value={{
                loggedIn,
                setLoggedIn,
                user,
                users,
                login,
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
