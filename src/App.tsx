import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadPeopleData } from "./store/actions";
import Layout from "./pages/Layout/Layout";
import Details from "./pages/Details/Details";
import PeoplePage from "./pages/People/PeoplePage";
import StarShipsPage from "./pages/StarShips/StarShipsPage";
import PlanetsPage from "./pages/Planets/PlanetsPage";

const App = () => {
    const dispatch = useDispatch();
    // const people = useSelector((state: any) => state.people.data);

    useEffect(() => {
        dispatch(loadPeopleData());
    });

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Layout />} >
                </Route>
            </Routes>
        </Layout>
    );
};

export default App;