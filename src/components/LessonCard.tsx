import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
export const LessonCard = () => {
    return (
        <Card>
            <CardMedia />
            <CardContent>
                <Typography variant='h5' component="div">
                    BAŞLIĞIM
                </Typography>
                <Typography variant='body2' component="p">
                    BAŞLIĞIM
                </Typography>
            </CardContent>
            <CardActions>
                <Button color='error'>TEMİZLE</Button>
                <Button>KAYDET</Button>
            </CardActions>
        </Card>
    )
}
