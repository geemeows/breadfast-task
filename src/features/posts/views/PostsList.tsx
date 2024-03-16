import { PostsTable } from "../components/PostsTable"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/reducers/rootReducer";
import { useEffect, useMemo } from "react";
import { fetchPostsRequest } from "@/store/actions";
import { useNavigate } from "react-router-dom";
import { getTableColumns } from "../utils/columns";

const PostsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts, pending } = useSelector((state: RootState) => state.posts);
  const loadingSkeleton = useMemo(() => Array.from(Array(10).keys()), []);

  const columns = getTableColumns(pending, navigate, () => dispatch(fetchPostsRequest()));

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);

  
  return (
    <div>
      <PostsTable
        data={posts.length ? posts : loadingSkeleton }
        columns={columns}
      />
    </div>
  );
}

export default PostsList