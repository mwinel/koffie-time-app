import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PostConsumer } from "../../context";
import Avatar from "../Avatar";
import CreateDate from "../Date";

class Post extends Component {
  render() {
    const {
      title,
      image,
      created_on,
      read_time,
      user,
      avatar
    } = this.props.post;
    const styles = {
      backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 50%",
      height: "185px"
    };

    return (
      <div className="col-sm-4">
        <div className="post-card pb-1">
          <PostConsumer>
            {value => (
              <>
                <div>
                  <Link to={"/post"}>
                    <div className="image-container">
                      <div className="card-image" style={styles}></div>
                    </div>
                  </Link>
                </div>
                <div className="flex flex-row flex-nowrap">
                  <div className="pt-4">
                    <CreateDate created_on={created_on} />{" "}
                    <span className="dot-divider">&#183;</span>{" "}
                    <small>{read_time}</small>
                  </div>
                  <Link to={"/post"}>
                    <h5 className="card-title font-weight-bold pt-2">
                      {title}
                    </h5>
                  </Link>
                  <div className="py-2">
                    <Avatar avatar={avatar} />
                    <small className="username">
                      <Link to={"/"}>@{user}</Link>
                    </small>
                  </div>
                </div>
              </>
            )}
          </PostConsumer>
        </div>
      </div>
    );
  }
}

export default Post;
