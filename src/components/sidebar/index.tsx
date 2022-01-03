import React, { FC } from "react";
import SidebarElementsComponent from "./sidebarElements";
import { SidebarType } from "../../store/side-bar/types";
import { getSidebar } from "../../store/side-bar/selectors";
import { useSelector } from "react-redux";
import ClosedSidebar from "./closedSidebar";
import OpenSidebar from "./openSidebar";

const SideBar: FC<{}> = () => {
  const data: SidebarType[] = SidebarElementsComponent();
  const sidebar: boolean = useSelector(getSidebar);
  return sidebar ? (
    <OpenSidebar data={data} sidebar={sidebar} />
  ) : (
    <ClosedSidebar data={data} sidebar={sidebar} />
  );
};

export default SideBar;
