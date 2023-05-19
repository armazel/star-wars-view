import React from "react";
import { Spin } from "antd";
import { useSelector } from "react-redux";

import { getIsLoading } from "../../store/selectors/loading";

import "./Spinner.scss";

type SpinnerParams = {
    children: React.ReactNode;
};

const componentName: string = "Spinner";

const Spinner: React.FC<SpinnerParams> = ({ children }) => {
    const isLoading = useSelector(getIsLoading);
    const className: string = isLoading ? "hide" : "show";
    console.log("isLoading", isLoading);
    return (
        <div className={`${componentName} ${className}`}>
            <Spin
                spinning={isLoading}
                indicator={<img src="loading.gif" alt="Loading" />}
            />
                
                <div className={`content-${className}`}>{children}</div>
        </div>
    );
};

export default Spinner;
