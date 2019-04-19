import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = userId => {

  localStorage.setItem("status", true);

  return {
    type: SIGN_IN,
    payload: userId
  };

};

export const signOut = () => {

  localStorage.removeItem("status");

  return {
    type: SIGN_OUT
  };

};
