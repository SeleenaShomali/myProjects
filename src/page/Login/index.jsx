import React, { useContext, useState } from "react";
import "./login.css";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginFormHandler = (e) => {
    e.preventDefault();
    const data = {
      username: userName,
      password: password,
    };

    fetch("https://fakestoreapi.com/auth/login", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data login", data);

        const user = {
          name: userName,
          token: data.token,
        };
        login(user);
        navigate("/profile");
      });
  };

  return (
    <div className="login-div">
      <form className="login-form" onSubmit={loginFormHandler}>
        <label> userName</label>
        <input
          id="name"
          name="name"
          type="text"
          value={userName}
          placeholder="Enter your name"
          onChange={userNameHandler}
        />
        <label> Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          placeholder="Enter your name"
          onChange={passwordHandler}
        />
        <button type="submit"> Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
