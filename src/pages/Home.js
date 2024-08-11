import React, { useState } from "react";
import ListShort from "../component/ListShort";
import TabsHeader from "../component/TabsHeader";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Videos from "../component/Videos";
import { useDataVideos } from "../hooks/DataVideoList";

export default function Home() {
  const { data, data1 } = useDataVideos();
  const [num, setNum] = useState("one");
  return (
    <>
      <Box sx={{ width: { md: "calc(100% - 90px)" }, ml: { md: "90px" } }}>
        <Box
          position={"fixed"}
          sx={{ mt: 7, top: 0, bgcolor: "#121212", width: "100%", zIndex: 1 }}
        >
          <TabsHeader />
          <ToggleButtonGroup
            sx={{mb:1,ml:1}}
            size="small"
            value={num}
            exclusive
            onChange={(_, newV) => {
              setNum(newV);
            }}
          >
            <ToggleButton value={"one"}>تعلم الإنجليزية من الصفر</ToggleButton>
            <ToggleButton value={"two"}>تعلم القواعد</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Videos data={num === "one" ? data : data1} />
      </Box>
      <ListShort />
    </>
  );
}
