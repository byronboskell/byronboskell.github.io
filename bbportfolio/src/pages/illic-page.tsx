import React from "react";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import PageLayout from "../components/page-layout";

const IllicPage: React.FC = () => {
    return (
        <PageLayout>
            <Stack spacing={3}>
                <Card component="article" variant="outlined">
                    <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                        <Typography variant="overline" color="primary">
                            Strategy Video Game
                        </Typography>
                        <Typography variant="h3" component="h1" gutterBottom>
                            Lords of Illic
                        </Typography>
                        <Typography variant="h6" component="p" color="text.secondary">
                            A land of adventure awaits in the magical land of Illic. Follow the Prince's story as he goes from dreaming of being a strong king to making history. The Prince is not a fighter so he has to work with his allies to save everyone.
                        </Typography>
                    </CardContent>
                </Card>
                <Card component="article" variant="outlined">
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                        <Stack spacing={2}>
                            <Typography variant="h6" component="p" color="text.secondary">
                                Lords of Illic was a project that spanned five years. When it started I was new to Unity and still studying for my degree. I worked on it during my major production (a six month video game project in a team) alongside which I also took on an VR internship with SA Power Networks.
                            </Typography>
                            <Typography variant="h6" component="p" color="text.secondary">
                                I continued to work on it as I searched for a job. Making sure to put in normal work hours so I could continue to learn even without employment.
                            </Typography>
                            <Typography variant="h6" component="p" color="text.secondary">
                                Part of what helped me get my job at Insight via Artificial Intelligence was the fact I had automated testing in the project.
                            </Typography>
                            <Typography variant="h6" component="p" color="text.secondary">
                                When I got my job at Insight via Artificial Intelligence and started working on the Aboriginal Health Project, the need for good testing increased and between the two projects I expanded my abilities to create tests.
                            </Typography>
                            <Typography variant="h6" component="p" color="text.secondary">
                                Over the course of implementing testing into Lords of Illic I overhauled the entire game as my understanding increased.
                            </Typography>
                            <Typography variant="h6" component="p" color="text.secondary">
                                Making Lords of Illic was not a simple hobby project where I glued together some code without thought, it provided me with a set of problems that helped me learn software design and helped me adapt as my role at Insight via Artificial Intelligence expanded over time.
                            </Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
        </PageLayout>
    );
};

export default IllicPage;