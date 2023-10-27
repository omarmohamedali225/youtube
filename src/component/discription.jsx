import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Box, Collapse, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
export default function Discription({ data }) {
  const [open,setOpen] = useState(false)
  const HandelDataTime = () => {
    const time = new Date(data.publishDate);
    const locale = time.toLocaleDateString("en-eg");
    return locale;
  };
  return (
    <Box p={1}>
      <Paper elevation={3} sx={{cursor:"pointer",p:1}} onClick={()=>{setOpen(e=>!e)}}>
        <Typography variant="body2" component={"span"} sx={{ ml: 0.5 }}>
          <NumericFormat
            value={data.viewCount}
            displayType="text"
            thousandSeparator=","
          />
        </Typography>
        <Typography variant="body2" component={"span"} sx={{ ml: 0.5 }}>
          مشاهدة
        </Typography>
        <Typography variant="body2" component={"span"} sx={{ ml: 0.5 }}>
          تم عرضة في المره الاولي في {HandelDataTime()}
        </Typography>
        {!open?<ArrowDropDown/>:<ArrowDropUp/>}
        <Collapse in={open}>
          {data?.keywords?.map((item,i) => (
            <Typography color={"text.secondary"} key={i}>{"#"+item}</Typography>
          ))}
        </Collapse>
      </Paper>
    </Box>
  );
}
