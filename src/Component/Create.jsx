import React from 'react'
import { Box, Typography, Button } from "@mui/material";

const Create = () => {
    return (
        <>
            <Box sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                <Typography sx={{ fontSize: 22, fontWeight: 600 }}>
                    Meet Our Dedicated{' '}
                    <span style={{ color: '#367AFF' }}>Freelancers</span> Your Trusted Service{' '}
                    <span style={{ color: '#367AFF' }}>Providers!!</span>
                </Typography>
            </Box>
        </>
    )
}

export default Create