import * as types from "./actionTypes";
import { processNotification } from "./Notification";
export const processNewPost = data => {
  const post = {
    title: data.post.title.value,
    writer: {
      name: data.writer.name ? data.writer.name : "Daniel",
      avatar_url: data.writer.avatar_url ? data.writer.avatar_url : "nothing"
    },
    likes: 0,
    banner: data.post.banner.value,
    date_posted: Date.now(),
    parts: data.post.parts
      .filter(part => {
        if (part.type === "text") {
          return part.title && part.content_text;
        } else {
          return part.url && part.subtitle;
        }
      })
      .map(part => {
        return part.type === "text"
          ? { title: part.title.value, content_text: part.content_text }
          : {
              url: part.url,
              subtitle: part.subtitle
            };
      })
  };
  return dispatch => {
    dispatch({ type: types.saveNewPost, post });
    dispatch(
      processNotification({
        type: "success",
        message: "Added post successfully"
      })
    );
  };
};
