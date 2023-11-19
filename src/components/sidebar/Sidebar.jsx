import { Avatar } from "antd";
import React from "react";
import { sideBarFilter } from "../../constant";
import { useSelector } from "react-redux";

export const Sidebar = () => {
    const {authUser}= useSelector(store => store.auth)
  return (
    <div className="sidebar-container">
      <div className="common-box-shadow">
        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" size={"large"}/>
        <p>vaishnavi</p>
        <p>{authUser.email}</p>
      </div>

      <div className="common-col a-start mar-sm" >
        {sideBarFilter.map(({ label, type, name }) => {
          return (
            <div className="common-col">
              <label>
                <input type={type} />
                {label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
