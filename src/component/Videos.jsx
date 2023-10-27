import { MoreVert } from "@mui/icons-material";
import { Link as LinkRouter } from "react-router-dom";
import img from '../assets/me.jpg'
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  List,
  Link,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Stack,
  Tooltip,
  Typography,
  Fade,
} from "@mui/material";
import React, { useState } from "react";
import { videoOption } from "../data/dataVideoOption";
export default function Videos({data}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const HandelOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const HandelClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid
      container
      sx={{ px: { md: 3, sm: 2, xs: 1 }, py: 1, mt: 11 }}
      spacing={2}
    >
      {data.map((video) => (
        <Grid item xs={12} sm={6} md={4} key={video.videoId}>
          <Card
            sx={{
              position: "relative",
              minHeight: "100%",
              backgroundImage: "inherit",
            }}
          >
            <CardActionArea LinkComponent={LinkRouter} sx={{display:"flex"}} to={`/video/${video.videoId}`}>
              <CardMedia height={video.thumbnail[3].height} sx={{width:video.thumbnail[3].width}} src={video.thumbnail[3].url} component={"img"} />
            </CardActionArea>
            <CardContent sx={{ bgcolor: "#121212", pl: 0 }}>
              <Stack direction={"row"} spacing={1}>
                <Avatar sx={{ bgcolor: "#5D4038", color: "white" }} src={img}>O</Avatar>
                <Stack>
                  <IconButton
                    size="small"
                    id="list-video"
                    aria-expanded={open ? true : undefined}
                    aria-controls={open ? "list-option" : undefined}
                    aria-haspopup={true}
                    onClick={HandelOpen}
                    sx={{
                      position: "absolute",
                      right: 0,
                      "&:hover": {
                        backgroundColor: "#121212",
                      },
                    }}
                  >
                    <MoreVert fontSize="inherit"/>
                  </IconButton>
                  <Tooltip title={video.title} followCursor>
                    <Typography
                      variant="p"
                      component={"h6"}
                      className="titleVideo"
                      sx={{
                        display: "-webkit-box",
                        lineClamp: 2,
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <Link component={LinkRouter} to={`/video/${video.videoId}`} underline="none" color={"white"}>
                        {video.title}
                      </Link>
                    </Typography>
                  </Tooltip>
                  <Tooltip title={video.channelTitle} followCursor>
                    <Typography variant="body2" component={"p"}>
                      <Link component={LinkRouter} to={`/video/${video.videoId}`} underline="none" color={"text.secondary"}>
                        {video.channelTitle}
                      </Link>
                    </Typography>
                  </Tooltip>
                  <Typography variant="body2" color={"text.secondary"}>
                    {video.videoInfo}
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
      {/* متواجده هنا حتي يتم تحسين الاداء لكي لا يتم تكرارها معهم وتفقد ادائها */}
      <Menu
        TransitionComponent={Fade}
        TransitionProps={{timeout:0}}
        id="list-option"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        elevation={2}
        open={open}
        aria-labelledby="list-video"
        onClose={HandelClose}
      >
        <List sx={{ py: 0 }}>
          {videoOption.map((data, i) =>
            data.divider ? (
              <Divider sx={{ bgcolor: "white" }} key={i} />
            ) : (
              <ListItem disablePadding sx={{ pb: 1 }} key={i}>
                <ListItemButton sx={{ height: 30 }}>
                  <ListItemIcon sx={{ minWidth: 33 }}>{data.icon}</ListItemIcon>
                  <ListItemText>
                    <Typography variant="body2">{data.title}</Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Menu>
    </Grid>
  );
}
