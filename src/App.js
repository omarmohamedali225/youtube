import React from 'react'
import Home from './pages/Home'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';


const Theme = createTheme({
  direction:"rtl",
  palette:{
    mode:"dark"
  }
})

const CacheRTL = createCache({
  key:"muirtl",
  stylisPlugins:[prefixer,rtlPlugin]
})

document.dir = "rtl"

export default function App() {
  return (
    <CacheProvider value={CacheRTL}>
      <ThemeProvider theme={Theme}>
        <CssBaseline/>
      <Home/>
    </ThemeProvider>
    </CacheProvider>
  )
}
