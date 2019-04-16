import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions/auth';

class GoogleAuth extends Component {
  
    componentDidMount() {
      window.gapi.load("client:auth2", () => {
        window.gapi.client
          .init({
            clientId:
              "821527981402-jfeit0rluvdo2aillc734lne6brit7ak.apps.googleusercontent.com",
            scope: "email"
          })
          .then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange);
          });
      });
    }
  
    onAuthChange = isSignedIn => {
      if (isSignedIn) {
        this.props.signIn(this.auth.currentUser.get().getId());
      } else {
        this.props.signOut();
      }
    };
  
    onSignInClick = () => {
      this.auth.signIn();
    };
  
    onSignOutClick = () => {
      this.auth.signOut();
    };

    getStateAndHelpers = () => ({
      isSignedIn: this.props.isSignedIn,
      signIn: this.onSignInClick,
      signOut: this.onSignOutClick
    })
  
  
    render() {
      return this.props.children(this.getStateAndHelpers())
    }
  }
  const mapStateToProps = state => ({
    isSignedIn: state.auth.isSignedIn
  });
  
  export default connect(
    mapStateToProps,
    { signIn, signOut }
  )(GoogleAuth);
  