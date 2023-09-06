import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import Post from "./Post";
import AddPostForm from "./AddPostForm";

const PostsList = () => {
  const posts = useSelector((state: any) => state.posts);

  return (
    <Container maxWidth="md">
      <AddPostForm />
      {posts.map((post: any) => (
        <Post key={post.id} post={post} />
      ))}
    </Container>
  );
};

export default PostsList;
