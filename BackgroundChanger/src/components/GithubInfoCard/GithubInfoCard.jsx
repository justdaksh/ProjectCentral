import { Box, Card, CardContent, Typography } from "@mui/material";
import { MainInfo } from "./MainInfo";
import { InputName } from "./InputName";

export function GithubInfoCard() {
  return (
    <>
    <Box mt={10} display="flex" justifyContent="center" alignItems="center">
      <Card sx={{ width: 700, padding: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 3 }}>
            Github Info Card
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <InputName />
            <MainInfo />
          </Box>
        </CardContent>
      </Card>
    </Box>
    </>
  );
}
