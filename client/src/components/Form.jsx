import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";
import {
  Paper,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  styled,
  TextField
} from "@material-ui/core";
const styles = {
  paper: {
    width: "30rem",
    padding: "1rem",
    margin: "0 auto"
  },
  input: {
    marginBottom: "1rem"
  },
  button: {
    width: "400px",
    backgroundColor: "#9FC5F8"
  }
};

const Form = props => {
  const [formState, setFormState] = useState({
    name: "",
    dueDate: ""
  });
  const [hasError, setHasError] = useState(false);

  const [errorState, setErrorState] = useState({
    name: "",
    dueDate: ""
  });

  const [change, setChange] = useState(false);

  const nameError = "FRONT END: Project name must be at least 3 characters";
  //   const dueDateError = "FRONT END: Must enter a valid Due Date";

  useEffect(() => {
    console.log("you are in form useeffect");
    validator();
  }, [errorState, change, formState]);

  const onChangeHandler = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });

    console.log("formstate at the end of onchange is:", formState);
  };
  const validator = () => {
    console.log("you are in validator start");
    let temp = false;
    if (formState.name.length > 0 && formState.name.length < 3) temp = true;
    if (formState.dueDate.length === 0) temp = true;
    setHasError(temp);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log("you are in create onsumbit");
    axios
      .post("http://localhost:8000/api/create", formState)
      .then(response => navigate("/"))
      .catch(error => {
        console.log("error is:", error.response);
        if (error.response.data.name == "MongoError") {
          setErrorState({
            name: "BACKEND: Project already exists!"
          });
        } else {
          setErrorState({
            name: error.response.data.errors.name
              ? error.response.data.errors.name.message
              : "",
            dueDate: error.response.data.errors.dueDate
              ? error.response.data.errors.dueDate.message
              : ""
          });
        }
      });
  };

  return (
    <>
      <p style={{ margin: "5px", textAlign: "right" }}>
        <Link style={{ marginRight: "10px" }} to="/">
          Back to Dashboard
        </Link>
      </p>
      <Paper elevation={3} style={styles.paper}>
        <h2>Plan a new Project</h2>
        <div>
          <p style={{ color: "blue" }}>
            {formState.name.length > 0 &&
              formState.name.length < 3 &&
              nameError}
          </p>
          {/* <p style={{ color: "blue" }}>{formState.dueDate.length === 0 && dueDateError}</p> */}
          <p style={{ color: "red" }}>{errorState.name}</p>
          <p style={{ color: "red" }}>{errorState.dueDate}</p>

          <form onSubmit={onSubmitHandler}>
            <FormControl variant="outlined" style={styles.input}>
              <InputLabel>Name</InputLabel>
              <OutlinedInput
                id="name"
                type="text"
                name="name"
                onChange={onChangeHandler}
              />
            </FormControl>
            <br />
            <FormControl variant="outlined" style={styles.input}>
              <TextField
                id="dueDate"
                name="dueDate"
                label="Due Date"
                type="date"
                variant="outlined"
                onChange={onChangeHandler}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </FormControl>
            <br />
            <Button
              style={styles.button}
              type="submit"
              varient="contained"
              color="primary"
              disabled={hasError}
            >
              Plan Project
            </Button>
          </form>

          {/* <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={onChangeHandler}
          value={formState.name || ''}
        />
        <br />
        <label htmlFor="position">Position</label>
        <input
          id="position"
          type="text"
          name="position"
          onChange={onChangeHandler}
          value={formState.position || ''}
        />
        <br />
        <input
          id="birthday"
          type="date"
          name="birthday"
          onChange={onChangeHandler}
          value={formState.birthday.substring(0,10) || ''}
        />
        <br />
        <button type="submit" >Submit</button>
        <h2 onClick={callConsole}>console.log</h2>
      </form> */}
        </div>
      </Paper>
    </>
  );
};

export default Form;
