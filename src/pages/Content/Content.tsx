import React from "react";
import { Route, Routes } from "react-router-dom";
import { Col, Row, Layout } from "antd";

import PeoplePage from "../People/PeoplePage";
import Details from "../Details/Details";
import StarShipsPage from "../StarShips/StarShipsPage";
import PlanetsPage from "../Planets/PlanetsPage";
import PeopleControls from "../People/PeopleControls";
import StarShipsControls from "../StarShips/StarShipsControls";
import PlanetsControls from "../Planets/PlanetsControls";

import "./Content.scss";


const componentName = "Content";

const Content: React.FC = () => {
    return (
        <Layout.Content>
            <Layout.Content className={componentName}>
            <Row>
                    <Col span={24}>
                        <Routes>
                            <Route path="/" element={
                                <>
                                    <PeopleControls />
                                    <Row>
                                        <PeoplePage />
                                    </Row>
                                </>
                            } />
                            <Route path="/starships" element={
                                <>
                                    <StarShipsControls />
                                    <Col span={24}>
                                        <StarShipsPage />
                                    </Col>
                                </>
                            } />
                            <Route path="/planets" element={
                                <>
                                    <PlanetsControls />
                                    <Col span={24}>
                                        <PlanetsPage />
                                    </Col>
                                </>
                            } />
                        </Routes>
                    </Col>
                </Row>
            </Layout.Content>
            <Routes>
                <Route path="/people/:id" element={<Details />} />
                <Route path="/starships/:id" element={<Details />} />
                <Route path="/planets/:id" element={<Details />} />
            </Routes>
        </Layout.Content>
    );
};

export default Content;
