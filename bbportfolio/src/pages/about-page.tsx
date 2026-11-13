import React from "react";
import { Box, Card, CardContent, Divider, Stack, Typography } from "@mui/material";
import PageLayout from "../components/page-layout";
import InfoPanel from "../components/info-panel";
import { Link } from "react-router-dom";

const AboutPage: React.FC = () => (
    <PageLayout>
        <Stack spacing={3}>
            <Card component="article" variant="outlined">
                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                    <Typography variant="overline" color="primary">
                        About me
                    </Typography>
                    <Typography variant="h2" component="h1" gutterBottom>
                        Byron Boskell
                    </Typography>
                    <Typography variant="h5" component="p" >
                        Software Developer and Video Game Creator
                    </Typography>
                    <Typography component="p" >
                        Software Development is about solving problems with code. The core principles are the same in serious Software Development or Video Game Creation. I am always looking for ways to improve and I hope to encounter more interesting problems whether it is in field of Game Development or more serious software.
                    </Typography>
                    <Typography component="p" >
                        I like to spend my time following my interests and avoiding social networking platforms (which suck up time with no real benefit). My interests include tabletop roleplaying games, writing, drawing and of course making video games.
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
                <Card component="article" variant="outlined">
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Timeline:
                        </Typography>

                        <Divider sx={{ mb: 3 }} />
                        <Stack spacing={2}>
                            <Stack>
                                <Typography >
                                    <b>2018:</b> Diploma of Professional Game Development <Link to="https://aie.edu.au/">(Academy of Interactive Entertainment)</Link>
                                </Typography>
                                <Typography >
                                    Learnt the basics of game programming and gained experience with group projects.
                                </Typography>
                            </Stack>
                            <Stack>
                                <Typography >
                                    <b>2019:</b> Advanced Diploma of Professional Game Development <Link to="https://aie.edu.au/">(Academy of Interactive Entertainment)</Link>
                                </Typography>
                                <Typography >
                                    Expanded my skills and worked on a six month group project, mimicking game studio environment.
                                </Typography>
                            </Stack>
                            <Stack>
                                <Typography >
                                    <b>2020 - 2021:</b> Lords of Illic Development and job hunting
                                </Typography>
                                <Typography >
                                    Used Lords of Illic as a platform to improve and gain experience for long term projects. (Development for lords of illic began in mid 2019 and finished in early 2025)
                                </Typography>
                            </Stack>
                            <Stack>
                                <Typography >
                                    <b>2021 (December) - 2023:</b> VR Unity Developer at <Link to="https://www.ivai.com.au/">Insight via Artificial Intelligence</Link> (IVAI)
                                </Typography>
                                <Typography >
                                    During the start the start of my working at IVAI I worked on Unity projects in VR.
                                </Typography>
                            </Stack>
                            <Stack>
                                <Typography >
                                    <b>2023 - 2026 (October):</b> Software Developer at Insight via Artificial Intelligence (IVAI)
                                </Typography>
                                <Typography >
                                    From 2023 I had to take on a variety of different projects including Full Stack Development and Android Development. I worked on a few smaller Unity projects during this time.
                                </Typography>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>

                <InfoPanel />
            </Box>
        </Stack>
    </PageLayout >
);

export default AboutPage;