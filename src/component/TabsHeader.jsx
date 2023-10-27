import { TabContext, TabList } from '@mui/lab'
import {  Box, Chip, Tab, styled, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

export default function TabsHeader({allow}) {
  const theme = useTheme()
  const stateBtnTab = useMediaQuery(theme.breakpoints.down('md'))
  const TabItem = styled(Tab)(()=>({
    "&.active":{
      "& .MuiChip-root":{
        backgroundColor:"white",
        color:"black",
        "&:hover":{
          backgroundColor:"white"
        }
      }
    },
    "& .MuiChip-root":{
      backgroundColor:"#222222",
    },
    "&:hover":{
      "& .MuiChip-root":{
        backgroundColor:"#3F3F3F",
      }
    },
    "&.MuiTab-root":{
      padding:0,
      minWidth:'fit-content',
      marginRight:15,
      "&:focus":{
        color:"transparent"
      },
    },
  }))
  return (
      <Box>
        <TabContext value='كل المحتوي'>
        <TabList indicatorColor={null} scrollButtons={stateBtnTab||allow} aria-label='scroll links youtube' variant='scrollable'>
          <TabItem className='active' label={<Chip label="كل المحتوي"/>} value={"كل المحتوي"}/>
          <TabItem label={<Chip label="موسيقي"/>} value={"موسيقي"}/>
          <TabItem label={<Chip label="تشكيلات"/>} value={"تشكيلات"}/>
          <TabItem label={<Chip label="مباشر"/>} value={"مباشر"}/>
          <TabItem label={<Chip label="برامج كوميدية"/>} value={"برامج كوميدية"}/>
          <TabItem label={<Chip label="كرة قدم"/>} value={"كرة قدم"}/>
          <TabItem label={<Chip label="القنوات التي تم تحميلها مؤخرا"/>} value={"القنوات التي تم تحميلها مؤخرا"}/>
          <TabItem label={<Chip label="تمت مشاهدتها"/>} value={"تمت مشاهدتها"}/>
          <TabItem label={<Chip label="محتوي جديد لك"/>} value={"محتوي جديد لك"}/>
        </TabList>
      </TabContext>
      </Box>
  )
}
