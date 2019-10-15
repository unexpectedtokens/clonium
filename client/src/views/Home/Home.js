import React from "react";
import { connect } from "react-redux";
import { Card } from "../../components/UI/Card";
import { CardGrid } from "../../components/UI/CardGrid";
const Home = props => {
  const move = to => {
    props.history.push(`/post/${to}`);
  };
  return (
    <CardGrid>
      {props.posts.map((post, index) => (
        <Card
          title={post.title}
          content={post.parts[0].content_text}
          key={index}
          click={() => move(post.id)}
        ></Card>
      ))}
    </CardGrid>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.post.posts
  };
};

export default connect(mapStateToProps)(Home);
