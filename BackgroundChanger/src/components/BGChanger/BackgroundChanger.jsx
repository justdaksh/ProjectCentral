import React, { useCallback } from "react";
import { ButtonGroup } from "@mui/material";
import Paper from "@mui/material/Paper";
import { MyButton } from "./Button";
import { BackgroundManager } from "./BackgroundManager";
import { useSetRecoilState } from "recoil";
import { bgatom } from "../../state/bgatom";

export function BackgroundChanger() {
  const setBgColor = useSetRecoilState(bgatom);

  const handleColorChange = useCallback(
    (color) => {
      setBgColor(color);
    },
    [setBgColor]
  );
  return (
    <>
      <BackgroundManager />
      <Paper
        elevation={24}
        sx={{
          position: "fixed",
          bottom: 10,
          left: 0,
          right: 0,
          width: 700,
          display: "flex",
          justifyContent: "center",
          transform: "translate(50%)",
        }}
      >
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <MyButton color="red" onClick={handleColorChange} />
          <MyButton color="yellow" onClick={handleColorChange} />
          <MyButton color="black" onClick={handleColorChange} />
          <MyButton color="purple" onClick={handleColorChange} />
          <MyButton color="green" onClick={handleColorChange} />
          <MyButton color="blue" onClick={handleColorChange} />
          <MyButton color="default" onClick={handleColorChange} />
        </ButtonGroup>
      </Paper>
    </>
  );
}
