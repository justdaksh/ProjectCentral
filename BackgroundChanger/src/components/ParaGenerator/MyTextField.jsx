import { TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { wordAtom } from "../../state/paraAtom";
import React from "react";

export const MyTextField = React.memo(function MyTextField() {
  const [wordCountValue, setWordCountValue] = useRecoilState(wordAtom);

  const handleChange = (event) => {
    const value = event.target.value;
    if (value === '' || (value.length <= 5 && /^\d+$/.test(value))) {
      setWordCountValue(parseInt(value, 10) || 0);
    }
  };

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Enter a 5-digit number"
      value={wordCountValue || ''}
      onChange={handleChange}
      type="text"
      inputProps={{
        maxLength: 5,
        pattern: "\\d*"
      }}
    />
  );
});