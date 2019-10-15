import React from "react";
import { Linkcontainer, Navcontainer, NavLogo } from "./partials/styled";
import { Navlink } from "./partials/Navlink";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
const Navbar = withRouter(props => {
  // let authLinks = props.auth ? (
  //   <Navlink clicked={props.onLogOut} to="/">
  //     Log out
  //   </Navlink>
  // ) : (
  //   <React.Fragment>
  //     <Navlink clicked={props.onLogin} to="/">
  //       Log in
  //     </Navlink>
  //     <Navlink clicked={props.onLogin} to="/">
  //       Sign up
  //     </Navlink>
  //   </React.Fragment>
  // );
  // let newPostLink = props.auth ? (
  //   <Navlink to="/newpost">New Post</Navlink>
  // ) : null;
  return (
    <Navcontainer>
      <NavLogo onClick={() => props.history.push("/")}>FrontsEnding</NavLogo>
      {/* <Linkcontainer flex="center">
        <Navlink to="/">Home</Navlink>
        {newPostLink}
      </Linkcontainer>
      <Linkcontainer flex="flex-end">
        <Navlink to="/search">Search</Navlink>
        {authLinks}
      </Linkcontainer> */}
    </Navcontainer>
  );
});

const mapStateToProps = state => {
  return { auth: state.auth.auth };
};
const mapDispatchToProps = dispatch => ({
  onLogin: () => dispatch({ type: "LOG_IN" }),
  onLogOut: () => dispatch({ type: "LOG_OUT" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
