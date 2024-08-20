import React from "react";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg top-fixed" style={{ backgroundColor: '#e3f2fd', borderBottom: '2px solid black', padding:15 }}>
        <a className="navbar-brand" href="#">ADP-Chat</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="">Chats</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">Edit Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
  );
};
