import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import unName from "../assets/unnamed.jpg";
import {
  MoreHoriz,
  Reply,
  ThumbDownOffAlt,
  ThumbUpOffAlt,
  Verified,
} from "@mui/icons-material";

export default function VideoYoutubeShow({data}) {
  const media = useMediaQuery("(max-width:960px)");
  const ButtonLikeRight = styled(Button)(() => ({
    "&.MuiButton-root": {
      borderRadius: "0 20px 20px 0",
      background: "#2D2D2F",
      color: "white",
      "&:hover": {
        background: "#424344",
      },
    },
  }));
  const ButtonLikeLeft = styled(Button)(() => ({
    "&.MuiButton-root": {
      borderRadius: "20px 0 0 20px",
      background: "#2D2D2F",
      color: "white",
      "&:hover": {
        background: "#424344",
      },
    },
  }));
  return (
    <Grid item md={7} lg={7} xs={12} sx={{ width: "100%" }}>
      <Box sx={{ width: "100%", height: 350, mb: 1, ml: { md: 2 } }}>
        <iframe
          style={{ width: "100%", height: "100%" }}
          src={`https://www.youtube.com/embed/${data.id}`}
          title="أغنية انت تقدر كاملة / محمود العسيلي و محمد عدوية / اعلان بنك مصر رمضان 2018"
          frameلآorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Box>
      <Typography variant="h6" sx={{ ml: { md: 2 } }}>
        {data.title}
      </Typography>
      <Grid sx={{ ml: { md: 1 } }} container>
        <Grid item xs={12}>
          <Stack direction={"row"} spacing={0.5} sx={{ mt: 1 }}>
            <Avatar src={unName} />
            <Box>
              <Typography variant="body1">
                {data.channelTitle} <Verified fontSize={"inherit"} />
              </Typography>
              <Typography
                component={"h4"}
                color={"text.secondary"}
                variant="body2"
              >
                6.86 مليون مشترك
              </Typography>
            </Box>
            <Button
              size="small"
              variant="contained"
              sx={{
                borderRadius: "30px",
                height: 36,
                mt: "7px!important",
                bgcolor: "white",
                "&:hover": { bgcolor: "#D9D9D9" },
              }}
            >
              اشتراك
            </Button>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          display={"flex"}
          sx={{ ml: "auto" }}
          mt={!media ? -6.5 : 0}
          alignItems={"flex-end"}
          justifyContent={"flex-end"}
        >
          <Stack
            direction={"row"}
            spacing={1}
            sx={{ position: "relative", mt: { xs: 2 }, mb: { xs: 2 } }}
          >
            <Box display={"flex"} sx={{ flexShrink: 0 }}>
              <ButtonLikeLeft>
                <ThumbUpOffAlt />
                <Typography variant="body2" sx={{ ml: 0.5 }}>
                  4.1 الف
                </Typography>
              </ButtonLikeLeft>
              <Divider
                light={false}
                sx={{ bgcolor: "white" }}
                orientation="vertical"
                flexItem
                variant="middle"
              />
              <ButtonLikeRight>
                <ThumbDownOffAlt />
              </ButtonLikeRight>
            </Box>
            <Box display={"flex"}>
              <Button
                size="small"
                variant="contained"
                sx={{
                  borderRadius: "30px",
                  flexShrink: 0,
                  bgcolor: "#2D2D2F",
                  color: "white",
                  "&:hover": { bgcolor: "#424344" },
                }}
              >
                <Reply />
                <Typography variant="body2">مشاركة</Typography>
              </Button>
              <IconButton
                size="small"
                sx={{
                  ml: { xs: 2, md: 1 },
                  bgcolor: "#2D2D2F",
                  "&:hover": { bgcolor: "#424344" },
                }}
              >
                <MoreHoriz />
              </IconButton>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
}
