import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import { paraAtom, wordAtom } from "../../state/paraAtom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { MyTextField } from "./MyTextField";
import { GenerateButton } from "./GenerateButton";
import { GeneratedParagraph } from "./GeneratedParagraph";

const words = [
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua",
    "enim",
    "ad",
    "minim",
    "veniam",
    "quis",
    "nostrud",
    "exercitation",
    "ullamco",
    "laboris",
    "nisi",
    "ut",
    "aliquip",
    "ex",
    "ea",
    "commodo",
    "consequat",
  ];
  export function ParaGenerator() {
    const setParaValue = useSetRecoilState(paraAtom);
    const wordCountValue = useRecoilValue(wordAtom);
  
    const result = React.useMemo(() => {
      return Array.from({ length: wordCountValue }, () => words[Math.floor(Math.random() * words.length)]);
    }, [wordCountValue]);
  
    const generateParagraph = React.useCallback((event) => {
      event.preventDefault();
      setParaValue(result.join(" "));
    }, [result, setParaValue]);
  
    return (
      <Box sx={{ maxWidth: 800, margin: "auto", textAlign: "center" }}>
        <Typography variant="h4" sx={{ mb: 3, mt: 6 }}>
          Para Generator
        </Typography>
        <Box
          component="form"
          onSubmit={generateParagraph}
          sx={{ display: "flex", alignItems: "center", gap: 2 }}
        >
          <MyTextField />
          <GenerateButton />
        </Box>
        <GeneratedParagraph />
      </Box>
    );
  }