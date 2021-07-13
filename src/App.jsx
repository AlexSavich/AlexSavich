import React, { useState } from "react";

export default function App() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const loginSetter = (event) => {
        setLogin(event.target.value);
    };

    const passwordSetter = (event) => {
        setPassword(event.target.value);
    };


    const toConsole = () => {
        console.log(password);
        console.log(login);
    };

    return (
        <div
            style={{
                width: "100%",
                maxWidth: "400px",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <input
                style={{ marginBottom: "20px" }}
                value={login}
                onChange={loginSetter}
                placeholder="Login"
                type="text"
            />
            <input
                style={{ marginBottom: "20px" }}
                value={password}
                onChange={passwordSetter}
                placeholder="Password"
                type="password"
            />
            <button onClick={(e) => toConsole()}>Login</button>
        </div>
    );
}
