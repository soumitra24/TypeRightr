import { useEffect, useState } from "react";
import "../Styles/signup.css";
import { auth, db } from "../FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { TableRow, TableCell, TableHead, Table, TableContainer, TableBody } from "@mui/material";
import GraphUname from "../Components/GraphUPage";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useTheme } from '../Context/ThemeContext';



const UserInfo = () => {
    const [data, setData] = useState(null);
    const [uname, setUname] = useState(null);
    const [user, loading] = useAuthState(auth);
    const [graphData, setGraphData] = useState([]);
    
    const {theme} = useTheme();
    const navigate = useNavigate();
    let tempData = [];
    

    const fetchUserData = () => {
        const resultsRef = db.collection('Results');
        const unameRef = db.collection('Uname');
        const { uid } = auth.currentUser;
        let tempGraphData = [];

        resultsRef.where('userId', '==', uid).get().then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                const docData = doc.data();
                tempData.push(docData);
                tempGraphData.push({
                    date: docData.timeStamp.toDate().toLocaleDateString(),
                    wpm: docData.wpm
                });
            });
            
            if (tempData.length > 0) {
                const highestWpmData = tempData.reduce((max, item) => item.wpm > max.wpm ? item : max, tempData[0]);
                setData(highestWpmData);
                setGraphData(tempGraphData);
            }
        });

        unameRef.where('userId', '==', uid).get().then((snapshot) => {
            if (!snapshot.empty) {
                const userDoc = snapshot.docs[0].data();
                setUname(userDoc.uname); 
            }
        });
    };

    useEffect(() => {
        if (!loading) {
            fetchUserData();
        }
        if (!loading && !user) {
            navigate('/');
        }
    }, [loading]);

    if (loading) {
        return <CircularProgress />;
    }
    const navi = () =>{
        navigate('/');
    }
    const tableStyle = { color: theme.correctFont, textAlign: "center", fontSize: 25, border: "2px solid" };

    return (
        <>
            <div className="Body" style={{backgroundColor: theme.background, backgroundImage: theme.backgroundImage}}>
                <div className="Container" style={{color: theme.correctFont}}>
                    <div className="head">
                        <ArrowBackIosNewIcon className="icon" onClick={navi} fontSize="large" />
                        <h1>Heyyy, {uname}</h1>
                    </div>
                    {data && (
                        <div className="Table">
                            <h2>Your personal best:</h2>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={tableStyle}>WPM</TableCell>
                                            <TableCell style={tableStyle}>Accuracy</TableCell>
                                            <TableCell style={tableStyle}>
                                                Characters<br /><span style={{ fontSize: 15, margin: 0 }}>Correct / Incorrect / Missed</span>
                                            </TableCell>
                                            <TableCell style={tableStyle}>Date</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell style={tableStyle}>{data.wpm}</TableCell>
                                            <TableCell style={tableStyle}>{data.accuracy}%</TableCell>
                                            <TableCell style={tableStyle}>{data.correctChars} / {data.incorrectChars} / {data.missedChars}</TableCell>
                                            <TableCell style={tableStyle}>{data.timeStamp.toDate().toLocaleDateString()}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            
                        </div>
                        
                    )}
                    <div className="graph">
                            {(tempData.length > 0) ? (<GraphUname graphData={graphData} />) : (<h1>:)</h1>)}
                                
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserInfo;
