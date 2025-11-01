import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

const HomePage: React.FC = () => {
    return (
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
            <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
                <Button variant="contained" color="primary" href="#projects" disabled={true}>
                    Projects
                </Button>
                <Button variant="outlined" color="primary" href="#about" disabled={true}>
                    About
                </Button>
                <Button variant="outlined" color="primary" href="#contact" disabled={true}>
                    Contact
                </Button>
            </Stack>
        </Box>
    );
};

export default HomePage;