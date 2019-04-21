import React, { Component } from "react";
import { connect } from "react-redux";
import { InputAdornment } from "@material-ui/core";
import { StyledTextField } from './styles';
import SearchIcon from "@material-ui/icons/Search";
import { setTextFilter } from "../../actions/filters";

class Search extends Component {
  handleInputChange = e => {
      this.props.setTextFilter(e.target.value);
  };
  render() {
    return (
      <StyledTextField
        id="outlined-search"
        label="جست و جو آگهی "
        type="search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        value={this.props.filters.text}
        onChange={this.handleInputChange}
      />
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(
  mapStateToProps,
  { setTextFilter }
)(Search);
