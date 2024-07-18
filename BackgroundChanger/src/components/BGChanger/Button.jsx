import React from "react";
import { Button } from "@mui/material";

export const MyButton = React.memo(function MyButton({ color, onClick }) {
  return (
    <Button
      style={{ backgroundColor: color }}
      sx={{ color: "teal" }}
      onClick={() => onClick(color)}
    >
      {color}
    </Button>
  );
});
