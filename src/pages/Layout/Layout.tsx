import React from "react";
import { Layout, Divider } from "antd";

import Content from "../Content/Content";
import Header from "../../components/Header/Header";

import "./Layout.scss";

const componentName: string = "Layout";

const LayoutPage: React.FC = () => {
    return (
        <Layout className={componentName}>
            <Header />
            <Divider />
            <Content />
        </Layout>
    );
};

export default LayoutPage;
