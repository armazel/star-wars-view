import React from "react";
import { Image } from "antd";
import { Col, Row } from "antd";

import { Layout } from "antd";
import NavigationPanel from "../NavigationPanel/NavigationPanel";

import "./Header.scss";

const componentName: string = "Header";

const Header: React.FC = () => {
    return (
        <Layout.Header className={componentName}>
            <Row align={"middle"}>
                <Col md={24} lg={8}>
                    <div className={"logo_wrapper"}>
                        <Image 
                            src="logo.png"
                            preview={false}
                            width={400}
                            height="auto"
                        />
                    </div>
                </Col>
                <Col md={24} lg={16}>
                    <NavigationPanel />
                </Col>
            </Row>
        </Layout.Header>
    );
};

export default Header;
