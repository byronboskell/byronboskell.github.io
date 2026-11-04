import React, {
    createContext,
    useCallback,
    useMemo,
    useState,
    type PropsWithChildren,
} from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider, type PaletteMode } from "@mui/material/styles";

type ThemeModeContextValue = {
    mode: PaletteMode;
    toggleMode: () => void;
};

export const ThemeModeContext = createContext<ThemeModeContextValue | undefined>(undefined);

export const ThemeModeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [mode, setMode] = useState<PaletteMode>("light");

    const toggleMode = useCallback(() => {
        setMode((currentMode) => (currentMode === "light" ? "dark" : "light"));
    }, []);

    const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

    return (
        <ThemeModeContext.Provider value={{ mode, toggleMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    );
};