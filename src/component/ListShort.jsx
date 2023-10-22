import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { FileDownload, Home, Subscriptions, VideoLibrary, VideoSettings } from "@mui/icons-material";

export default function ListShort() {
  return (
    <Stack direction={"column"} spacing={2} sx={{width:90,position:"fixed",top:40,ml:.3,mt:3,px:1,display:{xs:"none",md:"block"}}}>
      <Button sx={{display:'block',color:"white"}}>
        <Home />
        <Typography component={"div"} sx={{fontSize:"10px"}}>الصفحه الرئيسية</Typography>
      </Button>
      <Button sx={{display:'block',color:"white"}}>
        <VideoSettings />
        <Typography component={"div"} sx={{fontSize:"10px"}}>Shorts</Typography>
      </Button>
      <Button sx={{display:'block',color:"white"}}>
        <Subscriptions />
        <Typography component={"div"} sx={{fontSize:"10px"}}>الأشتراكات</Typography>
      </Button>
      <Button sx={{display:'block',color:"white"}}>
        <VideoLibrary />
        <Typography component={"div"} sx={{fontSize:"10px"}}>المكتبة</Typography>
      </Button>
      <Button sx={{display:'block',color:"white"}}>
        <FileDownload />
        <Typography component={"div"} sx={{fontSize:"10px"}}>عمليات التنزيل</Typography>
      </Button>
    </Stack>
  );
}
