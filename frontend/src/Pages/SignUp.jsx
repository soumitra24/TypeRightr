import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../Styles/signup.css';
import { toast } from "react-toastify";
import { auth, db } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [mode, setMode] = useState(true);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleMode1 = () => {
    resetForm();
    setMode(true);
  };

  const handleMode2 = () => {
    resetForm();
    setMode(false);
  };

  const resetForm = () => {
    setLoginEmail('');
    setLoginPassword('');
    setSignupUsername('');
    setSignupEmail('');
    setSignupPassword('');
    setConfirmPassword('');
    setError('');
  };

  useEffect(() => {
    setMode(false);
  }, []);

  useEffect(() => {
    if (signupPassword !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
    }
  }, [signupPassword, confirmPassword]);

  const pushUsername = (userId) => {
    const unameRef = db.collection('Uname');
    unameRef.add({
      userId: userId,
      uname: signupUsername
    });
  };

  const handlesignUpSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('path_to_your_php_backend/signup.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                email: signupEmail,
                username: signupUsername,
                password: signupPassword,
                confirmPassword: confirmPassword,
            }),
        });
        
        const result = await response.json();
        
        if (result.success) {
            toast.success(result.message);
            handleMode1();  // Switch to login mode if sign-up is successful
        } else {
            toast.error(result.message);
        }
    } catch (error) {
        toast.error('An error occurred during sign-up');
    }
};


  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      auth.createUserWithEmailAndPassword(signupEmail, signupPassword)
      .then((userCredential) => {
        const userId = userCredential.user.uid;
        pushUsername(userId);
        toast.success('Account Created! Please Log In to Continue.', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      
        // Delay the transition slightly so the user can see the toast
        setTimeout(() => {
          setLoginEmail(signupEmail);     // Pre-fill the login form
          handleMode1();                  // Switch to login mode
        }, 1000); // 1 second delay for smooth UX
      })
      
        .catch(() => {
          toast.error('🦄 Try Again :(', {
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
  };

  const navigate = useNavigate();

  const handleLogInSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      auth.signInWithEmailAndPassword(loginEmail, loginPassword)
        .then(() => {
          toast.success('Logged In!!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate('/');
        })
        .catch(() => {
          toast.error('🦄 Wrong Credentials!!', {
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
  };

  return (
    <div className="Body">
      <div className="Form">
  <div className="mods">
    <button onClick={handleMode1} className={mode ? 'selected' : ''}>Log In</button>
    <button onClick={handleMode2} className={!mode ? 'selected' : ''}>Sign Up</button>
  </div>

  <div className="transition-wrapper">
    <div className={`form-container ${mode ? 'show' : 'hide'}`}>
      <div className="LogIn">
        <form onSubmit={handleLogInSubmit}>
          <input type="email" placeholder="Email ID" required value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} /><br />
          <input type="password" placeholder="Password" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} /><br />
          <button className="submit" type="submit">Submit</button>
        </form>
      </div>
    </div>

    <div className={`form-container ${!mode ? 'show' : 'hide'}`}>
      <div className="SignUp">
        <form onSubmit={handleSignUpSubmit}>
          <input type="text" placeholder="Username" value={signupUsername} onChange={(e) => setSignupUsername(e.target.value)} required /><br />
          <input type="email" placeholder="Email ID" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} required /><br />
          <input type="password" placeholder="Password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} required /><br />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required /><br />
          <div className={`error-message ${error ? 'visible' : ''}`}>{error}</div>
          <button className="submit" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default SignUp;
