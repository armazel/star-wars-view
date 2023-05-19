import React from "react";
import { Route, Routes } from "react-router-dom";
import { Col, Row, Layout } from "antd";

import PeoplePage from "../People/PeoplePage";
import Details from "../Details/Details";
import StarShipsPage from "../StarShips/StarShipsPage";
import PlanetsPage from "../Planets/PlanetsPage";
import Search from "../../components/Search/Search";
import { 
    loadPeopleData,
    loadPlanetsData,
    loadStarShipsData,
} from "../../store/actions";
import { cardTypes } from "../../const/cardType";

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
                                <Row>
                                    <Col span={12}>
                                        <Search onLoad={loadPeopleData} cardType={cardTypes.PEOPLE} />
                                    </Col>
                                    <Col span={24}>
                                        <PeoplePage />
                                    </Col>
                                </Row>
                            } />
                            <Route path="/starships" element={
                                <Row>
                                    <Col span={12}>
                                        <Search onLoad={loadPlanetsData} cardType={cardTypes.STAR_SHIPS}/>
                                    </Col>
                                    <Col span={24}>
                                        <StarShipsPage />
                                    </Col>
                                </Row>
                            } />
                            <Route path="/planets" element={
                                <Row>
                                    <Col span={12}>
                                        <Search onLoad={loadStarShipsData} cardType={cardTypes.PLANETS}/>
                                    </Col>
                                    <Col span={24}>
                                        <PlanetsPage />
                                    </Col>
                                </Row>
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
