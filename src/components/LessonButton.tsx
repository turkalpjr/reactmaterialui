
import React from 'react'
import { Button, Stack } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
export const LessonButton = () => {
  const Refresh = () => {
    alert("refresh!");
  }
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <Button variant='text'>TEXT</Button>
        <Button variant='outlined'>OUTLİNED</Button>
        <Button variant='contained'>CONTAİNED</Button>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button variant='outlined' color='primary'>mavi</Button>
        <Button variant='outlined' color='secondary'>mor</Button>
        <Button variant='outlined' color='success'>yeşil</Button>
        <Button variant='outlined' color='error'>kırmızı</Button>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button variant='contained' color='primary'>mavi</Button>
        <Button variant='contained' color='secondary'>mor</Button>
        <Button variant='contained' color='success'>yeşil</Button>
        <Button variant='contained' color='error'>kırmızı</Button>
      </Stack>

      <Stack direction="row" spacing={2} display="block">
        <Button variant='contained' size="small">mavi</Button>
        <Button variant='contained' size="medium">mavi</Button>
        <Button variant='contained' size="large">mavi</Button>
      </Stack>

      <Stack direction="row" spacing={2} display="block">
        <Button size="small" variant='contained' onClick={Refresh} startIcon={<RefreshIcon />}> Refresh</Button>

      </Stack>
    </Stack>
  )
}
