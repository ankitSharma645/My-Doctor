import React from "react";
import "../styles/LayoutStyles.css";
import { adminMenu, userMenu } from "./../Data/data";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, message } from "antd";
import './Header.css'
const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  // logout funtion
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };

  // =========== doctor menu ===============
  const doctorMenu = [
    {
      name: "Home",
      path: "/",
      icon: "fa-solid fa-house",
    },
    {
      name: "Appointments",
      path: "/doctor-appointments",
      icon: "fa-solid fa-list",
    },

    {
      name: "Profile",
      path: `/doctor/profile/${user?._id}`,
      icon: "fa-solid fa-user",
    },
  ];
  // =========== doctor menu ===============

  // redering menu list
  const SidebarMenu = user?.isAdmin
    ? adminMenu
    : user?.isDoctor
    ? doctorMenu
    : userMenu;
  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="menu">
              <div className="user-con">
                <img
                  src={
                    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisaZIv5nF6eJg0UUywUvo6-QHCXbXFn_yQdpDIi800NPF7GVq8mMz2Jz1m_-OsCgtDRY2A6WBg0QQf9Pwxd0x0aElNolzDsm1kwWrAXCgTeQELSLnkozlgI_jcBmdzP4E8YVCJpWVKS4_pRNLpzGIOkqsnJ8B9O5Plm3R9WcLOefjcc31igQMMZDO1/s512/doctor-avatar-male.png"
                  }
                  alt=""
                />
              </div>

              {SidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <>
                    <div className={`menu-item ${isActive && "active"}`}>
                      <i className={menu.icon}></i>
                      <Link to={menu.path}>{menu.name}</Link>
                    </div>
                  </>
                );
              })}
              <div className={`menu-item `} onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <Link to="/login">Logout</Link>
              </div>
            </div>
          </div>
          <div className="content">
          <div className="header">
              <div className="header-content" style={{ cursor: "pointer" }}>
              <img src="https://img.freepik.com/premium-vector/clinic-logo-template-icon-illustration-brand-identity-isolated-flat-illustration-vector-graphic_7109-2909.jpg?size=626&ext=jpg&ga=GA1.1.1265345670.1718437626&semt=ais_user" alt="Hospital Logo" className="hospital-logo" />
              <h1 className="system-tag">Doctor Appointment System</h1>
                <Badge
                  count={user && user.notifcation.length}
                  onClick={() => {
                    navigate("/notification");
                  }}
                >
                  <i class="fa-solid fa-bell"></i>
                </Badge>

                <Link to="/profile" className="profile-link">{user?.name}</Link>
              </div>
            </div> 
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

