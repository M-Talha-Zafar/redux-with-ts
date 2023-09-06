import "./index.css";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

function Counter() {
  const { count } = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Typography variant="h1" align="center">
          {count}
        </Typography>
        <Box display="flex" gap={2}>
          <Button
            onClick={() => {
              dispatch(increment());
            }}
            variant="contained"
          >
            <Typography variant="h3"> + </Typography>
          </Button>
          <Button
            onClick={() => {
              dispatch(decrement());
            }}
            variant="contained"
          >
            <Typography variant="h3">-</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Counter;
