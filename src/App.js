import React from 'react'
import Home from './pages/Home'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Video from './pages/Video';
import Layout from './layout/Layout';
import Notfound from './pages/Notfound';
export default function App() {
  const Theme = createTheme({
    direction: "rtl",
    palette: {
      mode: "dark"
    }
  })

  const CacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
  })

  const router = createBrowserRouter([
    {
      path: "/", element: <Layout />, children: [
        { path: "/", element: <Home /> },
        { path: "/video/:id", element: <Video /> },
        { path: "*", element: <Notfound /> }
      ]
    },
  ])

  document.dir = "rtl"
  return (
    <CacheProvider value={CacheRTL}>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </CacheProvider>
  )
}

