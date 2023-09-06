import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postSlice";

interface Post {
  id: string;
  title: string;
  content: string;
}

const AddPostForm: React.FC = () => {
  const dispatch = useDispatch();

  const users = useSelector((state: any) => state.users);

  const [post, setPost] = useState<Post>({
    id: "",
    title: "",
    content: "",
  });

  const [userId, setUserId] = useState("");

  const canSave =
    Boolean(post.title) && Boolean(post.content) && Boolean(userId);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    dispatch(addPost(post.title, post.content, userId));

    setPost({
      id: "",
      title: "",
      content: "",
    });
  };

  const renderUserOptions = () => {
    return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">User</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="User"
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        >
          {users.map((user: any) => (
            <MenuItem key={user.id} value={user.id}>
              {user.username}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  return (
    <Box p={5}>
      <Typography variant="h4">Add a post</Typography>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        name="title"
        value={post.title}
        onChange={handleInputChange}
        margin="normal"
      />
      <TextField
        label="Content"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        name="content"
        value={post.content}
        onChange={handleInputChange}
        margin="normal"
      />
      {renderUserOptions()}
      <Button
        variant="contained"
        color="primary"
        disabled={!canSave}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
};

export default AddPostForm;
