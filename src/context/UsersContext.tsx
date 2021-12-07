import React, { createContext } from "react";
import { saveUser, loginUser } from "../services/apiService";
//import { ContextReplacementPlugin } from 'webpack';

export const UsersContext = createContext<Partial<any>>({});
export const saveUserFunction = saveUser;
export const loginUserFunction = loginUser;
export const auth: any = {};
export const setAuthFunction = async (user: any) => {
  let response = await loginUser(user);
  auth.token = response.token;
  auth.user = user;
  console.log(response);
  return;
};

export const logoutFunction = async (user: any) => {
  auth.token = null; // console.log(auth);
  return;
};

const UsersProvider = (props: any) => {
  return (
    <UsersContext.Provider
      value={{
        saveUserFunction,
        loginUserFunction,
        setAuthFunction,
        logoutFunction,
        auth,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
