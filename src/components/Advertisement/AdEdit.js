import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import {
  fetchAdvertisement,
  editAdvertisement,
  deleteAdvertisement
} from "../../actions/advertisement";

import AdForm from "./AdForm";

class AdEdit extends Component {
  componentDidMount() {
    this.props.fetchAdvertisement(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editAdvertisement(this.props.match.params.id, formValues);
  };

  render() {
    const { initialValues, mode } = this.props;
    if (!this.props.advertisement) {
      return <div>loading</div>;
    }

    return (
      <React.Fragment>
        <AdForm
          initialValues={_.pick(
            this.props.advertisement,
            "surfaceArea",
            "roomNum",
            "address"
          )}
          onSubmit={this.onSubmit}
          mode="editAd"
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  advertisement: state.advertisements[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { fetchAdvertisement, editAdvertisement, deleteAdvertisement }
)(AdEdit);
