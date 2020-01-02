import React, { Component } from "react";
import { PostConsumer } from "../context";
import Post from "./Post";
import Pagination from "./Pagination";
import Search from "./Search";

class Posts extends Component {
  render() {
    return (
      <div className="container">
        <h6 className="grid-title pt-4 pb-2">All Posts</h6>
        <div>
          <div className="row">
            <div className="col-sm-8">
              <div className="row">
                <PostConsumer>
                  {value => {
                    return value.posts.map(post => {
                      return <Post key={post.id} post={post} />;
                    });
                  }}
                </PostConsumer>
              </div>
              <Pagination />
            </div>
            <div className="col-sm-4">
              <Search />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
