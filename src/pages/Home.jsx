import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import { Box, Typography } from '@mui/material'


function Home() {
  return (
    <Box bgcolor="gray" height="100%">
      <Typography padding="2rem" variant="h5" textAlign="center">Select Chat</Typography>
    </Box>
  )
}

export default AppLayout()(Home)