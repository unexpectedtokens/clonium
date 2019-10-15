import React from "react";
import Part from "./Partials/Part";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Page } from "../../components/Layout/RouteContainer/styled";
import { FormatDate } from "../../helpers/FormatDate";
import {
  PostContainer,
  PostTitle,
  FirstAuthorDiv,
  Banner
} from "./Partials/styled";
import { Centerer } from "../../components/Utility/Centerer";
const PostPage = props => {
  const { match, posts } = props;
  const singlePost = posts.filter(post => post.id === match.params.id)[0];
  if (!singlePost) {
    props.history.push("/newpost");
  }
  // useEffect(() => {
  // }, [match, onFetchPost]);
  return (
    <Page>
      <PostContainer>
        {singlePost ? (
          <React.Fragment>
            <PostTitle>{singlePost.title}</PostTitle>
            {/* First author div */}
            <FirstAuthorDiv>
              <img src="https://picsum.photos/200/300" alt="AVATAR" />
              <div>
                <p>{singlePost.writer.name}</p>
                <p>
                  Written on <span>{FormatDate(singlePost.createdAt)}</span>
                </p>
              </div>
            </FirstAuthorDiv>
            <Banner alt="banner" src="https://picsum.photos/900/500"></Banner>

            {singlePost.parts.map((part, index) => (
              <Part data={part} key={index}></Part>
            ))}
          </React.Fragment>
        ) : (
          <Centerer>
            <Loader type="Oval" color="#132537" height={100} width={100} />
          </Centerer>
        )}
      </PostContainer>
    </Page>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.post.posts
  };
};
// const mapDispatchToProps = dispatch => {
//   return {
//     onFetchPost: id => dispatch({ type: "FETCH_POST", id })
//   };
// };

export default connect(mapStateToProps)(withRouter(PostPage));
