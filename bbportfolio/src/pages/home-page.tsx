import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import SiteNavigation from "../components/site-navigation";

const HomePage: React.FC = () => {
    return (
        <Stack>
            <SiteNavigation />
            <Box
                className="homepage-container"
                sx={{
                    textAlign: "center",
                    py: 8,
                    px: 2,
                    minHeight: "80vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >


                <Typography variant="h2" component="h1" gutterBottom>
                    Byron Boskell
                </Typography>
                <Typography variant="h5" component="h2" color="text.secondary" gutterBottom>
                    Web Developer & Designer
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    Welcome to my portfolio website!
                    <br />
                    Explore my projects, skills, and experience below.
                    <br />
                    (Website still in development)
                </Typography>
            </Box>
        </Stack>
    );
};

export default HomePage;