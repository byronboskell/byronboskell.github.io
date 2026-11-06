import React from "react";
import { Stack, Typography } from "@mui/material";
import PageLayout from "../components/page-layout";

const IllicPage: React.FC = () => {
    return (
        <PageLayout>
            <Stack>
                <Typography variant="h2" component="h1" gutterBottom>
                    Lords of Illic
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    (Website still in development)
                </Typography>
            </Stack>
        </PageLayout>
    );
};

export default IllicPage;