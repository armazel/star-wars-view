import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";

import CardList from "../../components/CardsList/CardList";
import { entities } from "../../const/entities";
import { loadPlanetsData } from "../../store/actions";
import { getPlanets } from "../../store/selectors";
import { defaultPage } from "../../const/apiConstants";

const PlanetsPage: React.FC = () => {
    const dispatch = useDispatch();
    const planets = useSelector(getPlanets);

    useEffect(() => {
        if(isEmpty(planets)) {
            dispatch(loadPlanetsData({
                page: defaultPage,
            }));
        }
    }, []);

    return (
        <CardList info={planets} entity={entities.PLANETS} />
    );
};

export default PlanetsPage;
