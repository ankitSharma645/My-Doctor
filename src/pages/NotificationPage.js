import React from "react";
import Layout from "./../components/Layout";
import { message, Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./NotificationPage.css"
const NotificationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  //   handle read notification
  const handleMarkAllRead = async () => {
    window.location.reload()
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/get-all-notification",
        {
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("somthing went wrong");
    }
  };

  // delete notifications
  const handleDeleteAllRead = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/delete-all-notification",
        { userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Somthing Went Wrong In Ntifications");
    }
  };
  return (
    <Layout>
    <h4 className="notification-title text-center">Notification Page</h4>
    <Tabs className="tab-content">
      <Tabs.TabPane tab="unRead" key={0}>
        <div className="d-flex justify-content-end">
          <h4 className="mark-read-delete" onClick={handleMarkAllRead}>
            Mark All Read
          </h4>
        </div>
        {user?.notifcation.map((notificationMgs) => (
          <div className="card" style={{ cursor: "pointer" }} key={notificationMgs.id}>
            <div
              className="card-text"
              onClick={() => navigate(notificationMgs.onClickPath)}
            >
              {notificationMgs.message}
            </div>
          </div>
        ))}
      </Tabs.TabPane>
      <Tabs.TabPane tab="Read" key={1}>
        <div className="d-flex justify-content-end">
          <h4
            className="mark-read-delete"
            onClick={handleDeleteAllRead}
          >
            Delete All Read
          </h4>
        </div>
        {user?.seennotification.map((notificationMgs) => (
          <div className="card" style={{ cursor: "pointer" }} key={notificationMgs.id}>
            <div
              className="card-text"
              onClick={() => navigate(notificationMgs.onClickPath)}
            >
              {notificationMgs.message}
            </div>
          </div>
        ))}
      </Tabs.TabPane>
    </Tabs>
  </Layout>
  );
};

export default NotificationPage;
