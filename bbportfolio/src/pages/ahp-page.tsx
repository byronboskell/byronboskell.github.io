import React from "react";
import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
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
                            <Typography variant="h6" component="p" color="text.secondary">
                                A project to create a VR simulation which would train remote nurses to understand the warning signs of foot complications for aboriginal diabetic patients. The goal was to help reduce foot amputations by providing immersive training that could be brought to remote sites without the need for remote nurses to travel long distances.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card component="article" variant="outlined">
                        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                            <Stack spacing={2}>
                                <Typography variant="h6" component="p" color="text.secondary">
                                    When the project started I already had some experience with VR simulations thanks to my internship with SA Power Networks.
                                </Typography>
                                <Typography variant="h6" component="p" color="text.secondary">
                                    During my work at SA Power Networks I had the idea of creating a toolkit to provide most templates for sequential training steps in VR.
                                </Typography>
                                <Typography variant="h6" component="p" color="text.secondary">
                                    This was a particular appealing idea with the Aboriginal Health Project as if the VR Headset is already in the remote site it could be updated to provide additional scenarios for training. We never had the opportunity to do so, but I used the reusable toolkit for other VR simulations during my working at Insight via Artificial Intelligence.
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Stack>
            </Stack>
        </PageLayout>
    );
};

export default AHPPage;