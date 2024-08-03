import TypingBox from "../Components/TypingBox"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { GlobalStyles } from "../Styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import { useTheme } from "../Context/ThemeContext"

const Home = () => {
    const {theme} = useTheme();
    return (
        <>
            <ThemeProvider theme={theme}>
                <div className="Canvas">
                    <GlobalStyles />
                    <Header />
                    <TypingBox />
                    <Footer />
                </div>
            </ThemeProvider>
        </>
    )
}
export default Home;
