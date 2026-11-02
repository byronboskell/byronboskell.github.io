import React, { type PropsWithChildren } from "react";
import { Box } from "@mui/material";
import SiteNavigation from "./site-navigation";

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => (
    <>
        <SiteNavigation />
        <Box
            component="main"
            sx={{
                width: "100%",
                maxWidth: 1200,
                mx: "auto",
                px: { xs: 2, sm: 3 },
                py: { xs: 4, md: 6 },
            }}
        >
            {children}
        </Box>
    </>
);

export default PageLayout;