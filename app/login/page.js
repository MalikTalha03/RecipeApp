import React from "react";
import { Button, TextField } from "@mui/material";

const login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form className="flex flex-col space-y-4">
        <TextField label="Email" variant="outlined" />
        <TextField label="Password" variant="outlined" />
        <Button
          variant="contained"
          color="primary"
          className="w-1/2 self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {" "}
          Login{" "}
        </Button>
      </form>
      <div className="flex flex-row space-x-2">
        <p>Don't have an account?</p>
        <a href="/register">Register</a>
      </div>
    </div>
  );
};

export default login;
