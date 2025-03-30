import { Link, NavLink, useNavigate } from "react-router-dom";
import { Dheader } from "../../Data.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { auth, db } from "../../firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { logoutUser } from "../../Auth.jsx";
import { onAuthStateChanged } from "firebase/auth";
import Wishlist from "../../Pages/WishList/WishList.jsx";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  const [userData, setUserData] = useState(null);
  const [allData, setAllData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userDocRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userDocRef);
        if (userSnap.exists()) {
          setUserData(userSnap.data());
        }
      } else {
        setUserData(null);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const res = await axios.get("/src/Api/Data.json");
        setAllData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getAllData();
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();
      setUserData(null);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
console.log(userData);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/" style={{width:"100px"}} >
          <img src="/Logo.png" alt="Logo"  style={{height:"30px"}}/>
        
          <Typewriter
        words={[`Hello,${userData?.userName ? userData?.userName : `Guest`} `," Welcome to my website","Apartment for you"]}
        loop={Infinity} 
        cursor
        cursorStyle="_"
        typeSpeed={50} 
        deleteSpeed={50} 
        delaySpeed={1500} 
  
      />

     
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {Dheader.map((e, i) => (
              <li className="nav-item" key={i}>
                <NavLink
                  className="nav-link d-flex align-items-center"
                  to={e.url}
                >
                  {e.icon && <i className={`${e.icon} me-1`}></i>}
                  {e.title}
                  {e.url === "/Wishlist" && Wishlist.length > 0 && (
                    <span className="badge bg-danger ms-2">
                      {Wishlist.length}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="d-flex justify-content-between mx-5 ">
            {userData ? (
              <button className="btn btn-outline-danger" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <>
                <Link to="/Register">
                  <button className="button mx-3">Register</button>
                </Link>
                <Link to="/Login">
                  <button className="btne">Login</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
