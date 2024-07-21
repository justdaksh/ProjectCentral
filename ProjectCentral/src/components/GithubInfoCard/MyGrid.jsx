import { Button, Grid, Typography } from "@mui/material";

export function MyGrid({name, value}) {
    return (
        <>
            <Grid item mx={2}>
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
                    {value}
                  </Typography>
                  <Typography variant="button">{name}</Typography>
                </Button>
              </Grid>
        </>
    )
}