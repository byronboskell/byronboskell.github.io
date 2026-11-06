import React from "react";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import PageLayout from "../components/page-layout";

const ClearCallPage: React.FC = () => {
    return (
        <PageLayout>
            <Stack spacing={3}>
                <Card component="article" variant="outlined">
                    <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                        <Typography variant="overline" color="primary">
                            Telemedicine Platform
                        </Typography>
                        <Typography variant="h3" component="h1" gutterBottom>
                            Clear Call
                        </Typography>
                        <Typography variant="h6" component="p" color="text.secondary">
                            A telehealth platform designed to improve outcomes for remote patients with diabetic foot complications. The goal was to allow a remote doctor to see through the eyes of the nurse to improve communication and help diagnosis.
                        </Typography>
                    </CardContent>
                </Card>
                <Card component="article" variant="outlined">
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                        <Stack spacing={2}>
                            <Typography variant="h6" component="p" color="text.secondary">
                                Originally the project was going to use the HoloLens to facilitate the call. However as the project got underway it became clear that Microsoft had not developed the platform enough for our uses. The headset used Windows Subsystem for Android which did not support video calling libraries properly. Furthermore during the project Microsoft stopped development of the Hololens toolkit for Unity entirely.
                            </Typography>
                            <Typography variant="h6" component="p" color="text.secondary">
                                I researched alternatives and discovered that if we made use of Amazon Web Systems we could use of the Chime SDK to host video calls in the browser. We then found an alternative headset known as the Realware which we could use in concert with the browser.
                            </Typography>
                            <Typography variant="h6" component="p" color="text.secondary">
                                As we pivoted to AWS services we focused our energy on discovering what was actually needed by the telemedicine team - something that is often overlooked when making software.
                            </Typography>
                            <Typography variant="h6" component="p" color="text.secondary">
                                A teams or zoom call for instance is designed for a number of people sitting in normal chairs around a table - not patients sitting on specialised podiatrist chair.
                            </Typography>
                            <Typography variant="h6" component="p" color="text.secondary">
                                We came up with a whole set of hardware to provide reliable sound and video while also working on creating a simple and easy to use webportal for managing consults, with specialised video call views for different users.
                            </Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
        </PageLayout>
    );
};

export default ClearCallPage;