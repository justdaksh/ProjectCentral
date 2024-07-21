import { TextField } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "../../state/GitInfo";

export const MyUsernameField = React.memo(function MyUsernameField() {
    const [username,setusername] = useRecoilState(userAtom);
    const handleChange = (event) => {
      setusername(event.target.value);
    };
  return (
    <>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Enter your Username"
        value={username}
        onChange={handleChange}
        type="text"
        sx={{ marginBottom: 2 }}
      />
    </>
  );
});
