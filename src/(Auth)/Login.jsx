import { useState } from "react";
import { loginUser } from "../Auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showRegisterButton, setShowRegisterButton] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleLogin = async () => {
    setError("");
    setShowRegisterButton(false); 

    if (!email || !validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      const q = query(collection(db, "users"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setShowRegisterButton(true);
        setError("This email is not registered. You can register now.");
      } else {
        const user = await loginUser(email, password);
        alert(`Logged in as: ${user.email}`);
      }
      
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRegister = async () => {
  }

  return (
    <div className="container">
      <div className="login">
        <h1 className="text-center">Login or Register</h1>
        <div className="d-flex flex-column justify-content-center align-items-center my-5">
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="form-floating mb-3 w-50">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3 w-50">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
     
          <button onClick={handleLogin} className="btne  w-50 my-3">
            Login
          </button>
   
         
         
          {showRegisterButton && (
            <button onClick={handleRegister} className="button w-50 my-2">
              Register
            </button>)}
          
     
          
        </div>
      </div>
    </div>
  );
};

export default Login;
