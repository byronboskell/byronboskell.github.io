import React from "react";
import { Box, Card, CardContent, Divider, Stack, Typography } from "@mui/material";
import PageLayout from "../components/page-layout";
import InfoPanel from "../components/info-panel";
import SiteNavigationButton from "../components/site-navigation-button";

const HomePage: React.FC = () => (
    <PageLayout>
        <Stack spacing={3}>
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

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.7fr) minmax(240px, 0.8fr)" },
                    gap: 3,
                    alignItems: "start",
                }}
            >
                <Stack spacing={3}>
                    <Card component="article" variant="outlined">
                        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                            <Typography variant="h4" component="h2" gutterBottom>
                                Lords of Illic
                            </Typography>
                            <Divider sx={{ mb: 3 }} />

                            <Stack spacing={2}>
                                <Typography color="text.secondary">
                                    An original game that I worked on for five years, alongside my studies, job searching and working at Insight via Artificial Intelligence.
                                </Typography>
                                <Typography color="text.secondary">
                                    A strategy game made in Unity.
                                </Typography>
                                <SiteNavigationButton
                                    link={{ to: "/projects/ahp", label: "More Information" }}
                                    isActive={false}
                                    variant="outlined"
                                />
                            </Stack>
                        </CardContent>
                    </Card>

                    <Card component="article" variant="outlined">
                        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                            <Typography variant="h4" component="h2" gutterBottom>
                                Aboriginal Health Project
                            </Typography>
                            <Divider sx={{ mb: 3 }} />

                            <Stack spacing={2}>
                                <Typography color="text.secondary">
                                    The first project I undertook when working for Insight via Artificial Intelligence.
                                </Typography>
                                <Typography color="text.secondary">
                                    A Unity based VR experience which helps trains nurses to diagnose diabetic foot complications.
                                </Typography>
                                <SiteNavigationButton
                                    link={{ to: "/projects/illic", label: "More Information" }}
                                    isActive={false}
                                    variant="outlined"
                                />
                            </Stack>
                        </CardContent>
                    </Card>

                    <Card component="article" variant="outlined">
                        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                            <Typography variant="h4" component="h2" gutterBottom>
                                Clear Call
                            </Typography>
                            <Divider sx={{ mb: 3 }} />

                            <Stack spacing={2}>
                                <Typography color="text.secondary">
                                    A web-based telemedicine platform to improve outcomes for patients with diabetic foot complications.
                                </Typography>
                                <Typography color="text.secondary">
                                    During this project I had to transition my skills from Unity to full stack development making use of typescript, react and aws services.
                                </Typography>
                                <SiteNavigationButton
                                    link={{ to: "/projects/telehealth", label: "More Information" }}
                                    isActive={false}
                                    variant="outlined"
                                />
                            </Stack>
                        </CardContent>
                    </Card>
                </Stack>
                <InfoPanel />
            </Box>
        </Stack>
    </PageLayout>
);

export default HomePage;