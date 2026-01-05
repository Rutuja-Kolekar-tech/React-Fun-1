import { useState } from "react";

const LoginStatusEx = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            <h2>Login Status Example</h2>

            {isLoggedIn ? (
                <>
                    <p>You are logged in </p>
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                </>
            ) : (
                <>
                    <p>You are not logged in </p>
                    <button onClick={() => setIsLoggedIn(true)}>Login</button>
                </>
            )}
        </>
    );
};

export default LoginStatusEx;
