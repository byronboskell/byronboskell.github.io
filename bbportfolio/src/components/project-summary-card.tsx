import React from "react";
import { Button, Card, CardContent, CardMedia, Divider, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface ProjectSummaryCardProps {
    projectName: string,
    summary: string[],
    imageName: string,
    link: string,
    backgroundColor?: string
    objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down",
    objectPosition?: string
}

const ProjectSummaryCard: React.FC<ProjectSummaryCardProps> = ({
    projectName,
    summary,
    imageName,
    link,
    backgroundColor,
    objectFit,
    objectPosition,
}) => (
    <Card component="article" variant="outlined">
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Typography variant="h4" component="h2" gutterBottom>
                {projectName}
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Stack spacing={2}>
                <Stack>
                    {summary.map(text =>
                        <Typography color="text.secondary">
                            {text}
                        </Typography>
                    )}
                </Stack>
                <Link to={link} style={{ display: "block" }}>
                    <Stack padding={1} sx={{ backgroundColor }}>
                        <CardMedia
                            component="img"
                            height="220"
                            image={imageName}
                            alt={`${projectName} Image`}
                            sx={{
                                width: "100%",
                                height: 220,
                                objectFit,
                                objectPosition,
                            }}
                        />
                    </Stack>
                </Link>
                <Stack direction={"row"}>
                    <Button
                        key={link}
                        component={Link}
                        to={link}
                        color="inherit"
                        variant="text"
                        sx={{
                            width: "fitContent"
                        }}
                    >
                        More Information →
                    </Button>
                </Stack>
            </Stack>
        </CardContent>
    </Card>
);

export default ProjectSummaryCard;