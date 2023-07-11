import React from 'react'
import { Box, TextField, MenuItem } from '@mui/material';
import { useState } from 'react';

export const LessonSelect = () => {
    const [country, setCountry] = useState<string[]>([])
    console.log(country);
    return (
        <Box width="250px">
            {/* <TextField label="ÜLKE SEÇİNİZ" select fullWidth value={country} onChange={(e) => setCountry(e.target.value)}>
                <MenuItem value="TR">TÜRKİYE</MenuItem>
                <MenuItem value="USA">ABD</MenuItem>
                <MenuItem value="FR">FRANSA</MenuItem>
            </TextField> */}

            <TextField
                SelectProps={{
                    multiple: true
                }}
                label="ÜLKE SEÇİNİZ" select fullWidth value={country} onChange={(e) => setCountry(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value)}>
                <MenuItem value="TR">TÜRKİYE</MenuItem>
                <MenuItem value="USA">ABD</MenuItem>
                <MenuItem value="FR">FRANSA</MenuItem>
            </TextField>
        </Box >
    );
};
