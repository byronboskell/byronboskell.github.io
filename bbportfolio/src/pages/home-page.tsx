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
                    I got my Advanced Diploma of Professional Game Development from the Academy of Interactive Entertainment in 2019.
                    <br />
                    <br />
                    After that I spent the following two years working on my own video game Lords of Illic.
                    <br />
                    <br />
                    For two months shy of five years I have been working at the Insight via Artificial Intelligence (IVAI).
                    <br />
                    <br />
                    Through the last couple of years I expanded my skills beyond the real of game development as I have had to adapt to use many other platforms and programming languages.
                    <br />
                    <br />
                    Since I do not have a formal degree I cannot call myself a Software Engineer, through the various projects I have worked on the last (almost) five years I have had to rise to that level.
                    <br />
                    <br />
                    For that purpose I have spent a lot of time reading and watching videos about Software Engineering to catch up my skills.
                    <br />
                </Typography>
            </Stack>
        </PageLayout>
    );
};

export default HomePage;