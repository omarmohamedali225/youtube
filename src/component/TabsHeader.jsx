import { TabContext, TabList } from '@mui/lab'
import {  Box, Chip, Tab, styled, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

export default function TabsHeader() {
  const theme = useTheme()
  const stateBtnTab = useMediaQuery(theme.breakpoints.down('md'))
  const TabItem = styled(Tab)(({})=>({
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
      <Box position={"fixed"} sx={{mt:7,top:0,bgcolor:"#121212",width:"100%",zIndex:1}}>
        <TabContext value='1'>
        <TabList indicatorColor={null} allowScrollButtonsMobile scrollButtons={stateBtnTab} aria-label='scroll links youtube' variant='scrollable'>
          <TabItem className='active' label={<Chip label="كل المحتوي"/>} value={"1"}/>
          <TabItem label={<Chip label="موسيقي"/>} value={"2"}/>
          <TabItem label={<Chip label="تشكيلات"/>} value={"3"}/>
          <TabItem label={<Chip label="مباشر"/>} value={"4"}/>
          <TabItem label={<Chip label="برامج كوميدية"/>} value={"5"}/>
          <TabItem label={<Chip label="كرة قدم"/>} value={"6"}/>
          <TabItem label={<Chip label="القنوات التي تم تحميلها مؤخرا"/>} value={"7"}/>
          <TabItem label={<Chip label="تمت مشاهدتها"/>} value={"8"}/>
          <TabItem label={<Chip label="محتوي جديد لك"/>} value={"9"}/>
        </TabList>
      </TabContext>
      </Box>
  )
}
