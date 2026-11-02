
import React, { useContext } from "react";

import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";

import { ThemeContext } from "./context/ThemeContext";

function App() {

    const { theme } = useContext(ThemeContext);

    return (
        <div
            style={{
                backgroundColor:
                    theme === "light" ? "#f5f5f5" : "#333333",

                color:
                    theme === "light" ? "#000000" : "#ffffff",

                minHeight: "100vh",
                padding: "30px"
            }}
        >

            <h1>LAB4 - Combined State Management</h1>

            <hr />

            <UserProfile />

            <hr />

            <Counter />

            <hr />

            <ThemeToggle />

        </div>
    );
}

export default App;
