import React from "react";
import { Box, Card, CardContent, Divider, Stack, Typography } from "@mui/material";

const InfoPanel: React.FC = () => (

    <Stack component="aside" spacing={3}>
        <Card variant="outlined">
            <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                    At a glance
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Stack spacing={1.5}>
                    <Box>
                        <Typography variant="caption" color="text.secondary">
                            Education
                        </Typography>
                        <Typography>Advanced Diploma, Professional Game Development</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary">
                            Interests
                        </Typography>
                        <Typography>Software development and video games</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color="text.secondary">
                            Current role
                        </Typography>
                        <Typography>Looking for work</Typography>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    </Stack>
);

export default InfoPanel;