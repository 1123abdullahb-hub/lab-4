
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserProfile() {

    const {
        loggedIn,
        user,
        users,
        login,
        logout
    } = useContext(UserContext);

    return (
        <div>
            <h2>User Authentication</h2>

            {!loggedIn ? (
                <>
                    <p>Please Login</p>

                    <button
                        onClick={login}
                        disabled={users.length === 0}
                    >
                        Login
                    </button>

                    {users.length === 0 && (
                        <p>Loading users...</p>
                    )}
                </>
            ) : (
                <>
                    <h3>Welcome, {user?.name}</h3>
                    <p>Email: {user?.email}</p>

                    <button onClick={logout}>
                        Logout
                    </button>
                </>
            )}
        </div>
    );
}

export default UserProfile;
