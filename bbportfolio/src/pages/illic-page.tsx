import React from "react";
import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import PageLayout from "../components/page-layout";
import { Link } from "react-router-dom";

const IllicPage: React.FC = () => {
    return (
        <PageLayout>
            <Stack spacing={1}>
                <Stack direction={"row"}>
                    <Button
                        key={"/projects"}
                        component={Link}
                        to={"/projects"}
                        color="inherit"
                        variant="text"
                        sx={{
                            width: "fitContent"
                        }}
                    >
                        ← Back to projects
                    </Button>
                </Stack>
                <Stack spacing={3}>
                    <Card component="article" variant="outlined">
                        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                            <Typography variant="overline" color="primary">
                                Strategy Video Game
                            </Typography>
                            <Typography variant="h3" component="h1" gutterBottom>
                                Lords of Illic
                            </Typography>

                            <Box sx={{ width: "100%", aspectRatio: "16 / 9" }}>
                                <Box
                                    component="iframe"
                                    src="https://www.youtube-nocookie.com/embed/7T5pznvKBfs"
                                    title="Lords of Illic video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        border: 0
                                    }}
                                />
                            </Box>

                            <Typography variant="h6" component="p" color="text.secondary">
                                <i>
                                    A land of adventure awaits in the magical land of Illic.
                                    Follow the Prince's story as he goes from dreaming of being a strong king to making history.
                                    The Prince is not a fighter so he has to work with his allies to save everyone.
                                </i>
                            </Typography>
                            <Button
                                href="https://orangedrake.itch.io/lords-of-illic"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="contained"
                                sx={{
                                    mt: 2,
                                    px: 3,
                                    py: 1.5,
                                    borderRadius: 2,
                                    textTransform: "none",
                                    fontWeight: 700
                                }}
                            >
                                Play Lords of Illic for free on itch.io →
                            </Button>
                        </CardContent>
                    </Card>
                    <Card component="article" variant="outlined">
                        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                            <Stack spacing={2}>
                                <Typography variant="h6" component="p" color="text.secondary">
                                    As a child I played Pikmin, Legend of Zelda and Pokemon series.
                                    But I didn't want to just play them, I wanted to expand them myself.
                                    So I would sit with my brothers and draw my own levels. That was when I first wanted to make video games.
                                    After many twists and turns I ended up studying at the Academy of Interactive Entertainment.
                                    I was interested in the art course and game design course, but I choose the programming course.
                                    I wanted understand how the games really worked.
                                </Typography>
                                <Typography variant="h6" component="p" color="text.secondary">
                                    I knew that I would enjoy making games, but what I didn't realise is that by picking by picking programming I would be opening a whole new world for me.
                                    I had been allowed to start my programming course late, but I quickly caught up and as I did I started to think about what game I wanted to make for myself.
                                    I decided that I wanted to make a game similar to the Fire Emblem series.
                                    It was not one of the original series that sparked my interest but I figured that since it was like a very advanced game of chess, I would be able to manage making everything myself.
                                </Typography>
                                <Typography variant="h6" component="p" color="text.secondary">
                                    So as I went through my assignments I started to think, how could this apply to the game I wanted to make?
                                    I didn't hesitate to put in the effort as I knew it would come in handy later for Lords of Illic.
                                    By the second year of my course I couldn't help but start making the game.
                                    It was the start of a five year long project and an obsession with software development.
                                </Typography>
                                <Typography variant="h6" component="p" color="text.secondary">
                                    I worked on it during my major production (a six month video game project in a team) alongside which I also took on an VR internship with SA Power Networks.
                                    I continued to work on it as I searched for a job.
                                    Making sure to put in normal work hours so I could continue to learn even without employment.
                                    At times it seemed pointless, but as I continued to work on the game I continued to improve.
                                </Typography>
                                <Typography variant="h6" component="p" color="text.secondary">
                                    It was during this time that I first got an inkling that testing was important.
                                    So I decided to implement tests where the computer would play levels automatically.
                                    This experience was one of the things that impressed impressed my future employers at IVAI
                                </Typography>
                                <Typography variant="h6" component="p" color="text.secondary">
                                    My first project at IVAI was the <Link to="/projects/ahp">Aboriginal Health Project</Link>.
                                    I would work five days a week, learning new things about Unity that I was desperate to implement in Lords of Illic.
                                    Trying different things in that context would help me find ways to improve the VR simulation.
                                    But I quickly got to a point which I couldn't ignore.
                                    One of the last things I did in Lords of Illic before I started my job was to switch to the new input system.
                                    This required quite a bit of refactoring, but all I had were my level tests. They were useful but they still took several minutes to run.
                                    I no longer had all week to work on the project. So I need better ways to make progress and to ways to prevent the frustration of glitches found at 6pm on a Sunday night.
                                </Typography>
                                <Typography variant="h6" component="p" color="text.secondary">
                                    My boss suggested that I read <Link to="https://play.google.com/store/books/details/Robert_C_Martin_Clean_Code?id=_i6bDeoCQzsC">.Clean Code</Link> by Robert Martin.
                                    That was just the first of many books I read. I felt like I needed to know more and get better and better.
                                </Typography>
                                <Typography variant="h6" component="p" color="text.secondary">
                                    The need for testing revealed the faults in my architecture, to the point where I overhauled the entire game multiple times as my understanding increased.
                                    Even as the needs of my job increased as I need to learn the HoloLens and then full stack development I kept working on Lords of Illic.
                                    During my time working on Clear Call I even took the game to a local video game convention called Avcon as an Indie Developer.
                                    As the fifth year of developer approached I decided I wouldn't try to monetise the game, instead I polished it and uploaded the full game to itch.io.
                                </Typography>
                                <Typography variant="h6" component="p" color="text.secondary">
                                    Making Lords of Illic was not about making money. It was about learning and expanding myself.
                                    It was not a simple hobby project where I glued together some code without thought, it provided me with a set of problems that helped me learn software design and helped me adapt as my role at IVAI expanded over time.
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Stack>
            </Stack>
        </PageLayout>
    );
};

export default IllicPage;