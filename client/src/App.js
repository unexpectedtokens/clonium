import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import PostPage from "./views/PostPage/PostPage";
import PostNewPage from "./views/PostNewPage/PostNew";
import Home from "./views/Home/Home";
import { connect } from "react-redux";
import Navbar from "./components/Layout/Navigation/index";
import { createGlobalStyle } from "styled-components";
// import { PageContainer } from "./components/Layout/RouteContainer/styled";
import { TransitionGroup } from "react-transition-group";
import { Container } from "./components/Utility/Container";
import { Banner } from "./components/UI/PageBanner";
function App(props) {
  //REDIRECT USERS THAT ARE LOGGED IN AND TRYING TO GET TO LOGIN/SIGNUP PAGE TO HOMEPAGE

  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Banner>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#132537"
            fillOpacity="1"
            d="M0,192L80,170.7C160,149,320,107,480,101.3C640,96,800,128,960,144C1120,160,1280,160,1360,160L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </Banner>
      <Container>
        <TransitionGroup>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/post/:id" component={PostPage} />
            {props.auth ? (
              <Route path="/newpost" component={PostNewPage} />
            ) : null}
            <Redirect to="/"></Redirect>
          </Switch>
        </TransitionGroup>
      </Container>
    </Router>
  );
}

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html{
    font-size: 62.5%;
    @media only screen and (max-width: 900px){
      font-size: 50%;
    }
    @media only screen and (max-width: 600px){
      font-size: 37.5%;
    }
  }
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato');
    font-family: 'Lato', sans-serif;
    background: #f5faff;
    color: #555
  }
`;

const mapStateToProps = state => {
  return {
    auth: state.auth.auth
  };
};

export default connect(mapStateToProps)(App);
