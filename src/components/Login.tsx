import React, { Fragment, useEffect, useState, useContext } from "react";

import { Link } from "react-router-dom";
//import {authUserAction} from '../store/actions/userActions';
import { Container } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { FormGroup } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { Grid } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import Sidebar from "./Sidebar";
import { UsersContext } from "../context/UsersContext";

function Alert(props: any) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

function Login(props: any) {
  const { auth } = useContext(UsersContext);
  console.log("auth");
  console.log(auth);
  const [user, updateUser] = useState<any>({});
  const error = useState<boolean>(true);
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const { setAuthFunction } = useContext(UsersContext);

  useEffect(() => {
    if (user.email) {
      props.history.push("/");
    }
  }, [user]);

  return (
    <Fragment>
      <Sidebar></Sidebar>

      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const loginUser = {
            email: email,
            password: password,
          };

          await setAuthFunction(loginUser);

          updateUser(loginUser);
        }}
      >
        <Container className='loginContainer'>
          <FormGroup>
            <h1 className='login'>Sign In</h1>
            <TextField
              type='email'
              id='email'
              aria-describedby='emailHelp'
              placeholder='Enter your email'
              onChange={(e) => updateEmail(e.target.value)}
              value={email}
              required
            />

            <TextField
              type='password'
              id='passwordConfirmation'
              placeholder='Enter your Password'
              onChange={(e) => updatePassword(e.target.value)}
              value={password}
              required
            />
          </FormGroup>
          <Grid container justify='center'>
            <Button
              className='centerButton login'
              type='submit'
              variant='contained'
              color='primary'
            >
              {" "}
              Enter{" "}
            </Button>
          </Grid>
          <Grid container justify='flex-end'>
            <Link
              to={{
                pathname: `/Reset`,
              }}
            >
              {" "}
              Forgot your password?{" "}
            </Link>
          </Grid>

          <br />
          {error && email && password ? (
            <div className='alert alert-dismissible alert-danger'>
              <Alert severity='error'>Invalid user or password!</Alert>
            </div>
          ) : (
            ""
          )}
        </Container>
      </form>
    </Fragment>
  );
}

export default Login;
