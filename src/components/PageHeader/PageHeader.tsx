import React from "react";
import "./PageHeader.scss";
interface PageHeaderProps {
  title: string;
  children: any;
}
const PageHeader = ({ title, children }: PageHeaderProps) => {
  return (
    <div className="page-header">
      <div className="header-title">{title}</div>
      <div className="children">{children}</div>
    </div>
  );
};

export default PageHeader;
