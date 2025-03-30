import { useState } from "react";
import { registerUser } from "../Auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault(); 
    try {
      const user = await registerUser(email, password, userName, phoneNumber);
      alert(`User Registered: ${user.email}`);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container">
        <div className="login ">
      <h1 className="text-center">Create Account</h1>
      <div className="d-flex justify-content-center align-items-center my-5">
          <form onSubmit={handleRegister} className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="col-12">
              <button className="button  w-100" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
