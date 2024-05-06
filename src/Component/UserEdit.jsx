import React from 'react'
import { Box, Typography, Button } from "@mui/material";
import { styled } from '@mui/system';

const UserEdit = () => {
    return (
        <>
            <Box sx={{ alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", px: 3 }}>
                <Box sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}>



                    <Typography sx={{ fontSize: { xs: 20, md: 45 }, fontWeight: 600, color: "#FBBC05" }}>
                        Edit profile
                        <Box mt={1}>
                            <StyledImage src="./user4.png" alt="" />
                        </Box>
                    </Typography>
                </Box>
                <Box sx={{ display: { md: "flex" }, width: { md: 900, xs: "100%" }, justifyContent: "space-between" }}>
                    <Box>
                        <Typography sx={{ fontSize: { md: 26, xs: 17 }, fontWeight: 600, color: "#394EE1" }}>
                            First Name
                        </Typography>
                        <Box sx={{ border: '1px solid #858585', px: { md: 2, xs: 1 }, width: { md: 400 }, height: { md: 50, xs: 40 }, alignItems: "center", borderRadius: 1, display: "flex" }} >

                            <Typography sx={{ fontSize: { md: 24, xs: 15 }, fontWeight: 500, color: "#858585", alignItems: "center" }}>
                                Divya
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ mt: { xs: 2, md: 0 } }}>
                        <Typography sx={{ fontSize: { md: 26, xs: 17 }, fontWeight: 600, color: "#394EE1", }}>
                            Last Name
                        </Typography>
                        <Box sx={{ border: '1px solid #858585', px: { md: 2, xs: 1 }, width: { md: 400 }, height: { md: 50, xs: 40 }, alignItems: "center", borderRadius: 1, display: "flex" }} >

                            <Typography sx={{ fontSize: { md: 24, xs: 15 }, fontWeight: 500, color: "#858585", alignItems: "center" }}>
                                Sharma
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ width: { md: 900, xs: "100%" } }} mt={2}>
                    <Typography sx={{ fontSize: { md: 26, xs: 17 }, fontWeight: 600, color: "#394EE1" }}>
                        Email
                    </Typography>
                    <Box sx={{ border: '1px solid #858585', px: { md: 2, xs: 1 }, height: { md: 50, xs: 40 }, alignItems: "center", borderRadius: 1, display: "flex" }} >

                        <Typography sx={{ fontSize: { md: 24, xs: 15 }, fontWeight: 500, color: "#858585", alignItems: "center" }}>
                            divya12@gmail.com
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ width: { md: 900, xs: "100%" } }} mt={2}>
                    <Typography sx={{ fontSize: { md: 26, xs: 17 }, fontWeight: 600, color: "#394EE1" }}>
                        Address
                    </Typography>
                    <Box sx={{ border: '1px solid #858585', px: { md: 2, xs: 1 }, height: { md: 50, xs: 40 }, alignItems: "center", borderRadius: 1, display: "flex" }} >

                        <Typography sx={{ fontSize: { md: 24, xs: 15 }, fontWeight: 500, color: "#858585", alignItems: "center" }}>
                            335001,sgnr
                        </Typography>
                    </Box>
                </Box>
                <Box mt={5} mb={5} sx={{ width: { xs: "100%" }, color: "#394EE1", alignItems: "center", display: "flex", gap: 5, justifyContent: { xs: "space-between", md: "center" } }}>
                    <Button variant="contained" sx={{
                        fontSize: { md: 22, xs: 12 }, fontWeight: 600, color: "#394EE1",
                        backgroundColor: "white",
                        boxShadow: "1px  6px 6px rgba(0, 0, 0, 0.16)",
                    }}>Cancle</Button>
                    <Button variant="contained" sx={{ fontSize: { md: 22, xs: 12 }, fontWeight: 600, backgroundColor: "#394EE1", }}>Save changes</Button>
                </Box>

            </Box>
        </>
    )
}
const StyledImage = styled('img')({
    width: '100px',
    height: '100px',
    '@media (min-width: 900px)': {
        width: '200px',
        height: '200px',
    },
});

export default UserEdit