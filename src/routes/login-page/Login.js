import React, { useState } from "react";
import "./Login.css";
import { useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
import { userAuth } from '../../context/actions'; 
import { FiX, FiEye, FiEyeOff } from "react-icons/fi";

function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [eye, setEye] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerUser = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/v2/login", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const data = await response.json();

        if (data.user) {
            dispatch(userAuth(data?.user))
            console.log(data)
            localStorage.setItem("token", data.user_token)
            history.push(`/profile/${data.user.name}`)
        }
        else {
            alert("Please check your username or password!")
        }
    }
    return (
        <div className="login">
            <div className="login_container">
                <h1 className="login__title">Login</h1>
                <form className="login__form" onSubmit={registerUser}>
                    <div className="login__email">
                        <input
                            autoComplete="off"
                            type="email"
                            placeholder="Your email"
                            className="login__input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FiX />
                    </div>
                    <div className="login__password">
                        <input
                            autoComplete="off"
                            type={eye ? "password" : "text"}
                            placeholder="Your password"
                            className="login__input"
                            style={eye ? { userSelect: "none" } : null}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {!eye ? (
                            <FiEye onClick={() => setEye(true)} />
                        ) : (
                            <FiEyeOff onClick={() => setEye(false)} />
                        )}
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
