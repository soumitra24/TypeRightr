import React, { useState } from 'react';
import TypingBox from "../Components/TypingBox";
import MultiplayerTypingBox from "../Components/MultiplayerTypingBox";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { GlobalStyles } from "../Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../Context/ThemeContext";
// Correct import for the SocketContextProvider (default export)
import SocketContextProvider from '../Context/SocketContext'; 

const Home = () => {
    const { theme } = useTheme();
    const [mode, setMode] = useState('single');

    const handleSwitchMode = () => {
        setMode(prevMode => prevMode === 'single' ? 'multiplayer' : 'single');
    };

    const ActiveTypingComponent = mode === 'single' ? TypingBox : MultiplayerTypingBox;

    return (
        // Use SocketContextProvider instead of SocketProvider
        <SocketContextProvider>
            <ThemeProvider theme={theme}>
                <div className="Canvas">
                    <GlobalStyles />
                    <Header currentMode={mode} onSwitchMode={handleSwitchMode} />
                    <ActiveTypingComponent />
                    <Footer />
                </div>
            </ThemeProvider>
        </SocketContextProvider>
    );
}
export default Home;
