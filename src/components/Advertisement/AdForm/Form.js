import React from "react";
import { CardContent, Grid, TextField, Typography } from '@material-ui/core';
import { StyledCard, StyledButton } from './styles';

const Form = props => {
  const {
    values: { surfaceArea, roomNum, address },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
    handleBlur,
    mode
  } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, true);
    console.log(mode);
  };

  const blur = (name, e) => {
    e.persist();
    handleBlur(e);
    setFieldTouched(name, true, true);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={6} lg={6}>
        <StyledCard>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom={true}>
              { mode === "createAd" ? " ایجاد آگهی" : " ویرایش آگهی"}
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                id="outlined-email-input"
                label="متراژ"
                type="number"
                name="surfaceArea"
                autoFocus="true"
                margin="normal"
                variant="outlined"
                fullWidth
                autoComplete="off"
                value={surfaceArea}
                error={touched.surfaceArea && Boolean(errors.surfaceArea)}
                onBlur={blur.bind(null, "surfaceArea")}
                onChange={change.bind(surfaceArea, "surfaceArea")}
                helperText={touched.surfaceArea ? errors.surfaceArea : ""}
                placeholder="بر حسب متر"
              />
              <TextField
                id="outlined-email-input"
                label="اتاق خواب"
                type="number"
                name="roomNum"
                margin="normal"
                variant="outlined"
                fullWidth
                autoComplete="off"
                value={roomNum}
                onBlur={blur.bind(null, "roomNum")}
                onChange={change.bind(null, "roomNum")}
                error={touched.roomNum && Boolean(errors.roomNum)}
                helperText={touched.roomNum ? errors.roomNum : ""}
                placeholder="تعداد اتاق خواب"
              />
              <TextField
                id="outlined-email-input"
                label="آدرس"
                type="text"
                name="address"
                multiline
                margin="normal"
                variant="outlined"
                fullWidth
                autoComplete="off"
                rows="6"
                rowsMax="6"
                value={address}
                error={touched.address && Boolean(errors.address)}
                onBlur={blur.bind(null, "address")}
                onChange={change.bind(null, "address")}
                helperText={touched.address ? errors.address : ""}
                placeholder="آدرس را دقیق وارد کنید"
              />
              <StyledButton
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={!isValid}
              >
                ثبت
              </StyledButton>
            </form>
          </CardContent>
        </StyledCard>
      </Grid>
    </Grid>
  );
};

export default Form;
