// src/Components/Login.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import styled from "@emotion/styled/macro";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        navigate("/dashboard");
      } else {
        console.error("Login failed with status:", response.status);
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };

  return (
    <LoginBlock>
      <img src="./treta-logo.png" width={200} height={40}></img>
      <Devider />
      <LoginForm onSubmit={handleLogin}>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <TextField
            id="input-with-icon-textfield"
            placeholder="Email"
            type="email"
            value={email}
            className="loginInput"
            onChange={(e) => setEmail(e.target.value)}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </Box>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <TextField
            id="password"
            placeholder="Password"
            type="password"
            className="loginInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </Box>
        <div>
            <SubmitButton type="submit">Login</SubmitButton>
            <ForgetPassword href="">Forget Password ?</ForgetPassword>
        </div>
      </LoginForm>
    </LoginBlock>
  );
};

export default Login;

export const LoginBlock = styled.div`
  background-color: #edeceb;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Devider = styled.div`
  height: 400px;
  width: 2px;
  background-color: #f36324;
`;
export const LoginForm = styled.form`
  width: 400px;

  .loginInput {
    width: 100%;
  }
  .MuiBox-root {
    margin-top: 21px;
    background-color:white;
    border-radius:4px;
  }
  .css-1eed5fa-MuiInputBase-root-MuiInput-root::before {
    display:none;
  }
`;

export const SubmitButton = styled.button`
  background-color: #f36324;
  border-radius: 4px;
  padding: 10px;
  width: 120px;
  border: none;
  color: white;
  font-weight: 700;
  margin-top: 40px;
  cursor: pointer;
  margin-right: 40px;
`;

export const ForgetPassword = styled.a`
    text-decoration:none;
    color:#f36324;
    font-weight:600;
`