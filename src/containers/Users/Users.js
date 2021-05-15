import React, { useState } from "react";
import "./Users.css";
import Modal from "../../component/Modal";

const Users = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    // console.log(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = () => {
    if ((email.length, pass.length <= 0)) {
      alert("fill in the form details");
    } else {
      setIsOpen(true);
      setPassword("");
      setEmail("");
    }
  };
  return (
    <div>
      <div className="container">
        <div className="left">
          <div className="header">
            <h2 className="animation a1">Welcome Back</h2>
            <h4 className="animation a2">
              Log in to your account using email and password
            </h4>
          </div>
          <div className="form">
            <input
              value={email}
              onChange={handleChangeEmail}
              name="email"
              className="form-field animation a3"
              placeholder="Email Address"
            />
            <input
              value={pass}
              onChange={handleChangePass}
              type="password"
              className="form-field animation a4"
              placeholder="Password"
            />

            <button
              type="submit"
              className="animation a6"
              onClick={handleClick}
            >
              LOGIN
            </button>
          </div>
        </div>
        <div className="right"></div>
      </div>
      <Modal onClose={() => setIsOpen(false)} open={isOpen}>
        You are logged!
      </Modal>
    </div>
  );
};

export default Users;
