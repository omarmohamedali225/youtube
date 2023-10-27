import React, { useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import TabVideos from "../component/TabsHeader";
import { Link } from "react-router-dom";
import MenuFN from "./MenuFN";
export default function VideosListYoutube({ dataListVideos }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl)
  const HandelOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <Grid item md={5} lg={5} xs={12} sx={{ width: "100%" }}>
      <Box px={{ md: 4 }} sx={{}}>
        <TabVideos allow={true} />
      </Box>
      {dataListVideos.map((video, i) => (
        <Box pl={{ md: 4 }} key={i}>
          <Card
            sx={{
              display: "flex",
              height: 120,
              position: "relative",
              backgroundImage: "inherit",
              mt: 1,
            }}
          >
            <CardActionArea
              LinkComponent={Link}
              to={`/video/${video.videoId}`}
              sx={{ display: "contents" }}
            >
              <CardMedia
                component={"img"}
                sx={{ height: 120, width: 160, objectFit: "fill" }}
                image={video.thumbnail[3].url}
              />
              <CardContent sx={{ width: "58%", pt: 0, pr: "10px", pl: "10px" }}>
                <Box sx={{ width: "90%" }}>
                  <Typography
                    fontSize={14}
                    sx={{
                      display: "-webkit-box",
                      lineClamp: 2,
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      pr: 1,
                    }}
                  >
                    {video.title}
                  </Typography>
                  <Typography fontSize={12} color={"text.secondary"}>
                    {video.channelTitle}
                  </Typography>
                  <Typography fontSize={12} color={"text.secondary"}>
                    {video.videoInfo}
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
            <IconButton
              size="small"
              sx={{
                position: "absolute",
                right: 0,
                top: 0,
                "&:hover": {
                  backgroundColor: "#121212",
                },
              }}
              onClick={HandelOpen}
              id="list-video"
              aria-expanded={open ? true : undefined}
              aria-controls={open ? "list-option" : undefined}
              aria-haspopup={true}
            >
              <MoreVert />
            </IconButton>
          </Card>
        </Box>
      ))}
      {/* متواجده هنا حتي يتم تحسين الاداء لكي لا يتم تكرارها معهم وتفقد ادائها */}
      <MenuFN setAnchorEl={setAnchorEl} anchorEl={anchorEl} />
    </Grid>
  );
}
