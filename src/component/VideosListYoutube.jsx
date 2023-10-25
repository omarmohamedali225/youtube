import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import v1 from "../assets/v1.avif";
import { MoreVert } from "@mui/icons-material";
import TabVideos from "../component/TabsHeader";
export default function VideosListYoutube() {
  return (
    <Grid item md={5} lg={5} xs={12} sx={{ width: "100%" }}>
      <Box px={{ md: 4 }} sx={{}}>
        <TabVideos allow={true} />
      </Box>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
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
            <CardMedia
              component={"img"}
              sx={{ height: 120, width: 160, objectFit: "fill" }}
              image={v1}
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
                  أغنية انت تقدر كاملة / محمود العسيلي و محمد عدوية / اعلان بنك
                  مصر رمضان 2018
                </Typography>
                <Typography fontSize={12} color={"text.secondary"}>
                  نجم ميوزك @ NGM MUSic
                </Typography>
                <Typography fontSize={12} color={"text.secondary"}>
                  497 ألف مشاهدة • قبل 4 أشهر
                </Typography>
              </Box>
            </CardContent>
            <IconButton
              size="small"
              sx={{ position: "absolute", right: 0, top: 0 }}
            >
              <MoreVert />
            </IconButton>
          </Card>
        </Box>
      ))}
    </Grid>
  );
}
