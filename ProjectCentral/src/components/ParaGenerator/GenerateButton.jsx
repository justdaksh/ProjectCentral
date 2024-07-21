import { Button } from "@mui/material";
import React from "react";


export const GenerateButton = React.memo(function GenerateButton({name}) {
    return (
      <Button
        type="submit"
        variant="contained"
        sx={{
          bgcolor: "text.primary",
          color: "background.paper",
          borderRadius: "20px",
          px: 3,
          "&:hover": {
            bgcolor: "text.secondary",
          },
        }}
      >
        {name}
      </Button>
    );
  });