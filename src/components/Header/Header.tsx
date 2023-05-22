import React from "react";
import { Image } from "antd";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { Layout } from "antd";

import NavigationPanel from "../NavigationPanel/NavigationPanel";

import "./Header.scss";

const componentName: string = "Header";

const Header: React.FC = () => {
    return (
        <Layout.Header className={componentName}>
            <Row align={"middle"}>
                <Col md={24} lg={8}>
                    <Link to={"/"}>
                        <div className={"logo_wrapper"}>
                            <Image 
                                // eslint-disable-next-line no-undef
                                src={`${process.env.PUBLIC_URL}/logo.png`}
                                preview={false}
                                height="auto"
                            />
                        </div>
                    </Link>
                </Col>
                <Col md={24} lg={16}>
                    <NavigationPanel />
                </Col>
            </Row>
        </Layout.Header>
    );
};

export default Header;
