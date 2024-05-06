import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { Box, Button, Typography } from '@mui/material';

function CallModel() {
    return (
        <Box sx={{ width: '100%' }}>
            <Box
                sx={{
                    backgroundColor: '#FFD24E',
                    color: 'black',
                    padding: { xs: 5, sm: 14 },
                    display: 'flex',
                    gap: 4,
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: 'blue',
                        color: 'white',
                        borderRadius: 'sm',
                        padding: 1,
                    }}
                >
                    <IoIosArrowBack size={22} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: { xs: 'md', sm: 'xl' } }}>
                    Rahul
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: 'gray.200',
                        padding: 4,
                        position: 'relative',
                        height: '85vh',
                        width: { xs: '100%', sm: 800 },
                        paddingTop: 14,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 10,
                    }}
                >
                    <img
                        src="./image 20.png"
                        alt="videoCallImage"
                        style={{ width: 160, height: 160, borderRadius: '50%' }}
                    />
                    <div>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '2xl' }}>
                            Rahul
                        </Typography>
                        <Typography variant="h5" sx={{ color: 'gray.400', fontSize: '2xl' }}>
                            Calling
                        </Typography>
                    </div>
                    <Button
                        variant="contained"
                        color="error"
                        size="large"
                        sx={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)' }}
                    >
                        <RxCross2 />
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default CallModel;
