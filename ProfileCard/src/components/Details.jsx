import { Button, Grid, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { details } from "../state/atom";

export function Details({ demo }) {
  const [value, setValue] = useRecoilState(details(demo));

  const handleClick = () => {
    setValue((prevDetails) => ({
      ...prevDetails,
      amount: prevDetails.amount + 1,
    }));
  };

  return (
    <>
      <Grid item mx={2} onClick={handleClick}>
        <Button
          size="small"
          color="primary"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "black" }}
            component="div"
          >
            {value.amount}
          </Typography>
          <Typography variant="button">{value.name}</Typography>
        </Button>
      </Grid>
    </>
  );
}
