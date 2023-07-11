import React from 'react'
import { Switch, Stack } from '@mui/material'
import { useState } from 'react';
export const LessonSwitch = () => {
    const [isAccept, setIsAccept] = useState(false)
    const handleChange = () => {

    }
    return (
        <Stack spacing={4}>
            <Stack direction="row" spacing={2}>
                <Switch id='ReactMaterialSwitchId'
                    checked={isAccept}
                    onChange={(e) => setIsAccept(e.target.checked)}
                />
            </Stack>
        </Stack>

    )
}

