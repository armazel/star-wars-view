import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch } from "react-router-dom";

import Details from "../../../components/Details/Details";
import EmptyPage from "../../../components/EmptyPage/EmptyPage";
import { entities } from "../../../const/entities";
import { routesList } from "../../../const/routesList";
import { loadPlanetItemById } from "../../../store/actions";
import { getPlanetsItemById } from "../../../store/selectors";
import { RootState } from "../../../store/store";
import { CardData, CardDetailsRenderConfigType } from "../../../store/types";
import { updateCardDetailsData } from "../../../utils/helpers";
import { requredPlanetsFields } from "./requredPlanetsFields";

const PlanetsDetails: React.FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPlanetItemById(id as string));
    }, []);

    const configRender: CardDetailsRenderConfigType = {
        requiredFields: requredPlanetsFields,
    };

    const match = useMatch(routesList.PLANETS_DETAILS);
    const id = match && match.params?.id;
    const data = useSelector((state: RootState) => getPlanetsItemById(state, { id }));

    return data 
        ? (
            <Details 
                data={updateCardDetailsData(data as CardData, configRender.requiredFields)}
                entity={entities.PLANETS}
                id={data?.id as string}
            />
        ) : (<EmptyPage />);
};

export default PlanetsDetails;
