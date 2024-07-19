import { TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { wordAtom } from "../../state/paraAtom";
import React from "react";

export const MyTextField = React.memo(function MyTextField() {
  const [wordCountValue, setWordCountValue] = useRecoilState(wordAtom);

  const handleChange = (event) => {
    setWordCountValue(parseInt(event.target.value, 10) || 0);
  };
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Enter Number of Words"
      value={wordCountValue}
      onChange={handleChange}
      type="number"
    />
  );
});
