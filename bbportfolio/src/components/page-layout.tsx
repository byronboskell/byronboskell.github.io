import React, { type PropsWithChildren } from "react";
import { alpha } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";
import SiteNavigation from "./site-navigation";

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => (
    <Box
        sx={(theme) => ({
            minHeight: "100vh",
            background: `
                radial-gradient(
                    circle at 10% 10%,
                    ${alpha(theme.palette.primary.main, 0.5)},
                    transparent 35%
                ),
                ${theme.palette.background.default}
            `,
        })}
    >
        <SiteNavigation />
        <Stack
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
        </Stack>
    </Box>
);

export default PageLayout;