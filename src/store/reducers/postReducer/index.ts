import { PostsState, PostsRequestStates } from "@/types";

const initialState: PostsState = {
  pending: false,
  posts: [],
  error: null,
};

export default (
  state = initialState,
  {
    type,
    payload,
  }: {
    type: PostsRequestStates;
    payload: { posts: PostsState["posts"]; error: PostsState["error"] };
  }
) => {
  switch (type) {
    case "FETCH_POSTS_PENDING":
      return {
        ...state,
        pending: true,
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        pending: false,
        error: null,
        posts: payload.posts,
      };
    case "FETCH_POSTS_FAIL":
      return {
        ...state,
        pending: false,
        posts: [],
        error: payload.error,
      };
    default: 
      return {
        ...state,
      };
  }
};
