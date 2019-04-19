import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from 'yup';

import Grid from "@material-ui/core/Grid";

import  Form  from "./Form";

const validationSchema = Yup.object({
  surfaceArea: Yup.number("متراژ را مشخص کن").required("وارد کردن متراژ الزامی است"),
  roomNum: Yup.number("تعداد اتاق را مشخص کن").required("وارد کردن تعداد اتاق الزامی است"),
  address: Yup.string("آدرس را دقیق وارد کن").required("وارد کردن آدرس الزامی است")
});

class AdForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitValues = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    const { initialValues, mode } = this.props;
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Formik
            render={props => <Form mode={mode} {...props} />}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={this.submitValues}
          />
        </Grid>
      </Grid>
    );
  }
}

export default AdForm;
