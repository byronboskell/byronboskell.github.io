import React from "react";
import { Button, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import PageLayout from "../components/page-layout";
import { Link } from "react-router-dom";

const ClearCallPage: React.FC = () => {
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
                                Telemedicine Platform
                            </Typography>
                            <Typography variant="h3" component="h1" gutterBottom>
                                Clear Call
                            </Typography>
                            <Stack sx={{ paddingTop: 1, paddingBottom: 1 }}>
                                <CardMedia
                                    component="img"
                                    image={"./images/clear-call.png"}
                                    alt={"Clear Call Image"}
                                    sx={{
                                        width: "50%",
                                        objectFit: "contain"
                                    }} />
                            </Stack>
                            <Typography variant="h6" component="p" color="text.secondary">
                                A telehealth platform designed to improve outcomes for remote patients with diabetic foot complications. The goal was to allow a remote doctor to see through the eyes of the nurse to improve communication and help diagnosis.
                            </Typography>
                            <Typography variant="h6" component="p" color="text.secondary">
                                <Link to="https://clearcall.au/about">More information here</Link>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card component="article" variant="outlined">
                        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                            <Stack spacing={2}>
                                <Stack spacing={2}>
                                    <Typography variant="h6" component="p" color="text.secondary">
                                        Clear Call was created as part of a four year grant to improve telemedicine for people in remote areas. It followed on from the <Link to="/projects/ahp">Aboriginal Health Project</Link> that I worked on previously.
                                    </Typography>
                                    <Typography variant="h6" component="p" color="text.secondary">
                                        Before we started this project we had a smaller project intended to test the capabilities of the HoloLens 2. In that project I created a canvas which two people could draw on together in AR.
                                        Since this project required a network connection I used the photon library to do the basics of the networking.
                                        This project helped sound out possible paths for creating a telemedicine call. In the web version we also implemented a way to draw collaboratively in the browser.
                                    </Typography>
                                    <Typography variant="h6" component="p" color="text.secondary">
                                        During the previous project I had made use of the Mixed Reality Toolkit 2.
                                        Since we were planning to have additional AR tools in the project it was key that we had a good toolkit to implement them.
                                        However as we were working on the project two key problems emerged.
                                        The first was the software stack of the HoloLens 2. It was using Windows Subsystem for Android with ARM64 chipset. As far as I could find the HoloLens 2 was the only device with this specific chipset and architecture.
                                        This was a problem as it meant that a lot of libraries did not work properly on the HoloLens. In particular WebRTC was not properly supported.
                                        We looked into other solutions which could send video on the HoloLens 2 but ultimately we found that they used the experimental version of WebRTC.
                                        The next problem that emerged was that Microsoft stopped the development of the Mixed Reality Toolkit 2.
                                        We decided that we needed to prioritise robustness of the experience and so we had to look for alternative ways to host a quality video call.
                                    </Typography>
                                    <Typography variant="h6" component="p" color="text.secondary">
                                        I discovered that if we made use of Amazon Web Systems we could use the Chime SDK to host video calls in the browser.
                                        We could then have a video call with any device that supported a browser.
                                        Since it was an important part of the project to see through another persons' eyes we searched for a different headset we could use.
                                        This was a good choice as the HoloLens 2 is now depreciated.
                                        We tried two headsets the Vuzix and the Realware and settled with the Realware.
                                    </Typography>
                                    <Typography variant="h6" component="p" color="text.secondary">
                                        Up to this point I had primarily been working with C# and Unity (and some C++ when I was studying).
                                        Typescript is a very different language to C# and React is a very different framework than Unity.
                                        But that was only the Frontend, I also had to create a Backend services and work with deployment scripts.
                                        While I had spent a couple months before with an online AWS course, it was a very different matter to translate those skills into a working telemedicine platform.
                                        I was not the only person working on the project, but I was the only person working full time on it, so I need to acquire skills quickly.
                                        What really helped was an example repository with CDK for a few simple API gateway routes and React Code for a call page.
                                        I used that to get a proof of concept and then worked to unpack the different technologies I needed.
                                    </Typography>
                                    <Typography variant="h6" component="p" color="text.secondary">
                                        Another key part of the project was finding solutions to the root problems for the telemedicine team.
                                        We had initially want to have a lot of AR features to assist the end user, but what the teams needed the most better audio and video.
                                        A in a Teams or Zoom call for instance is designed for a number of people sitting in normal chairs around a table - not patients sitting on specialised podiatrist chair.
                                        We sourced cameras that would allow the nurse and the patient to be seen properly and microphones which would allow the nurse and the patient to be heard correctly.
                                        We combined this with the headset to allow the podiatrists at the hospital to be able to get a good look at the patient's feet.
                                        Just the hardware was enough to improve the quality of the consults, but of course we still needed to provide better software as well.
                                    </Typography>
                                    <Typography variant="h6" component="p" color="text.secondary">
                                        We created a simple and easy to use webportal for managing consults.
                                        We tailored different call views for different participants in the call.
                                        Even without AR capabilities, we still offer extra helping features in the call.
                                        We have a simple way of sending photos taken with the Realware headset (or mobile device). A way to annotate those pictures within the call.
                                        My coworker developed an application which uses a 3d camera to capture images of foot wounds, which can then be transmitted to clinicians in the hospital who can use it to take measurements of wounds.
                                        Since the models are saved we can compare the wounds to help decide if they are healing.
                                        Clear call has already been used by patients and is helping them get better health outcomes.
                                    </Typography>
                                </Stack>
                                <Stack spacing={2}>
                                    <Typography variant="h6" component="p" color="text.secondary">
                                        There is a lot more to this project and through it I have changed from a Unity Developer into filling the role of a Software Engineer (though I do not have a formal degree).
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

export default ClearCallPage;