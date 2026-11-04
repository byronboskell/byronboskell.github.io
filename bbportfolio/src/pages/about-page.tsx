import React from "react";
import { Box, Card, CardContent, Divider, Stack, Typography } from "@mui/material";
import PageLayout from "../components/page-layout";
import InfoPanel from "../components/info-panel";

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
                <Card component="article" variant="outlined">
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                        <Typography variant="h4" component="h2" gutterBottom>
                            My background
                        </Typography>
                        <Divider sx={{ mb: 3 }} />

                        <Stack spacing={2}>
                            <Typography color="text.secondary">
                                I earned an Advanced Diploma of Professional Game Development from
                                the Academy of Interactive Entertainment in 2019.
                            </Typography>
                            <Typography color="text.secondary">
                                After that, I spent two years working on my own video game, Lords
                                of Illic.
                            </Typography>
                            <Typography color="text.secondary">
                                I have worked at Insight via Artificial Intelligence (IVAI) for
                                almost five years.
                            </Typography>
                            <Typography color="text.secondary">
                                Over the last few years, I have expanded my skills beyond game
                                development, adapting to a range of platforms and programming
                                languages.
                            </Typography>
                            <Typography color="text.secondary">
                                My projects have helped me grow my software engineering skills.
                                I have also spent time learning from books and videos to continue
                                developing those skills.
                            </Typography>
                        </Stack>
                    </CardContent>
                </Card>

                <InfoPanel />
            </Box>
        </Stack>
    </PageLayout>
);

export default AboutPage;