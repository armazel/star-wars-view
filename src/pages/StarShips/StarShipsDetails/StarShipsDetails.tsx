import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch } from "react-router-dom";

import Details from "../../../components/Details/Details";
import EmptyPage from "../../../components/EmptyPage/EmptyPage";
import { entities } from "../../../const/entities";
import { routesList } from "../../../const/routesList";
import { loadStarShipItemById, loadStarShipsData } from "../../../store/actions";
import { getStarShipsItemById } from "../../../store/selectors";
import { RootState } from "../../../store/store";
import { CardData, CardDetailsRenderConfigType } from "../../../store/types";
import { updateCardDetailsData } from "../../../utils/helpers";
import { requiredStarShipsFields } from "./requiredStarShipsFields";

const StarShipsDetails: React.FC = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadStarShipItemById(id as string));
    }, []);

    const configRender: CardDetailsRenderConfigType = {
        requiredFields: requiredStarShipsFields,
    };

    const match = useMatch(routesList.STAR_SHIPS_DETAILS);
    const id = match && match.params?.id;
    const data = useSelector((state: RootState) => getStarShipsItemById(state, { id }));

    return data 
        ? (
            <Details 
                data={updateCardDetailsData(data as CardData, configRender.requiredFields)}
                entity={entities.STAR_SHIPS}
                id={data?.id as string}
            />
        ) : (<EmptyPage />);
};

export default StarShipsDetails;
