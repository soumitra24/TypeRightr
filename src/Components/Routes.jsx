import { Routes, Route } from "react-router-dom";
import SignUp from "../Pages/SignUp"
import Home from "../Pages/Home";
import UserInfo from "../Pages/UserInfo"
import { ToastContainer } from "react-toastify";

export const Router = () => {
    return (
        <>
      <ToastContainer />
      <Routes>
        <Route path="typingtest/" element={<Home />} />
        <Route path="typingtest/SignUp" element={<SignUp />} />
        <Route path="typingtest/user" element={<UserInfo />} />
      </Routes>   
        
        </>
    )
}