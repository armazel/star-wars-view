import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardList from "../../components/CardsList/CardList";
import { entities } from "../../const/entities";
import { loadPlanetsData } from "../../store/actions";
import { getPlanets } from "../../store/selectors";

const PlanetsPage: React.FC = () => {
    const dispatch = useDispatch();
    const planets = useSelector(getPlanets);

    useEffect(() => {
        if(!planets.length) {
            dispatch(loadPlanetsData({
                page: 1,
            }));
        }
    }, []);

    return (
        <CardList info={planets} entity={entities.PLANETS} />
    );
};

export default PlanetsPage;
