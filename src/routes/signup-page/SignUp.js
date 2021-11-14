import React, { useState } from "react";
import { FiX, FiEye, FiEyeOff } from "react-icons/fi";
import { useHistory } from 'react-router-dom';
import generateAvatar from "github-like-avatar-generator";

function SignUp() {
    const history = useHistory();
  const [eye, setEye] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    function generateRandomAvatar() {
        let avatar = generateAvatar({
        blocks: 4,
        width: 45,
        });
        return avatar.base64;
    }

  const registerUser = async (e) => {
    
      e.preventDefault();
    const response = await fetch("http://localhost:5000/v2/register", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            name, 
            email,
            password,
            avatar: generateRandomAvatar()
        }),
    })


    const data = await response.json();

    if(data.status === "ok"){
        history.push("/login")
    }

    console.log(data);
  }
  return (
    <div className="login">
      <div className="login_container">
        <h1 className="login__title">Register</h1>
        <form className="login__form" onSubmit={registerUser}>
          <div className="login__email">
            <input
              autoComplete="off"
              type="text"
              placeholder="Your Name"
              className="login__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FiX />
          </div>
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
          <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
