import React, { type PropsWithChildren } from "react";
import { alpha } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";
import SiteNavigation from "./site-navigation";

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => (
    <Box
        sx={(theme) => ({
            minHeight: "100vh",
            backgroundColor: theme.palette.background.default,
            backgroundImage: `
                radial-gradient(
                    circle at 10% 10%,
                    ${alpha(theme.palette.primary.main, 0.5)},
                    transparent 35%
                ),
                linear-gradient(
                    ${alpha(theme.palette.text.primary, 0.06)} 1px,
                    transparent 1px
                ),
                linear-gradient(
                    90deg,
                    ${alpha(theme.palette.text.primary, 0.06)} 1px,
                    transparent 1px
                )
            `,
            backgroundSize: "auto, 32px 32px, 32px 32px",
            backgroundRepeat: "no-repeat, repeat, repeat",
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