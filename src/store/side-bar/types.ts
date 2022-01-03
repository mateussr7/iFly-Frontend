import { ReactElement } from "react";

export interface SideBarState {
  sidebar: boolean;
}

export interface SidebarType {
  label: string;
  admin: boolean;
  icon: ReactElement;
  ref: string;
  isVisible: Boolean;
}

export enum SideBarActions {
  OPEN_SIDEBAR = "@sidebar/OPEN_SIDEBAR",
  CLOSE_SIDEBAR = "@sidebar/CLOSE_SIDEBAR",
}
