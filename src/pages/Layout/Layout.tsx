import React from "react";
import { Layout } from "antd";

import "./Layout.scss";

const componentName: string = "Layout";

type LayoutPageParams = {
    children: React.ReactNode;
};

const LayoutPage: React.FC<LayoutPageParams> = ({
    children,
}) => {
    return (
        <Layout className={componentName}>
            {children}
        </Layout>
    );
};

export default LayoutPage;
