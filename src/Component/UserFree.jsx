import React from 'react';
import { Box, Typography, Button } from "@mui/material";
import { styled } from '@mui/system';

const UserFree = () => {
    return (
        <>
        <Box sx={{alignItems: "center", justifyContent: "center", display: {xs:"flex" ,md:"none"}, }}>
               <Typography sx={{ fontSize: { xs: 20,  }, fontWeight: 600, color: "#FBBC05" }}>
                    Edit profile
                    <Box mt={1} >
                        <img src="./user4.png" alt=""  height={100} width={100}/>
                    </Box>
                </Typography>
                </Box>
            <Box sx={{px:{md:3 ,xs:1} ,mt:2}}>
                <Box sx={{ border: '1px solid #394EE1', borderRadius: 2, display: "flex", justifyContent: "space-between",px:{md:3,xs:1} }}>
                    <Box sx={{ maxWidth: { md: 400 }, mt: { md: 3, xs: 2 }, pl: 2, flex: 1 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: 12, md: 30 }, fontWeight: 700, color: "#1D1D1D", textWrap: "nowrap" }}>
                            Sorry!! you Have no Credit
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{ mt: 1, fontSize: { xs: 10, md: 18 }, fontWeight: 400, color: "#dddddd" }}>
                            You have no premium plan of Bizchrome if you want to more growth so update plan and achieve credit that helps you more Achievements!!
                        </Typography>
                        <Button variant="outlined" sx={{ fontSize: { xs: 10, md: 18 }, fontWeight: 700, color: "#394EE1", borderRadius: 50, mt: 1, mb: { xs: 2 } }}>
                            Visit plan
                        </Button>
                    </Box>
                    <StyledImage
                        sx={{mt:2}}
                        src="./user2.png"
                        alt=""
                    />
                </Box>
                <Box sx={{ border: '1px solid #394EE1', borderRadius: 2, display: "flex", justifyContent: "space-between", mt:{md:5,xs:2},px:{md:3,xs:1} }}>
                    <Box sx={{ maxWidth: { md: 400 }, mt: { md: 3, xs: 2 }, pl: 2, flex: 1 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: 12, md: 30 }, fontWeight: 700, color: "#1D1D1D", textWrap: "nowrap" }}>
                        Your Active plan!!
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{ mt: 1, fontSize: { xs: 10, md: 18 }, fontWeight: 400, color: "#dddddd" }}>
                        Hie!! you are using free plan of Bizchormeif you are satiesfied with Bizchrome so upgrade your Plan!!                        </Typography>
                        <Button variant="outlined" sx={{ fontSize: { xs: 10, md: 18 }, fontWeight: 700, color: "#394EE1", borderRadius: 50, mt: 1, mb: { xs: 2 } }}>
                        Active Now
                        </Button>
                    </Box>
                    <StyledImage
                        sx={{mt:2}}
                        src="./user3.png"
                        alt=""
                    />
                </Box>
            </Box>
            {/* <Typography sx={{ alignItems: "center", justifyContent: "center", display:"flex" }}>
            Don’t panic if you are free . BIZchrome is here. @2024
            </Typography> */}
        </>
    )
}

const StyledImage = styled('img')({
    width: '100px',
    height: '100px',
    '@media (min-width: 768px)': {
        width: '250px',
        height: '200px',
    },
});

export default UserFree;
