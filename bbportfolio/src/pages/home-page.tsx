import React from "react";
import { Stack, Typography } from "@mui/material";
import PageLayout from "../components/page-layout";

const HomePage: React.FC = () => {
    return (
        <PageLayout>
            <Stack>
                <Typography variant="h2" component="h1" gutterBottom>
                    Byron Boskell
                </Typography>
                <Typography variant="h5" component="h2" color="text.secondary" gutterBottom>
                    Software Developer and Video Game Creator
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    Welcome to my portfolio website!
                    <br />
                    Explore my projects, skills, and experience below.
                    <br />
                    (Website still in development)
                </Typography>
            </Stack>
        </PageLayout>
    );
};

export default HomePage;