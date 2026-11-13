import React from "react";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import PageLayout from "../components/page-layout";
import ProjectSummaryCard from "../components/project-summary-card";

const HomePage: React.FC = () => (
    <PageLayout>
        <Stack spacing={2}>
            <Card component="article" variant="outlined">
                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                    <Typography variant="overline" color="primary">
                        Major Projects
                    </Typography>
                    <Typography variant="h2" component="h1" gutterBottom>
                        Byron Boskell
                    </Typography>
                    <Typography variant="h5" component="p" color="text.secondary">
                        Software Developer and Video Game Creator
                    </Typography>
                </CardContent>
            </Card>

            <Stack spacing={2}>
                <ProjectSummaryCard
                    projectName={"Clear Call"}
                    summary={[
                        "A web-based telemedicine platform to improve outcomes for patients with diabetic foot complications.",
                        "During this project I had to transition my skills from Unity to full stack development making use of typescript, react and aws services."
                    ]}
                    imageName={"./images/clear-call.png"}
                    link={"/projects/telehealth"}
                    objectFit="cover"
                    objectPosition="50% 35%"
                />

                <ProjectSummaryCard
                    projectName={"Lords of Illic"}
                    summary={[
                        "An original game that I worked on for five years, alongside my studies, job searching and working at Insight via Artificial Intelligence.",
                        "A strategy game made in Unity."
                    ]}
                    imageName={"./images/illic.png"}
                    link={"/projects/illic"}
                />

                <ProjectSummaryCard
                    projectName={"Aboriginal Health Project"}
                    summary={[
                        "The first project I undertook when working for Insight via Artificial Intelligence.",
                        "A Unity based VR experience which helps trains nurses to diagnose diabetic foot complications."
                    ]}
                    imageName={"./images/AHP.jpg"}
                    link={"/projects/ahp"}
                />
            </Stack>
        </Stack>
    </PageLayout >
);

export default HomePage;