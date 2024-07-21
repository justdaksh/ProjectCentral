import { Box } from "@mui/material";
import { GenerateButton } from "../ParaGenerator/GenerateButton";
import { MyUsernameField } from "./MyUsernameField";
import { useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { GitInfo, userAtom } from "../../state/GitInfo";
import axios from "axios";

export function InputName() {
  const username = useRecoilValue(userAtom);
  const setGitInfo = useSetRecoilState(GitInfo);
  

  const generateInfo = useCallback(
    (event) => {
      event.preventDefault();
      axios.get(`https://api.github.com/users/${username}`).then((res) => {
        setGitInfo(res.data);
      });
    },
    [setGitInfo, username]
  );

  return (
    <>
      <Box
        component="form"
        onSubmit={generateInfo}
        sx={{ width:500, display: "flex", alignItems: "center", flexDirection:"column", gap: 2 }}
      >
        <MyUsernameField />
        <GenerateButton name="Get Info"/>
      </Box>
    </>
  );
}
