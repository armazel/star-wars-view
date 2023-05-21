import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch } from "react-router-dom";

import Details from "../../../components/Details/Details";
import EmptyPage from "../../../components/EmptyPage/EmptyPage";
import { entities } from "../../../const/entities";
import { loadStarShipsData } from "../../../store/actions";
import { getStarShips, getStarShipsItemById } from "../../../store/selectors";
import { RootState } from "../../../store/store";
import { CardData, CardDetailsRenderConfigType } from "../../../store/types";
import { updateCardDetailsData } from "../../../utils/helpers";
import { requiredStarShipsFields } from "./requiredStarShipsFields";

const StarShipsDetails: React.FC = () => {

    const dispatch = useDispatch();
    const starShips = useSelector(getStarShips);

    useEffect(() => {
        if(!starShips.length) {
            dispatch(loadStarShipsData({
                page: 1,
            }));
        }
    }, []);

    const configRender: CardDetailsRenderConfigType = {
        requiredFields: requiredStarShipsFields,
    };

    const match = useMatch("/starShips/:id");
    const id = match && match.params?.id;
    const data = useSelector((state: RootState) => getStarShipsItemById(state, { id }));

    return data 
        ? (
            <Details 
                data={updateCardDetailsData(data as CardData, configRender.requiredFields)}
                entity={entities.PEOPLE}
                id={data?.id as string}
            />
        ) : (<EmptyPage />);
};

export default StarShipsDetails;
