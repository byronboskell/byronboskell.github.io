import React from "react";
import { Button, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import PageLayout from "../components/page-layout";
import { Link } from "react-router-dom";

const AHPPage: React.FC = () => {
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
                                Health Simulation
                            </Typography>
                            <Typography variant="h3" component="h1" gutterBottom>
                                Aboriginal Health Project
                            </Typography>
                            <CardMedia
                                component="img"
                                height="220"
                                image={"./images/AHP.jpg"}
                                alt={"AHP Image"}
                                sx={{
                                    width: "100%",
                                    height: 220,
                                }}
                            />
                            <Typography variant="h6" component="p" color="text.secondary">
                                A project to create a VR simulation which would train remote nurses to understand the warning signs of foot complications for aboriginal diabetic patients. The goal was to help reduce foot amputations by providing immersive training that could be brought to remote sites without the need for remote nurses to travel long distances.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card component="article" variant="outlined">
                        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                            <Stack spacing={2}>
                                <Stack spacing={2}>
                                    <Typography variant="h6" component="p" color="text.secondary">
                                        The VR simulation was created with by a team of four people - myself, a character artist, an animator and an environment artist. I coordinated with the artists. The artists worked remotely and I imported and tested the assets in Unity myself.
                                    </Typography>
                                    <Typography variant="h6" component="p" color="text.secondary">
                                        As the project got underway it became clear I needed a better way to manage projects.
                                        I had consistent working hours while working on Lords of Illic, but I did not have any strict deadlines and since I was working by myself I did not need to coordinate with others.
                                        With the help of my coworkers I created a system which the Github project board as a lightweight way to manage the project.
                                        This was important as it helped me prioritise work, keep track of what I needed from my teammates and be able to show the people at IVAI my progress in the project.
                                    </Typography>
                                </Stack>
                                <Stack spacing={2}>
                                    <Typography variant="h6" component="p" color="text.secondary">
                                        The next important step in the project was figure out how to structure the project.
                                        During my study at AIE I got an internship at SA Power Networks where I worked on a VR project which was training for replacing light bulbs in street lights and looking for faulty electrical wires from a helicopter.
                                        The goal of that project was to show off different parts of a job at SA power networks to school children.
                                        As I worked on the two different scenarios I could see that they had similarities which would allow code to be re-used across both.
                                        So when I started work on the AHP I decided to make a more sophisticated version of the toolkit I created for that project.
                                    </Typography>
                                    <Typography variant="h6" component="p" color="text.secondary">
                                        This was a particular appealing idea with the AHP as if the VR Headset is already in the remote site it could be updated to provide additional scenarios for training.
                                        We never had the opportunity to do so, but I used the reusable toolkit for other VR simulations during my working at IVAI.
                                    </Typography>
                                </Stack>
                                <Stack spacing={2}>
                                    <Typography variant="h6" component="p" color="text.secondary">
                                        As the project continued we had to adjust different parts of the simulation to make them better fit the training procedure.
                                        Part of the problem became that this required that the entire simulation was tested from start to end when changes were made.
                                        As part of working on Lords of Illic I had a similar problem (as that contained a linear set of levels), for that project I had already started to use the Unity testing library.
                                        It became clear to me as I was working that I needed to created a good set of tests to ensure that my toolkit was robust.
                                        I started with a naive set of tests, which over time grew to a large number that tested the majority of the codebase.
                                    </Typography>
                                </Stack>
                                <Stack spacing={2}>
                                    <Typography variant="h6" component="p" color="text.secondary">
                                        As the project neared its end I was happy to see real people using the software.
                                        It was well liked and helped people acquire skills.
                                        Since then I have set up many Quest 2s to be sent out to remote parts of Australia with this training software installed.
                                    </Typography>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                </Stack>
            </Stack>
        </PageLayout >
    );
};

export default AHPPage;