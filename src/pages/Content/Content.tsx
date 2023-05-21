import React from "react";
import { Route, Routes } from "react-router-dom";
import { Col, Row, Layout } from "antd";

import PeoplePage from "../People/PeoplePage";
import StarShipsPage from "../StarShips/StarShipsPage";
import PlanetsPage from "../Planets/PlanetsPage";
import PeopleControls from "../People/PeopleControls";
import StarShipsControls from "../StarShips/StarShipsControls";
import PlanetsControls from "../Planets/PlanetsControls";
import PeopleDetails from "../People/PeopleDetails/PeopleDetails";

import "./Content.scss";
import PlanetsDetails from "../Planets/PlanetDetails/PlanetsDetails";
import StarShipsDetails from "../StarShips/StarShipsDetails/StarShipsDetails";
import { routesList } from "../../const/routesList";


const componentName = "Content";

const Content: React.FC = () => {
    const DefaultView = () => (
        <>
            <PeopleControls />
            <Row>
                <PeoplePage />
            </Row>
        </>
    );
    return (
        <Layout.Content>
            <Layout.Content className={componentName}>
            <Row>
                    <Col span={24}>
                        <Routes>
                            <Route path={routesList.DEFAULT} element={<DefaultView />} />
                            <Route path={routesList.PEOPLE} element={<DefaultView />} />
                            <Route path={routesList.STAR_SHIPS} element={
                                <>
                                    <StarShipsControls />
                                    <Col span={24}>
                                        <StarShipsPage />
                                    </Col>
                                </>
                            } />
                            <Route path={routesList.PLANETS} element={
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
                <Route path={routesList.PEOPLE_DETAILS} element={<PeopleDetails />} />
                <Route path={routesList.STAR_SHIPS_DETAILS} element={<StarShipsDetails />} />
                <Route path={routesList.PLANETS_DETAILS} element={<PlanetsDetails />} />
            </Routes>
        </Layout.Content>
    );
};

export default Content;
