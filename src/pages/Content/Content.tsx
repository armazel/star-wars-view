import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import PeoplePage from "../People/PeoplePage";
import Details from "../Details/Details";
import StarShipsPage from "../StarShips/StarShipsPage";
import PlanetsPage from "../Planets/PlanetsPage";

const componentName = "Content123";

const Content: React.FC = () => {
    return (
        <Layout.Content className={componentName}>
            <Routes>
                <Route path="/" element={<PeoplePage />} />
                <Route path="/people/:id" element={<Details />} />
                <Route path="/starships" element={<StarShipsPage />} />
                <Route path="/starships/:id" element={<Details />} />
                <Route path="/planets" element={<PlanetsPage />} />
                <Route path="/planets/:id" element={<Details />} />
            </Routes>
        </Layout.Content>
    );
};

export default Content;
