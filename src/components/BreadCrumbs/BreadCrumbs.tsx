import React from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";

import "./BreadCrumbs.scss";

const componentName: string = "BreadCrumbs";

const BreadCrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/")
        .filter((path) => path !== "");

    const items: BreadcrumbItemType[] = pathnames.map((pathname, index) => ({
        title: index === pathnames.length - 1 
            ? <span>{pathname}</span> 
            : <Link to={`/${pathnames.slice(0, index + 1).join("/")}`}>{pathname}</Link>,
    }));

    return (
        <div className={componentName}>
            <Breadcrumb items={items} />
        </div>
    );
};

export default BreadCrumbs;
