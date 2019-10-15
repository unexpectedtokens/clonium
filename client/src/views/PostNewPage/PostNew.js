import React from "react";
import { connect } from "react-redux";
import { EPT } from "./partials/EditablePartText";
import { EPI } from "./partials/EditablePartImage";
import { Redirect } from "react-router-dom";
import { NewInput, PostContainer, NewPartButton } from "./partials/styled";
import { FaEdit, FaSave } from "react-icons/fa";
import { EditButton, NewButtonBar } from "./partials/styled";
import * as actionCreators from "../../store/actions/index";
import { Page } from "../../components/Layout/RouteContainer/styled";
class PostNewPage extends React.Component {
  state = {
    valid: false,
    newPost: {
      title: {
        editing: true,
        value: ""
      },
      banner: {
        editing: true
      },
      parts: []
    }
  };

  verify = () => {
    let valid = true;
    if (this.state.newPost.title !== "") {
      if (this.state.newPost.parts.length > 0) {
        this.state.newPost.parts.forEach(part => {
          if (part.type === "text") {
            valid = part.content_text !== "" && valid;
          } else {
            valid = part.url !== "" && valid;
          }
        });
      } else {
        valid = false;
      }
    } else {
      valid = false;
      if (this.state.newPost.banner.value === "") {
        this.setState({
          newPost: {
            ...this.state.newPost,
            banner: { editing: false, value: "/logo512.png" }
          }
        });
      }
    }
    this.setState({ valid });
    console.log("valid:", valid, "state.valid:", this.state.valid);
  };

  changeIndex = (from, to) => {
    const updatedPost = { ...this.state.newPost };
    if (to === "up") {
      const p = updatedPost.parts.splice(from, 1)[0];
      updatedPost.parts.splice(from - 1, 0, p);
    } else {
      const p = updatedPost.parts.splice(from, 1)[0];
      updatedPost.parts.splice(from + 1, 0, p);
    }
    this.setState({ newPost: updatedPost });
  };
  changeTitle = e => {
    const updatedPost = { ...this.state.newPost };
    updatedPost.title.value = e.target.value;
    this.setState({
      newPost: updatedPost,
      valid: updatedPost.title.value !== ""
    });
  };
  changeBanner = e => {
    const updatedPost = { ...this.state.newPost };
    updatedPost.banner.value = e.target.value;
    this.setState({ newPost: updatedPost });
  };

  changePartTitle = (index, event) => {
    const updatedPost = { ...this.state.newPost };
    updatedPost.parts[index].title = event.target.value;
    this.setState({ newPost: updatedPost });
  };

  changePartContent = (index, event) => {
    const updatedPost = { ...this.state.newPost };
    updatedPost.parts[index].content_text = event.target.value;
    this.setState({ newPost: updatedPost });
  };
  changePartImage = (index, event) => {
    const updatedPost = { ...this.state.newPost };
    updatedPost.parts[index].url = event.target.value;
    this.setState({ newPost: updatedPost });
  };
  changePartSubtitle = (index, event) => {
    const updatedPost = { ...this.state.newPost };
    updatedPost.parts[index].subtitle = event.target.value;
    this.setState({ newPost: updatedPost });
  };
  changePartType = (index, type) => {
    const updatedPost = { ...this.state.newPost };
    updatedPost.parts[index].type = type;
    this.setState({ newPost: updatedPost });
  };

  addNewPart = () => {
    const updatedPost = { ...this.state.newPost };
    updatedPost.parts.push({
      type: "text",
      title: "",
      editing: true
    });
    this.setState({ newPost: updatedPost, valid: false });
  };
  removePart = index => {
    const updatedPost = { ...this.state.newPost };
    updatedPost.parts.splice(index, 1);
    this.setState({ newPost: updatedPost });
    this.verify();
  };
  editPart = index => {
    const updatedPost = { ...this.state.newPost };
    updatedPost.parts[index].editing = !updatedPost.parts[index].editing;
    updatedPost.parts.forEach((part, arrIndex) => {
      if (arrIndex !== index && updatedPost.parts[index].editing) {
        part.editing = false;
      }
    });
    this.setState({ newPost: updatedPost });
  };
  editTitle = () => {
    const updatedPost = { ...this.state.newPost };
    updatedPost.parts.forEach(part => (part.editing = false));
    updatedPost.title.editing = !updatedPost.title.editing;
    this.setState({ newPost: updatedPost });
  };
  editBanner = () => {
    const updatedPost = { ...this.state.newPost };
    updatedPost.parts.forEach(part => (part.editing = false));
    updatedPost.banner.editing = !updatedPost.banner.editing;
    this.setState({ newPost: updatedPost });
  };
  render() {
    if (!this.props.auth) {
      console.log(this.props);
      this.props.onNotify();
      //Redirect to login once its there
      return <Redirect to="/"></Redirect>;
    }
    return (
      <Page>
        <PostContainer>
          <h2 style={{ marginBottom: 70 }}>Make a new Post</h2>
          {this.state.newPost.title.editing ? (
            <React.Fragment>
              <NewInput
                title="true"
                type="text"
                onChange={this.changeTitle}
                className="title"
                onFocus={event => {
                  if (this.state.newPost.title.value) {
                    event.target.value = this.state.newPost.title.value;
                  }
                }}
                placeholder={
                  this.state.newPost.title.value
                    ? this.state.newPost.title.value
                    : "Title"
                }
              />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <h1>{this.state.newPost.title.value}</h1>
            </React.Fragment>
          )}
          {this.state.newPost.title.editing ? (
            <NewButtonBar show title="true">
              <EditButton onClick={this.editTitle}>
                <FaSave />
              </EditButton>
            </NewButtonBar>
          ) : (
            <NewButtonBar show>
              <EditButton onClick={this.editTitle}>
                <FaEdit />
              </EditButton>
            </NewButtonBar>
          )}
          {this.state.newPost.banner.editing ? (
            <React.Fragment>
              <NewInput
                title="true"
                type="text"
                onChange={this.changeBanner}
                onFocus={event => {
                  if (this.state.newPost.banner.value) {
                    event.target.value = this.state.newPost.banner.value;
                  }
                }}
                placeholder={
                  this.state.newPost.banner.value
                    ? this.state.newPost.banner.value
                    : "Banner"
                }
              />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <img src={this.state.newPost.banner.value} alt="banner" />
            </React.Fragment>
          )}
          {this.state.newPost.banner.editing ? (
            <NewButtonBar show title="true">
              <EditButton onClick={this.editBanner}>
                <FaSave />
              </EditButton>
            </NewButtonBar>
          ) : (
            <NewButtonBar show title="true">
              <EditButton onClick={this.editBanner}>
                <FaEdit />
              </EditButton>
            </NewButtonBar>
          )}
          <div>
            {this.state.newPost.parts.map((part, index) => {
              return (
                <div className="formGroup" key={index}>
                  {part.type === "text" ? (
                    <EPT
                      part={part}
                      index={index}
                      changePartTitle={this.changePartTitle}
                      changePartContent={this.changePartContent}
                      changePartType={this.changePartType}
                      togglePart={this.editPart}
                      removePart={this.removePart}
                      changeIndex={this.changeIndex}
                    ></EPT>
                  ) : (
                    <EPI
                      changePartType={this.changePartType}
                      part={part}
                      removePart={this.removePart}
                      togglePart={this.editPart}
                      index={index}
                      changePartImage={this.changePartImage}
                      changePartSubtitle={this.changePartSubtitle}
                      changeIndex={this.changeIndex}
                    ></EPI>
                  )}
                </div>
              );
            })}
            <NewPartButton onClick={this.addNewPart}>New part</NewPartButton>
          </div>
          <NewPartButton onClick={this.verify}>Verify Post</NewPartButton>
          <NewPartButton
            onClick={() => this.props.onAddNewPost(this.state.newPost)}
            disabled={!this.state.valid}
          >
            Post
          </NewPartButton>
        </PostContainer>
      </Page>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddNewPost: post =>
      dispatch(
        actionCreators.processNewPost({
          post,
          writer: {
            name: "dannyboy",
            avatar_url: "nothing here"
          }
        })
      ),
    onNotify: data =>
      dispatch(
        actionCreators.processNotification({
          type: data.type,
          message: data.message
        })
      )
  };
};
const mapStateToProps = state => {
  return {
    auth: state.auth.auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostNewPage);
