import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../../../components/BreadCrumbs/BreadCrumbs";

import Details from "../../../components/Details/Details";
import EmptyPage from "../../../components/EmptyPage/EmptyPage";
import { cardTypes } from "../../../const/cardType";
import { entities } from "../../../const/entities";
import { loadPlanetItemById } from "../../../store/actions";
import { getPlanetsItemById } from "../../../store/selectors";
import { RootState } from "../../../store/store";
import { CardData, CardDetailsRenderConfigType } from "../../../store/types";
import { updateCardDetailsData } from "../../../utils/helpers";
import { requiredPlanetsFields } from "./requiredPlanetsFields";

const PlanetsDetails: React.FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPlanetItemById(id as string));
    }, []);

    const configRender: CardDetailsRenderConfigType = {
        requiredFields: requiredPlanetsFields,
    };

    const { id } = useParams();

    const data = useSelector((state: RootState) => getPlanetsItemById(state, { id }));

    return data 
        ? (
            <>
                <BreadCrumbs />
                <Details 
                    data={updateCardDetailsData(data as CardData, configRender.requiredFields)}
                    entity={entities.PLANETS}
                    id={data.id as string}
                    cardType={cardTypes.PLANETS}
                />
            </>
        ) : (<EmptyPage />);
};

export default PlanetsDetails;
