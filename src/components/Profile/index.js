import React, { Component } from "react";
import { connect } from "react-redux";
// actions
import {
  fetchAdvertisements,
  deleteAdvertisement
} from "../../actions/advertisement";
import { setTextFilter } from "../../actions/filters";
// selector
import personalAds from "../../selectors/personalAds";
// Components
import {
  Grid,
  CardHeader,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { StyledCard, StyledCardActions } from "./styles";
import { StyledLink } from "../Share/StyledLink";
import Search from "../Search";

class Profile extends Component {
  state = { open: false, selectedId: null };

  componentDidMount() {
    this.props.fetchAdvertisements();
  }

  onSearchTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };

  handleDelete = id => {
    this.setState({ open: true, selectedId: id });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRemoveItem = () => {
    this.props.deleteAdvertisement(this.state.selectedId);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  renderDialog = () => {
    return (
      <React.Fragment>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"تایید"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              آیا از این انتخاب مطمئنید؟
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>خیر</Button>
            <Button onClick={this.handleRemoveItem}>بلی</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  };

  renderCard = item => (
    <Grid item container justify="center">
      <StyledCard>
        <CardHeader title="آگهی" subheader="آگهی من" />
        <CardContent>
          <Typography variant="body2">متراژ: {item.surfaceArea}</Typography>
          <Typography variant="body2">تعداد اتاق: {item.roomNum}</Typography>
          <Typography variant="body2">آدرس: {item.address}</Typography>
        </CardContent>
        <StyledCardActions>
          <StyledLink to={`/advertisement/edit/${item.id}`}>
            <Button>
              ویرایش <Edit />
            </Button>
          </StyledLink>
          <Button onClick={() => this.handleDelete(item.id)}>
            حذف
            <Delete />
          </Button>
        </StyledCardActions>
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
        {this.renderDialog()}
        <Grid container>
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
  advertisements: personalAds(
    Object.values(state.advertisements),
    state.auth.userId,
    state.filters
  ),
  filters: state.filters
});

export default connect(
  mapStateToProps,
  { fetchAdvertisements, deleteAdvertisement, setTextFilter }
)(Profile);
