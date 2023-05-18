import React from "react";
import { Spin } from "antd";
import { getIsLoading } from "../../store/selectors/loading";

import "./Spinner.scss";
import { useSelector } from "react-redux";

type SpinnerParams = {
    children: React.ReactNode;
};

const componentName: string = "Spinner";
//@ts-ignore
const Spinner: React.FC<SpinnerParams> = ({ children }) => {
    const isLoading = useSelector(getIsLoading);

    return isLoading
    ? (
        <div className={componentName}>
            <Spin 
                wrapperClassName={componentName}
                spinning={isLoading}
                indicator={<img src="loading.gif" alt="Loading" />}
            />
        </div>
    )
    : children;
};

export default Spinner;
