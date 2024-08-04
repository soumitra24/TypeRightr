import React, { useState, useEffect } from "react";
import { ThemeOptions } from "../Utils/Themes";
import Select, { components } from "react-select";
import { useTheme } from "../Context/ThemeContext";
import { FaCaretDown } from 'react-icons/fa';
import AccountIcon from './AccountIcon'
import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from "../FirebaseConfig";
import {useAuthState} from 'react-firebase-hooks/auth'
import { toast, ToastContainer, Bounce } from "react-toastify"      

export default function Header() {
    const { setTheme, theme } = useTheme();
    const text = "TypeRightr";
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState("");
    const [typingSpeed, setTypingSpeed] = useState(600);

    const [user] = useAuthState(auth);

    const handleChange = (e) => {
        setTheme(e.value);
        localStorage.setItem("theme", JSON.stringify(e.value));
    };
    const DropdownIndicator = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                <FaCaretDown color={"white"} />
            </components.DropdownIndicator>
        );
    };


    useEffect(() => {
        const type = () => {
            if (!isDeleting && index < text.length) {
                setDisplayText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
                setTypingSpeed(300);
            } else if (isDeleting && index > 0) {
                setDisplayText((prev) => prev.substring(0, prev.length - 1));
                setIndex((prev) => prev - 1);
                setTypingSpeed(100);
            } else if (index === text.length && !isDeleting) {
                setIsDeleting(true);
                setTypingSpeed(1000);
            } else if (index === 0 && isDeleting) {
                setIsDeleting(false);
                setTypingSpeed(500);
            }
        };

        const timer = setTimeout(type, typingSpeed);

        return () => clearTimeout(timer);
    }, [index, isDeleting, text, typingSpeed]);

    const logout = () =>{
        auth.signOut().then((res) => {
            toast.success('Successfully Logged Out!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }).catch((err)=>{
                toast.error('An error occured!!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
            })
    }

    return (
        <>
            <div className="header">
                <div className="logo-container">
                    <span className="typewriter">{displayText}</span>
                </div>
                <div className="utils">
                    <div className="accIcon">
                        <AccountIcon/>
                    </div>
                    {user && <LogoutIcon onClick={logout} className="logoutIcon"/>}
                    <div className="themeButtonClass">
                        <Select
                            placeholder={"Theme"}
                            isSearchable={false}
                            components={{ DropdownIndicator }}
                            onChange={handleChange}
                            options={ThemeOptions}
                            styles={{
                                control: (styles) => ({
                                    ...styles,
                                    backgroundColor: theme.background,
                                    color: theme.font,
                                }),
                                menu: (styles) => ({
                                    ...styles,
                                    backgroundColor: theme.background,

                                }),
                                option: (styles, { isFocused }) => {
                                    return {
                                        ...styles,
                                        backgroundColor: !isFocused && theme.background !== 'black' ? theme.background : '#0000002b',
                                        color: theme.font,
                                        cursor: "pointer",
                                        transition: "all 0.2s linear",
                                    };
                                },
                                placeholder: (styles) => ({
                                    ...styles,
                                    color: theme.font,
                                }),
                                input: (styles) => ({
                                    ...styles,
                                    color: theme.font,
                                }),
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
