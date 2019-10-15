const initialState = {
  authenticated: true,
  posts: [
    {
      id: "1",
      title: "Why you shouldn't trust your government",
      banner: {
        url: "/logo512.png"
      },
      parts: [
        {
          type: "text",
          title: "Obama was a fraud, here's why",
          content_text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, nihil eaque, repellendus aliquid molestiae earum iure optio distinctio pariatur consectetur rem architecto facilis. Distinctio fugit non vitae assumenda repudiandae ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, nihil eaque, repellendus aliquid molestiae earum iure optio distinctio pariatur consectetur rem architecto facilis. Distinctio fugit non vitae assumenda repudiandae ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, nihil eaque, repellendus aliquid molestiae earum iure optio distinctio pariatur consectetur rem architecto facilis. Distinctio fugit non vitae assumenda repudiandae ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, nihil eaque, repellendus aliquid molestiae earum iure optio distinctio pariatur consectetur rem architecto facilis. Distinctio fugit non vitae assumenda repudiandae ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, nihil eaque, repellendus aliquid molestiae earum iure optio distinctio pariatur consectetur rem architecto facilis. Distinctio fugit non vitae assumenda repudiandae ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, nihil eaque, repellendus \n\n\n\n aliquid molestiae earum iure optio distinctio pariatur consectetur rem architecto facilis. Distinctio fugit non vitae assumenda repudiandae ut! "
        }
      ],
      writer: { name: "dannyboy", avatar_url: "nothing here" },
      createdAt: "2019-10-01T09:35:16.580Z"
    },
    {
      id: "2",
      title: "Why you shouldn't trust your government 2000",
      banner: {
        url: "/logo512.png"
      },
      parts: [
        {
          type: "text",
          title: "Obama was a fraud, here's why",
          content_text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, nihil eaque, repellendus aliquid molestiae earum iure optio distinctio pariatur consectetur rem architecto facilis. Distinctio fugit non vitae assumenda repudiandae ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, nihil eaque, repellendus aliquid molestiae earum iure optio distinctio pariatur consectetur rem architecto facilis. Distinctio fugit non vitae assumenda repudiandae ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, nihil eaque, repellendus aliquid molestiae earum iure optio distinctio pariatur consectetur rem architecto facilis. Distinctio fugit non vitae assumenda repudiandae ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, nihil eaque, repellendus aliquid molestiae earum iure optio distinctio pariatur consectetur rem architecto facilis. Distinctio fugit non vitae assumenda repudiandae ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, nihil eaque, repellendus aliquid molestiae earum iure optio distinctio pariatur consectetur rem architecto facilis. Distinctio fugit non vitae assumenda repudiandae ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, nihil eaque, repellendus \n\n\n\n aliquid molestiae earum iure optio distinctio pariatur consectetur rem architecto facilis. Distinctio fugit non vitae assumenda repudiandae ut! "
        }
      ],
      writer: { name: "dannyboy", avatar_url: "nothing here" },
      createdAt: "2019-10-01T09:35:16.580Z"
    },
    {
      id: "3",
      title: "Why you shouldn't trust your government 3000",
      banner: {
        url: "/logo512.png"
      },
      parts: [
        {
          type: "text",
          title: "Obama was a fraud, here's why",
          content_text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, nihil eaque, repellendus aliquid molestiae earum iure optio distinctio pariatur consectetur rem architecto facilis. Distinctio fugit non vitae assumenda repudiandae ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, nihil eaque, repellendus aliquid molestiae earum iure optio distinctio pariatur consectetur rem architecto facilis. Distinctio fugit non vitae assumenda repudiandae ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, nihil eaque, repellendus aliquid molestiae earum iure optio distinctio pariatur consectetur rem architecto facilis. Distinctio fugit non vitae assumenda repudiandae ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, nihil eaque, repellendus aliquid molestiae earum iure optio distinctio pariatur consectetur rem architecto facilis. Distinctio fugit non vitae assumenda repudiandae ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, nihil eaque, repellendus aliquid molestiae earum iure optio distinctio pariatur consectetur rem architecto facilis. Distinctio fugit non vitae assumenda repudiandae ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, nihil eaque, repellendus \n\n\n\n aliquid molestiae earum iure optio distinctio pariatur consectetur rem architecto facilis. Distinctio fugit non vitae assumenda repudiandae ut! "
        }
      ],
      writer: { name: "dannyboy", avatar_url: "nothing here" },
      createdAt: "2019-10-01T09:35:16.580Z"
    }
  ]
};
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_NEW_POST":
      const posts = [...state.posts];
      posts.push(action.post);
      return { ...state, posts };

    default:
      return state;
  }
};
