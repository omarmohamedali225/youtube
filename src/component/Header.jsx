import React from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  InputBase,
  Stack,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import {
  Keyboard,
  KeyboardVoice,
  Menu,
  NotificationsNone,
  Search,
  VideoCall,
} from "@mui/icons-material";
import LogoYoutube from "../component/LogoYoutube";
import "./styles/header.css";
export default function Header({ SetOpen }) {
  const hideIconMeida1 = useMediaQuery("(max-width:440px)");
  const hideIconMeida2 = useMediaQuery("(max-width:300px)");
  return (
    <Stack
      sx={{
        px: { md: 3, sm: 2, xs: 1 },
        py: 1,
        justifyContent: "space-between",
        width:'100%',
        zIndex:1,
        background:"#121212",
        top:0
      }}
      direction={"row"}
      position={"fixed"}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Tooltip title="فتح القائمة">
          <IconButton
            onClick={() => {
              SetOpen(true);
            }}
          >
            <Menu />
          </IconButton>
        </Tooltip>
        <LogoYoutube />
      </Box>
      <Stack
        direction={"row"}
        sx={{ width: "50%", display: { xs: "none", sm: "flex" } }}
        className="header-box"
      >
        <Box component={"form"} className="boxSearch" sx={{ flexGrow: 1 }}>
          <InputBase
            placeholder="بحث"
            className="search"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  sx={{ "&:hover": { bgcolor: "transparent" } }}
                >
                  <Keyboard />
                </IconButton>
              </InputAdornment>
            }
          />
          <Tooltip title="بحث">
            <Button size="small" className="search_btn">
              <Search fontSize="inherit" />
            </Button>
          </Tooltip>
        </Box>
        <Tooltip title="البحث بأستخدام طلبات صوتية">
          <IconButton className="micro">
            <KeyboardVoice />
          </IconButton>
        </Tooltip>
      </Stack>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Stack direction={"row"} spacing={{ xs: 0, sm: 2 }}>
          <Box sx={{ display: { sm: "none" } }}>
            <Tooltip title="بحث">
              <IconButton>
                <Search />
              </IconButton>
            </Tooltip>
            <Tooltip title="البحث بأستخدام طلبات صوتية">
              <IconButton sx={hideIconMeida1 ? { display: "none" } : null}>
                <KeyboardVoice />
              </IconButton>
            </Tooltip>
          </Box>
          <Tooltip title="إنشاء">
            <IconButton sx={hideIconMeida2 ? { display: "none" } : null}>
              <VideoCall />
            </IconButton>
          </Tooltip>
          <Tooltip title="الإشعارات">
            <IconButton sx={hideIconMeida1 ? { display: "none" } : null}>
              <NotificationsNone />
            </IconButton>
          </Tooltip>
          <Tooltip title="الملف الشخصي">
            <Avatar sx={{ bgcolor: "#5D4038", color: "white" }}>O</Avatar>
          </Tooltip>
        </Stack>
      </Box>
    </Stack>
  );
}
