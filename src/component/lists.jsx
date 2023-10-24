import "./styles/drawer.css";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { ListItemsOne, ListItemsTwo, ListSubscribe } from "./data/dataList";
import LogoYoutube from "./LogoYoutube";
import { Menu } from "@mui/icons-material";
import {useList} from '../hooks/OpenLists'
export default function Lists() {
  const {IsOpen,SetOpen} = useList()
  const Item = styled(ListItem)(() => ({
    paddingLeft: 16,
    paddingRight: 16,
    "& .MuiListItemButton-root": {
      borderRadius: 10,
    },
  }));
  return (
    <>
      <Drawer
        variant="temporary"
        open={IsOpen}
        onClose={() => {
          SetOpen(false);
        }}
        anchor="left"
      >
        <Box>
          <List disablePadding>
            <Item
              sx={{
                px: 4,
                py: 1,
                position: "sticky",
                top: 0,
                bgcolor: "#353535",
                zIndex: 1,
                mb:1
              }}
            >
              <ListItemIcon>
                <Tooltip title="غلق القائمة">
                  <IconButton
                    edge="start"
                    onClick={() => {
                      SetOpen(false);
                    }}
                  >
                    <Menu />
                  </IconButton>
                </Tooltip>
              </ListItemIcon>
              <LogoYoutube />
            </Item>
            {ListItemsOne.map((item, index) => (
              <Item disablePadding key={index} >
                <ListItemButton className={item.active ? "active" : undefined}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>
                    <Typography
                      noWrap
                      dir={"auto"}
                      sx={{ fontWeight: 500, fontSize: 13 }}
                    >
                      {item.title}
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </Item>
            ))}
            <Divider light={false} sx={{ bgcolor: "white", my: 2 }} />
            {ListItemsTwo.map((item, index) => (
              <Item disablePadding key={index}>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>
                    <Typography
                      noWrap
                      dir={"auto"}
                      sx={{ fontWeight: 500, fontSize: 13 }}
                    >
                      {item.title}
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </Item>
            ))}
            <Divider light={false} sx={{ bgcolor: "white", my: 2 }} />
            <Typography sx={{ fontWeight: 500, px: 2 }}>الاشتراكات</Typography>
            {ListSubscribe.map((item, index) => (
              <Item disablePadding key={index}>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar src={item.src} />
                  </ListItemAvatar>
                  <ListItemText>
                    <Typography
                      dir={"auto"}
                      sx={{ fontWeight: 500, fontSize: 13 }}
                      noWrap
                    >
                      {item.name}
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </Item>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
