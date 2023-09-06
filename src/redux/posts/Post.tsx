import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";

interface PostProps {
  post: {
    id: number;
    title: string;
    content: string;
    userId: string;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { title, content } = post;
  const users = useSelector((state: any) => state.users);
  const author = users.find((user: any) => user.id === post.userId);

  return (
    <Card sx={{ p: 5, m: 5, background: "#F1F1F1" }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography>{content}</Typography>
        <Typography mt={5} variant="subtitle1">
          by {author ? author.username : "Unknown author"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
