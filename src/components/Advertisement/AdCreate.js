import React, { Component } from "react";
import { connect } from 'react-redux';
import { createAdvertisement } from '../../actions/advertisement';

import AdForm from "./AdForm";

class AdCreate extends Component {
  onSubmit = formValues => {
    this.props.createAdvertisement(formValues);
  };

  render() {
    return (
      <React.Fragment>
        <AdForm onSubmit={this.onSubmit} mode="createAd"/>
      </React.Fragment>
    );
  }
}

export default connect( null, {createAdvertisement})(AdCreate);
