import React, { useState } from 'react'
import { InputAdornment, Stack, TextField } from '@mui/material'
export const LessonTextField = () => {
    const [value, setValue] = useState('');
    return (
        <Stack spacing={2} direction="row"  >
            <Stack>
                <TextField label="Ad" />
                <TextField label="Ad" variant="filled" />
                <TextField label="Ad" variant="standard" />
                <TextField label="Ad" variant="outlined" size="small" color="primary" />

                <TextField InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>TL</InputAdornment>
                    ),
                }} label="Toplam" variant="outlined" />

                <TextField InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>TL</InputAdornment>
                    ),
                }} label="Toplam" variant="outlined" />
            </Stack>

            <Stack direction="row">
                <TextField InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>TL</InputAdornment>
                    ),
                }} label="Toplam" variant="outlined" />
            </Stack>


            <Stack direction="row">
                <TextField
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    label="Şifre"
                    variant="outlined"
                    helperText={!value ? 'Lütfen şifrenizi giriniz' : 'Şifrenizi kimseyle paylaşmayınız'} />
            </Stack>
        </Stack>




    )
}
