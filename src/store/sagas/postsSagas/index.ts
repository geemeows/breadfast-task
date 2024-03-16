import { fetchPostsFail, fetchPostsSuccess } from '@/store/actions';
import { Post } from '@/types'
import axiosClient from '@/utils/axios'
import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

const getPosts = () => axiosClient.get<{ data: Post[]}>("/posts");

function* fetchPostsSaga() {
  try {
    const res: { data: Post[] } = yield call(getPosts);
    yield put(
      fetchPostsSuccess({
        posts: res.data
      })
    )
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      yield put(
        fetchPostsFail({
          error: e.message,
        })
      );
    }
  }
}

function* postsSaga() {
  yield all([takeLatest('FETCH_POSTS_PENDING', fetchPostsSaga)])
}

export default postsSaga;