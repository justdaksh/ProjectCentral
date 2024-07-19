import { useRecoilValue } from "recoil";
import { paraAtom } from "../../state/paraAtom";
import React from "react";
import { Box, Typography } from "@mui/material";

export const GeneratedParagraph = React.memo(function GeneratedParagraph() {
    const paraValue = useRecoilValue(paraAtom);
  
    if (!paraValue) return null;
  
    return (
      <Box sx={{ mt: 3 }}>
        <Typography>{paraValue}</Typography>
      </Box>
    );
  });