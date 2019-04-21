import React from "react";
import Grid from "@material-ui/core/Grid";
import { StyledLink, StyledHeading, Wrapper, StyledGrid } from './styles';

import {
  Facebook,
  Instagram,
  Twitter,
  GooglePlus,
  Telegram,
  Linkedin
} from "mdi-material-ui";



const Footer = () => {
  return (
    <Wrapper>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
      >
        <Grid item>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item>
              <StyledHeading>راهنمای استفاده از سایت</StyledHeading>
              <StyledLink>نحوه ثبت آگهی / درخواست</StyledLink>
              <StyledLink>رویه مکاتبه با طرف دوم قرارداد</StyledLink>
              <StyledLink>شیوه محاسبه هزینه ها</StyledLink>
              <StyledLink>شیوه پرداخت</StyledLink>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item>
              <StyledHeading>خدمات مشتریان</StyledHeading>
              <StyledLink>پاسخ به پرسش های متداول</StyledLink>
              <StyledLink>قوانین و مقررات</StyledLink>
              <StyledLink>شرایط استفاده</StyledLink>
              <StyledLink>حریم خصوصی</StyledLink>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item>
              <StyledHeading>ارتباط با ما</StyledHeading>
              <StyledLink>آدرس: اصفهان، سپاهان شهر</StyledLink>
              <StyledLink>ایمیل: test@gmail.com</StyledLink>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <StyledGrid container direction="row" justify="center" alignItems="center" spacing={24}>
        <Grid item>
          <GooglePlus />
        </Grid>
        <Grid item>
          <Linkedin />
        </Grid>
        <Grid item>
          <Telegram />
        </Grid>
        <Grid item>
          <Instagram />
        </Grid>
        <Grid item>
          <Twitter />
        </Grid>
        <Grid item>
          <Facebook />
        </Grid>
      </StyledGrid>
    </Wrapper>
  );
};

export default Footer;
