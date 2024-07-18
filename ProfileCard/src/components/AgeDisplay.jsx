import { Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { Age } from "../state/atom";

function AgeDisplay() {
  const [ageValue, setAge] = useRecoilState(Age);
  return (
    <Typography
      variant="subtitle1"
      component="span"
      onClick={() => setAge(ageValue + 1)}
      sx={{ cursor: "pointer", color:"black" }}
    >
      {ageValue}
    </Typography>
  );
}

export default AgeDisplay;
