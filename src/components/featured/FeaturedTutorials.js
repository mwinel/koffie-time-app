import React from "react";
import Post from "./Post";
import { PostConsumer } from ".././../context";

const FeaturedTutorials = () => {
  return (
    <>
      <hr className="mt-3 mb-4"></hr>
      <div className="pb-2">
        <h6 className="grid-title pb-3">Tutorials</h6>
        <div className="row">
          <PostConsumer>
            {value => {
              return value.featuredTutorials.map(post => {
                return <Post key={post.id} post={post} />;
              });
            }}
          </PostConsumer>
        </div>
      </div>
    </>
  );
};

export default FeaturedTutorials;
