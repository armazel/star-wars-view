import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "antd";

import notFoundImage from "./not_found_404.svg";

import { getIsLoaded } from "../../store/selectors/loading";

import "./EmptyPage.scss";

const componentName:string = "EmptyPage";

const EmptyPage: React.FC = () => {

    const isLoaded: boolean = useSelector(getIsLoaded);

    return isLoaded ? (
        <div className={componentName}>
            <div className={"not-found"}>
                <Typography.Title>404</Typography.Title>
                <div className={"description"}>
                    <span>you lost your way</span>
                    <span>my son</span>
                </div>
                <img src={notFoundImage} alt="Not Found" />
            </div>
        </div>
    ) : null;
};

export default EmptyPage;
