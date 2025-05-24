import { useMemo, useState } from 'react'
import Footer from '../common/Footer'
import { ThemeProvider, useMediaQuery } from '@mui/material';
import { useTheme } from "@mui/system";
import { ThemeContext } from '@emotion/react';
import AppAppBar from '../common/AppBar';
import generateTheme from '../theme';
import { ApplicationRoutes } from '../route/ApplicationRoutes';
import "../css/App.css";

function HomeScreen() {
    const [fontSize, setFontSize] = useState(
        JSON.parse(sessionStorage.getItem("DFSAPP-FontSize")) ?? 16
    );
    const isMdUp = useMediaQuery(useTheme().breakpoints.up("md"));
    const [ourTheme, setOurTheme] = useState(
        sessionStorage.getItem("DFSAPP-ourTheme") ?? "light"
    );
    const toggleTheme = () => {
        setOurTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    const decreaseFontSize = () => {
        setFontSize((prevSize) => Math.max(prevSize - 0.5, 14));
    };
    const increaseFontSize = () => {
        setFontSize((prevSize) => Math.min(prevSize + 0.5, 18));
    };
    const resetTextSize = () => {
        setFontSize(16);
    };
    const theme = useMemo(
        () => generateTheme(fontSize, ourTheme),
        [fontSize, ourTheme]
    );
    return (
        <div className="app-container">
            <ThemeContext.Provider value={{ ourTheme, toggleTheme }}>
                <ThemeProvider theme={theme}>
                    <AppAppBar />
                    <div className={`app-body ${isMdUp ? "app-body-md" : ""}`}>
                        <ApplicationRoutes />
                    </div>
                    <Footer initData={null} />
                </ThemeProvider>
            </ThemeContext.Provider>
        </div>
    )
}

export default HomeScreen