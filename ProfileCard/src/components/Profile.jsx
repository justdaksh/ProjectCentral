import {
  Avatar,
  Box,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import dakshImage from "../assets/peakpx.jpg";
import AgeDisplay from "./AgeDisplay";
import { Details } from "./Details";



export default function Profile() {
  return (
      <Card variant="outlined" sx={{ maxWidth: 345, position: "relative" }}>
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          image="https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="ProfileTexture"
        />
        <div className="my-avatar">
          <Avatar
            alt="Daksh Sharma"
            src={dakshImage}
            sx={{
              width: 80,
              height: 80,
              border: "1px solid white",
              position: "absolute",
              top: "90px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </div>
        <CardContent sx={{ mt: 4 }}>
          <Box>
            <Typography gutterBottom variant="h5" component="div">
              Daksh Sharma
              <Button variant="text" sx={{padding:0, margin:0}}>
                <AgeDisplay/>
              </Button>
              <Typography variant="body1">India</Typography>
            </Typography>
          </Box>
          <Typography varient="body2" color="text.secondary" mb={3}>
            Hello I am under the water woohuu! and you can&apos;t see me.
          </Typography>
        <Divider />
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around", marginBottom: "15px"}}>
          <Grid container spacing={5}>
            <Details demo={{amount:100, name:"Followers"}}/>
            <Details demo={{amount:100, name:"Likes"}}/>
            <Details demo={{amount:100, name:"Photos"}}/>
          </Grid>
        </CardActions>
      </Card>
  );
}
