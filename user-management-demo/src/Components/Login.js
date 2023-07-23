import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "./Home";
import '../index.css'
import { Button, TextField } from "@mui/material";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("palashPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("palashEmail").replace(/"/g, "");


    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <div className="neo">
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>Please Log In</h3>
          <div className="form-group">
            <br></br>
            <TextField id="outlined-basic" label="E-Mail" variant="outlined" type="email"
              className="form-control"

              onChange={(event) => setEmaillog(event.target.value)} />

          </div>
          <br></br>
          <div className="form-group">

            <TextField id="outlined-basic" label="Password" variant="outlined" type="password"
              className="form-control"

              onChange={(event) => setPasswordlog(event.target.value)} />

          </div>
          <br></br  >
          <Button variant="contained" type="submit" className="btn btn-dark btn-lg btn-block">Login</Button>

          {flag && (
            <Alert color="primary" variant="warning">
              Please try Again !
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Login;
