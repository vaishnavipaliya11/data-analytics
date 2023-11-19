import { LogoutOutlined } from "@mui/icons-material";
import { Button } from "antd";
import React from "react";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [setCookie, removeCookie] = useCookies(['cookie-name']);

  return (
    <div className="navbar-container common-flex a-center j-bet">
      <p>Navbar</p>

      <Button type="">
        <LogoutOutlined />
      </Button>
    </div>
  );
};
