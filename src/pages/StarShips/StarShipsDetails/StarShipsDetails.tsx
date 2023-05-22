import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../../../components/BreadCrumbs/BreadCrumbs";

import Details from "../../../components/Details/Details";
import EmptyPage from "../../../components/EmptyPage/EmptyPage";
import { cardTypes } from "../../../const/cardType";
import { entities } from "../../../const/entities";
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

    const { id } = useParams();

    const data = useSelector((state: RootState) => getStarShipsItemById(state, { id }));

    return data 
        ? (
            <>
                <BreadCrumbs />
                <Details 
                    data={updateCardDetailsData(data as CardData, configRender.requiredFields)}
                    entity={entities.STAR_SHIPS}
                    id={data.id as string}
                    cardType={cardTypes.STAR_SHIPS}
                />
            </>
        ) : (<EmptyPage />);
};

export default StarShipsDetails;
