import { useEffect, useState } from "react";

import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { Link } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const userDocRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userDocRef);
        if (userSnap.exists()) {
          setUserData(userSnap.data());
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="container mt-5 p-3">
      <h2 className="text-center">My Profile</h2>
      {userData ? (
        <div className="card p-4 mt-4">
          <h5>Username: {userData.userName}</h5>
          <h6>Email: {userData.email}</h6>
          <h6>Phone Number: {userData.phoneNumber}</h6>
          <h6>Role: {userData.owner ? "Owner" : "User"}</h6>
          <p className="text-muted mt-3">
            Account Created At:{" "}
            {userData.createdAt
              ? new Date(userData.createdAt.seconds * 1000).toLocaleString()
              : "N/A"}
          </p>
        </div>
      ) : (
        <>
     <div className="container" style={{height:"70vh"}}>
     <h1 className="text-center">
        Please Login
      </h1>
      <div className="d-flex justify-content-around align-items-center my-5">
        <Link to="/Login">
          <button className="button w-100">Login</button>
        </Link>
        <Link to="/Register">
          <button className="btn  w-100 ml-3">Register</button>
        </Link>
      </div>
     </div>
   
      </>
      )}
    </div>
  );
};

export default Profile;
