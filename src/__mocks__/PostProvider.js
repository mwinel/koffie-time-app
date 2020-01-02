import value from "../testHelpers";

export const PostContext = {
  Consumer(props) {
    return props.children(value);
  }
};
