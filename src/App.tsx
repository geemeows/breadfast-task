import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layout";

// Views
import PostsList from "@/features/posts/views/PostsList";
import EditPost from "./features/posts/views/EditPost";


export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/posts" element={<PostsList />} />
        <Route path="/post/:id" element={<EditPost />} />
        <Route path="*" element={<Navigate  to='/posts' replace />} />
      </Route>
    </Routes>
  );
}