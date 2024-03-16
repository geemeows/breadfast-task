export type PostsRequestStates = 'FETCH_POSTS_PENDING' | 'FETCH_POSTS_SUCCESS' | 'FETCH_POSTS_FAIL';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostsState = {
  pending: boolean;
  posts: Post[];
  error: Error<string> | null | string;
}