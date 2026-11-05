import React from "react";
import { alpha } from "@mui/material/styles";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import type { LinkValues } from "./site-navigation";

interface SiteNavigationButtonProps {
    link: LinkValues
    isActive: boolean
    variant?: "contained" | "outlined" | "text" | undefined
}

const SiteNavigationButton: React.FC<SiteNavigationButtonProps> = ({
    link,
    isActive,
    variant
}) => {

    return (
        <Button
            key={link.to}
            component={Link}
            to={link.to}
            color="inherit"
            aria-current={isActive ? "page" : undefined}
            variant={variant}
            sx={(theme) => ({
                borderRadius: 2,
                fontWeight: isActive ? 700 : 500,
                textTransform: "none",
                bgcolor: isActive
                    ? alpha(theme.palette.primary.contrastText, 0.16)
                    : "transparent",
                "&:hover": {
                    bgcolor: alpha(theme.palette.primary.contrastText, 0.12),
                },
            })}
        >
            {link.label}
        </Button>
    );
};

export default SiteNavigationButton;