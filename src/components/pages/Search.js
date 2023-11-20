import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function Fence (props) {

    return (
        <Box sx={{
            pt: 8,
            pb: 6,
          }}
          >
            <Typography
            color="text.primary"
            >Fence item</Typography>
          </Box>
    )
}