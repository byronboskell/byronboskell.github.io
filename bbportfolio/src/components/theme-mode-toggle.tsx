import React, {
    useContext,
} from "react";

import { FormControlLabel, Switch } from "@mui/material";
import { ThemeModeContext } from "../context/theme-mode-context"

export const ThemeModeToggle: React.FC = () => {
    const context = useContext(ThemeModeContext);

    if (!context) {
        throw new Error("ThemeModeToggle must be used inside ThemeModeProvider");
    }

    const { mode, toggleMode } = context;

    return (
        <FormControlLabel
            label={mode === "dark" ? "Dark mode" : "Light mode"}
            control={
                <Switch
                    checked={mode === "dark"}
                    onChange={toggleMode}
                    inputProps={{ "aria-label": "Toggle dark mode" }}
                />
            }
        />
    );
};