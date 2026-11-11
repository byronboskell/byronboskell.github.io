import { Button, Stack, Typography } from "@mui/material"
import React, { Suspense } from "react";
import PageLayout from "../components/page-layout";
import BlogEntry from "../components/blog-entry";
import { Link, useParams } from "react-router-dom";
import { blogData } from "../blog-content/blog-entries";

const blogContents: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
    "0": React.lazy(() => import("../blog-content/entries/blog-0"))
};

const BlogPage: React.FC = () => {

    const { index } = useParams();
    const entry = index !== undefined ? blogData[Number(index)] : undefined;
    const Content = index !== undefined ? blogContents[index] : undefined;

    if (!entry || !Content) {
        return (
            <PageLayout>
                <Stack spacing={2}>
                    <Stack direction={"row"}>
                        <Button
                            key={"/blog"}
                            component={Link}
                            to={"/blog"}
                            color="inherit"
                            variant="text"
                            sx={{
                                width: "fitContent"
                            }}
                        >
                            ← Back to blog page
                        </Button>
                    </Stack>
                    <BlogEntry />
                </Stack>
            </PageLayout>
        );
    }
    return (
        <PageLayout>
            <Stack spacing={2}>
                <Stack direction={"row"}>
                    <Button
                        key={"/blog"}
                        component={Link}
                        to={"/blog"}
                        color="inherit"
                        variant="text"
                        sx={{
                            width: "fitContent"
                        }}
                    >
                        ← Back to blog page
                    </Button>
                </Stack>


                <Suspense fallback={<Typography>Loading entry...</Typography>}>
                    <BlogEntry entry={entry} Content={Content} />
                </Suspense>
            </Stack>
        </PageLayout>
    )
}

export default BlogPage