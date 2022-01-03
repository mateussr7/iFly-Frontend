import { Typography } from "@material-ui/core";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { SidebarType } from "../../store/side-bar/types";
import "./sidebar.scss";

interface OpenSidebarProps {
  data: SidebarType[];
  sidebar: boolean;
}

const OpenSidebar: FC<OpenSidebarProps> = ({
  data,
  sidebar,
}: OpenSidebarProps) => {
  return (
    <div className="sidebar">
      <ul>
        {data.map((element, index) => {
          if (element.isVisible)
            return (
              <Link key={JSON.stringify(index)} to={element.ref} onClick={element.onClick}>
                {element.icon}
                <Typography>{element.label}</Typography>
              </Link>
            );
        })}
      </ul>
    </div>
  );
};

export default OpenSidebar;
