import { Button, Stack, Typography } from "@mui/material"
import React, { Suspense } from "react";
import PageLayout from "../components/page-layout";
import BlogEntry from "../components/blog-entry";
import { Link, useParams } from "react-router-dom";
import { blogData } from "../blog-content/blog-entries";

const entryLoaders = import.meta.glob<{ default: React.ComponentType }>(
    "../blog-content/entries/*.tsx"
);

const contentCache = new Map<
    string,
    React.LazyExoticComponent<React.ComponentType>
>();

const getContent = (key: string | undefined) => {
    if (!key) {
        return undefined
    }
    const cached = contentCache.get(key)
    if (cached) {
        return cached
    }
    const loader = entryLoaders[`../blog-content/entries/${key}.tsx`]
    if (!loader) {
        return undefined
    }

    const Content = React.lazy(loader)
    contentCache.set(key, Content)
    return Content
};

const BlogPage: React.FC = () => {

    const { key } = useParams();
    const summary = blogData.find((item) => item.key === key)
    const Content = getContent(key)

    if (!summary || !Content) {
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
                    <BlogEntry summary={summary} Content={Content} />
                </Suspense>
            </Stack>
        </PageLayout>
    )
}

export default BlogPage