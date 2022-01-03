import React, { FC } from "react";
import { Link } from "react-router-dom";
import { SidebarType } from "../../store/side-bar/types";
import "./sidebar.scss";

interface ClosedSidebarProps {
  data: SidebarType[];
  sidebar: boolean;
}

const ClosedSidebar: FC<ClosedSidebarProps> = ({
  data,
  sidebar,
}: ClosedSidebarProps) => {
  return (
    <div className="closedSidebar">
      <ul>
        {data.map((element, index) => {
          if (element.isVisible)
            return (
              <Link id="link" key={JSON.stringify(index)} to={element.ref}>
                {element.icon}
              </Link>
            );
        })}
      </ul>
    </div>
  );
};

export default ClosedSidebar;
