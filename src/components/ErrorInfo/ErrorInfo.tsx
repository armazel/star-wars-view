import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "antd";

import errorImage from "./error.svg";

import "./ErrorInfo.scss";

const componentName:string = "ErrorInfo";

const ErrorInfo: React.FC = () => (
    <div className={componentName}>
        <div className={"not-found"}>
            <Typography.Title>Something went wrong.</Typography.Title>
            <div className={"description"}>
                <span>you lost your way</span>
                <span>my son</span>
            </div>
            <img src={errorImage} alt="Not Found" />
        </div>
    </div>
);

export default ErrorInfo;
