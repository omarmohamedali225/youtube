import React from "react";
import {
  Menu,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Fade,
  Divider,
  Typography,
} from "@mui/material";
import { videoOption } from "../data/dataVideoOption";
export default function MenuFN({anchorEl,setAnchorEl}) {
  const open = Boolean(anchorEl);
  const HandelClose = () => {
    setAnchorEl(null);
  };
  return (
    <Menu
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 0 }}
      id="list-option"
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      elevation={2}
      open={open}
      aria-labelledby="list-video"
      onClose={HandelClose}
      keepMounted
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
  );
}
