import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PostConsumer } from "../../context";
import Avatar from "../Avatar";
import CreateDate from "../Date";

class FeaturedPost extends Component {
  render() {
    const {
      title,
      image,
      user,
      avatar,
      created_on,
      read_time
    } = this.props.post;
    const styles = {
      backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 50%",
      height: "350px"
    };
    return (
      <PostConsumer>
        {value => (
          <>
            <div className="col-sm-7">
              <Link to={"/post"}>
                <div
                  className="featured-post-image-wrapper pb-5"
                  style={styles}
                ></div>
              </Link>
            </div>
            <div className="col-sm-5">
              <div className="pb-2">
                <CreateDate created_on={created_on} />{" "}
                <span className="dot-divider">&#183;</span>{" "}
                <small>{read_time}</small>
              </div>
              <Link to={"/post"}>
                <h2 className="card-title font-weight-bold">{title}</h2>
              </Link>
              <div className="flex flex-row flex-nowrap">
                <div className="py-2">
                  <Avatar avatar={avatar} />
                  <small className="username">
                    <Link to={"/"}>@{user}</Link>
                  </small>
                </div>
              </div>
            </div>
          </>
        )}
      </PostConsumer>
    );
  }
}

export default FeaturedPost;
