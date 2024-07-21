import { useCallback } from "react";
import { ButtonGroup, Paper, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { MyButton } from "./Button";
import { BackgroundManager } from "./BackgroundManager";
import { useSetRecoilState } from "recoil";
import { bgatom } from "../../state/bgatom";

const ColorButton = styled(MyButton)(({ color }) => ({
  backgroundColor: color,
  color: color === 'yellow' || color === 'default' ? 'black' : 'white',
  '&:hover': {
    backgroundColor: color,
    opacity: 0.9,
  },
}));

const colors = ["red", "yellow", "black", "purple", "green", "blue", "white"];

export function BackgroundChanger() {
  const setBgColor = useSetRecoilState(bgatom);

  const handleColorChange = useCallback((color) => setBgColor(color), [setBgColor]);

  return (
    <>
      <BackgroundManager />
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={24}
          sx={{
            p: 3,
            borderRadius: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography variant="h6" align="center" gutterBottom>
            Choose a Background Color
          </Typography>
          <ButtonGroup variant="contained" aria-label="color selection">
            {colors.map((color) => (
              <ColorButton key={color} color={color} onClick={() => handleColorChange(color)}>
                {color}
              </ColorButton>
            ))}
          </ButtonGroup>
        </Paper>
      </Box>
    </>
  );
}