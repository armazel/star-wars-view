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

    return (
        <div className={`${componentName} ${className}`}>
            <Spin
                spinning={isLoading}
                // eslint-disable-next-line no-undef
                indicator={<img src={`${process.env.PUBLIC_URL}/loading.gif`} alt="Loading" />}
            />
                
                <div className={`content-${className}`}>{children}</div>
        </div>
    );
};

export default Spinner;
