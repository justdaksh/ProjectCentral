
import { useRecoilValue, } from "recoil";
import { GitInfo } from "../../state/GitInfo";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { MyGrid } from "./MyGrid";

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
    };
    return date.toLocaleDateString('en-US', options);
  }
  

export function MainInfo() {
  const GitInfoValue = useRecoilValue(GitInfo);
  if (!GitInfoValue) return <></>;
  return (
    <>
      <Box sx={{width: '100%',display:"flex",justifyContent:"center", mt:3}}>
        <Card variant="outlined" sx={{ width: 500, position: "relative" }}>
          <CardMedia
            component="img"
            sx={{ height: 140 }}
            image="https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="ProfileTexture"
          />
          <div className="my-avatar">
            <Avatar
              alt="Daksh Sharma"
              src={GitInfoValue.avatar_url}
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
                <Typography>@{GitInfoValue.login}</Typography>
              <Typography gutterBottom variant="h5" component="div">
                {GitInfoValue.name}
                <Button variant="text" sx={{ padding: 0, margin: 0 }}></Button>
                <Typography variant="body1">{GitInfoValue.location}</Typography>
              </Typography>
            </Box>
            <Typography varient="body2" color="text.secondary" mb={3}>
              {GitInfoValue.bio}
            </Typography>
            <Divider />
          </CardContent>
          <CardActions
            sx={{ justifyContent: "space-around", marginBottom: "15px" }}
          >
            <Grid container spacing={5}>
              <MyGrid name="followers" value={GitInfoValue.followers}/>
              <MyGrid name="following" value={GitInfoValue.following}/>
              <MyGrid name="Public Repos" value={GitInfoValue.public_repos}/>
              <MyGrid name="Public Gists" value={GitInfoValue.public_gists}/>
              <MyGrid name="Created At" value={formatDate(GitInfoValue.created_at)}/>
              <MyGrid name="Updated At" value={formatDate(GitInfoValue.updated_at)}/>
            </Grid>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
