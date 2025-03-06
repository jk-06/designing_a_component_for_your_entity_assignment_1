import userImage from "../src/assets/download1.png";
import React from "react";

function Usercard() {
const user = {
  userImage: userImage,
  name: "Jebakumar",
  email: "jebakumar@gmail.com",
  phone: "+91 6767676767",
  address: "Dubai Cross Street, Dubai Main Road, Dubai."
};


return (
  <div className="card">
    <img src={user.userImage} alt="Profile" className="profile-pic" />
    <h2>{user.name}</h2>
    <p><strong>Email:</strong> {user.email}</p>
    <p><strong>Phone:</strong> {user.phone}</p>
    <p className="address"><strong>Address:</strong> {user.address}</p>
  </div>
);
}

export default Usercard;