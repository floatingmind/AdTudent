import React from "react";
import { create } from "jss";
import rtl from "jss-rtl";
import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";

const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById("jss-insertion-point"),
  plugins: [...jssPreset().plugins, rtl()]
});


const generateClassName = createGenerateClassName();

export default props => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    {props.children}
  </JssProvider>
);
