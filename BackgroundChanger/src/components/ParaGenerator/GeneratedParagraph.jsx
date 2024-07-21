import { useRecoilValue } from "recoil";
import { paraAtom } from "../../state/paraAtom";
import React from "react";
import { Box, Typography, Paper } from "@mui/material";

export const GeneratedParagraph = React.memo(function GeneratedParagraph() {
  const paraValue = useRecoilValue(paraAtom);

  if (!paraValue) return null;

  return (
    <Box sx={{ mt: 3 }}>
      <Paper elevation={1} sx={{ p: 3, backgroundColor: '#f9f9f9' }}>
        <Typography variant="body1" sx={{ fontFamily: 'Arial, sans-serif', textAlign: 'justify' }}>
          {paraValue}
        </Typography>
      </Paper>
    </Box>
  );
});
