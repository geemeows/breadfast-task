import { PostsRequestStates, PostsState } from "@/types";

export const fetchPostsRequest = (): { type: PostsRequestStates } => ({
  type: "FETCH_POSTS_PENDING",
});

export const fetchPostsSuccess = (payload: {
  posts: PostsState["posts"];
}): { type: PostsRequestStates; payload: { posts: PostsState["posts"] } } => ({
  type: "FETCH_POSTS_SUCCESS",
  payload,
});

export const fetchPostsFail = (payload: {
  error: PostsState["error"];
}): { type: PostsRequestStates; payload: { error: PostsState["error"] } } => ({
  type: "FETCH_POSTS_FAIL",
  payload,
});