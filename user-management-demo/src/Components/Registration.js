import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { Checkbox } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from "@mui/material";
import '../App.css'

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  // const [gender, setGender] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);



  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !profession) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("palashEmail", JSON.stringify(email));
      localStorage.setItem(
        "palashPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }




  return (
    <>

      <div>
        {" "}
        {login ? (
          <form onSubmit={handleFormSubmit}>

            <Typography variant="h4" gutterBottom>
              Register Here            </Typography>


            <div className="form-group">


              <TextField id="outlined-basic" name="name" className="form-control" label="Enter Full Name" required variant="outlined" onChange={(event) => setName(event.target.value)} />

            </div>

            <div className="form-group">
              <br></br>
              <TextField id="outlined-basic" className="form-control" type="email" label="Enter Email" required variant="outlined" onChange={(event) => setEmail(event.target.value)} />

            </div>
            <br></br>
            <div className="form-group">

              <TextField id="outlined-basic" required
                inputProps={{
                  minLength: 8,
                  maxLength: 10
                }} name="password" className="form-control" type="password" onChange={(event) => setPassword(event.target.value)} label="Enter password" variant="outlined" />

            </div>
            <br></br>



            <div className="form-group">
              <h5>Choose your Profession</h5>
              <Form.Control
                as="select"
                onChange={(event) => setProfession(event.target.value)}
              >
                <option>Select</option>
                <option>Artist</option>
                <option>Photographer</option>
                <option>Team Player</option>
                <option>Full Stack</option>
                <option>Cricketer</option>

              </Form.Control>
              <br></br>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
              <hr></hr>
              <Checkbox required />Allow to all terms and conditions.
            </div>


            <br></br>


            <Button variant="contained" type="submit">Submit</Button>

            <p onClick={handleClick} className="forgot-password text-right">
              Already registered{" "}log in?

            </p>
            {flag && (
              <Alert color="primary" variant="danger">
                I got it you are in hurry! But every Field is important!
              </Alert>
            )}
          </form>
        ) : (
          <div className="neo">
            <Login />
          </div>
        )}
      </div>

    </>
  );
}

export default Registration;
