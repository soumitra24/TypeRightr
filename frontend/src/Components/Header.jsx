import React, { useState, useEffect } from "react";
import { ThemeOptions } from "../Utils/Themes";
import Select, { components } from "react-select";
import { useTheme } from "../Context/ThemeContext";
import { FaCaretDown } from 'react-icons/fa';
import AccountIcon from './AccountIcon';
import LogoutIcon from '@mui/icons-material/Logout';
import { auth, db } from "../FirebaseConfig";
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from "react-toastify";
import GroupsIcon from '@mui/icons-material/Groups'; // Import an icon for multiplayer
import LockIcon from '@mui/icons-material/Lock'; // Import lock icon for disabled state
import { color } from "framer-motion";

// Add onSwitchMode and currentMode props
export default function Header({ onSwitchMode, currentMode }) {
    const { setTheme, theme } = useTheme();
    const text = "TypeRightr";
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState("");
    const [typingSpeed, setTypingSpeed] = useState(600);
    const [user] = useAuthState(auth); // Get user login state
    const [uname, setUname] = useState("");

    const handleChange = (e) => {
        setTheme(e.value);
        localStorage.setItem("theme", JSON.stringify(e.value));
    };

    const DropdownIndicator = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                <FaCaretDown color={theme.font || "white"} /> {/* Use theme font color */}
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

    useEffect(() => {
        const fetchUname = async () => {
            if (user) {
                const unameRef = db.collection('Uname');
                const snapshot = await unameRef.where('userId', '==', user.uid).get();
                if (!snapshot.empty) {
                    const userDoc = snapshot.docs[0].data();
                    setUname(userDoc.uname);
                } else {
                    setUname(""); // Clear uname if not found
                }
            } else {
                 setUname(""); // Clear uname if no user
            }
        };
        fetchUname();
    }, [user]);

    const logout = () => {
        auth.signOut().then(() => {
            toast.success('Successfully Logged Out!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light", // Consider using theme context here too
            });
        }).catch(() => {
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
        });
    }


    // Determine if the multiplayer button should be disabled
    const isMultiplayerDisabled = !user; // Disabled if user is null/undefined

    return (
        <>
            <div className="header">
                <div className="logo-container">
                    <span className="typewriter">{displayText}</span>
                </div>
                <div className="utils">
                    {/* Multiplayer/Single Player Toggle Button */}
                    {onSwitchMode && (
                        <button
                            onClick={onSwitchMode}
                            className="mode-switch-button"
                            // Update title based on login status and current mode
                            title={
                                isMultiplayerDisabled
                                    ? "Log in to play multiplayer"
                                    : currentMode === 'single'
                                    ? "Switch to Multiplayer"
                                    : "Switch to Single Player"
                            }
                            disabled={isMultiplayerDisabled && currentMode === 'single'} // Disable switching TO multiplayer if logged out
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: isMultiplayerDisabled && currentMode === 'single' ? 'not-allowed' : 'pointer', // Change cursor when disabled
                                color: isMultiplayerDisabled && currentMode === 'single' ? theme.disabledText || '#888' : theme.font, // Dim color when disabled
                                marginRight: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '1.1rem',
                                opacity: isMultiplayerDisabled && currentMode === 'single' ? 0.6 : 1 // Reduce opacity when disabled
                            }}
                        >
                            {/* Show Lock icon instead of Groups if disabled */}
                            {isMultiplayerDisabled && currentMode === 'single' ? (
                                <LockIcon style={{ marginRight: '5px' }} />
                            ) : (
                                <GroupsIcon style={{ marginRight: '5px' }} />
                            )}
                            {currentMode === 'single' ? 'Multiplayer' : 'Single Player'}
                        </button>
                    )}

                    <div className="accIcon" title={user ? `Logged in as ${uname}` : "Log In / Sign Up"}>
                        <AccountIcon />
                       {(user && uname) ? (<span>{uname}</span>) : (<span>Account</span>)}
                    </div>
                    {user && <LogoutIcon onClick={logout} className="logoutIcon" titleAccess="Log Out"/>}
                    <div className="themeButtonClass">
                        <Select
                            placeholder={"Theme"}
                            isSearchable={false}
                            components={{ DropdownIndicator }}
                            onChange={handleChange}
                            options={ThemeOptions}
                            value={ThemeOptions.find(option => option.value.label === theme.label)} // Set current theme value
                            styles={{
                                control: (styles) => ({
                                    ...styles,
                                    backgroundColor: theme.background,
                                    margin: '0 0.5em',
                                    color: theme.font,
                                    minWidth: '5.5em', // Ensure minimum width
                                    border: `1px solid ${theme.font}` // Add border matching font color
                                }),
                                menu: (styles) => ({
                                    ...styles,
                                    backgroundColor: theme.background,
                                    border: `1px solid ${theme.font}`
                                }),
                                option: (styles, { isFocused }) => {
                                    return {
                                        ...styles,
                                        backgroundColor: isFocused ? (theme.background === '#000000' ? '#333' : '#eee') : theme.background, // Adjust focus color based on theme
                                        color: theme.font,
                                        cursor: "pointer",
                                        transition: "background-color 0.2s ease",
                                    };
                                },
                                singleValue: (styles) => ({ // Style the selected value text
                                    ...styles,
                                    color: theme.font
                                }),
                                placeholder: (styles) => ({
                                    ...styles,
                                    color: theme.font,
                                }),
                                input: (styles) => ({
                                    ...styles,
                                    color: theme.font,
                                }),
                                dropdownIndicator: (styles) => ({ // Style the dropdown arrow container
                                    ...styles,
                                    color: theme.font,
                                    '&:hover': {
                                        color: theme.typeBoxText // Example hover color
                                    }
                                }),
                                indicatorSeparator: (styles) => ({ // Hide the separator
                                    ...styles,
                                    display: 'none'
                                })
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
