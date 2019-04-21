import React, { Component } from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../../actions/filters";
import { fetchAdvertisements } from "../../actions/advertisement";
import publicAds from "../../selectors/publicAds";

import { Grid, CardHeader, CardContent, Typography } from "@material-ui/core";
import Search from "../Search";
import { StyledCard } from '../Share/StyledCard'; 

class Main extends Component {
  componentDidMount() {
    this.props.fetchAdvertisements();
  }
  
  renderCard = item => (
    <Grid item container justify="center" >
      <StyledCard>
        <CardHeader title="آگهی" />
        <CardContent>
          <Typography variant="body2">متراژ: {item.surfaceArea}</Typography>
          <Typography variant="body2">تعداد اتاق: {item.roomNum}</Typography>
          <Typography variant="body2">آدرس: {item.address}</Typography>
        </CardContent>
      </StyledCard>
    </Grid>
  );

  renderAds = ads => {
    return ads.map(ad => (
      <Grid item key={ad.id}>
        {this.renderCard(ad)}
      </Grid>
    ));
  };

  render() {
    const { advertisements } = this.props;

    return (
      <React.Fragment>
        <Grid container style={{minHeight: '100vh'}}>
          <Grid item container justify="center" alignContent="center">
            <Search />
          </Grid>
          <Grid
            container
            item
            justify="center"
            alignItems="center"
            alignContent="center"
            spacing={16}
          >
            {this.renderAds(advertisements)}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  advertisements: publicAds(Object.values(state.advertisements), state.filters),
  filters: state.filters
});

export default connect(
  mapStateToProps,
  { setTextFilter, fetchAdvertisements }
)(Main);
