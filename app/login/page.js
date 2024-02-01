'use client';
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <form className="flex flex-col space-y-4">
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          className="w-1/2 self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogin}
        >
          Login
        </Button>
      </form>
      <div className="flex flex-row space-x-2 mt-4">
        <p>Don't have an account?</p>
        <Link href="/register" legacyBehavior={true}>
          <a className="text-blue-500 hover:underline">Register</a>
        </Link>
      </div>
    </div>
  );
};

export default Login;
