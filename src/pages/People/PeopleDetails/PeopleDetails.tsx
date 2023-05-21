import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch } from "react-router-dom";

import Details from "../../../components/Details/Details";
import EmptyPage from "../../../components/EmptyPage/EmptyPage";
import { entities } from "../../../const/entities";
import { routesList } from "../../../const/routesList";
import { loadPeopleItemById } from "../../../store/actions";
import { getPeopleItemById } from "../../../store/selectors";
import { RootState } from "../../../store/store";
import { CardData, CardDetailsRenderConfigType } from "../../../store/types";
import { updateCardDetailsData } from "../../../utils/helpers";
import { requredPeopleFields } from "./requiredPeopleFields";

const PeopleDetails: React.FC = () => {

    const dispatch = useDispatch();

    const match = useMatch(routesList.PEOPLE_DETAILS);
    const id = match && match.params?.id as string;
    const data = useSelector((state: RootState) => getPeopleItemById(state, { id }));

    useEffect(() => {
        dispatch(loadPeopleItemById(id as string));
    }, []);

    const configRender: CardDetailsRenderConfigType = {
        requiredFields: requredPeopleFields,
    };

    return data 
        ? (
            <Details 
                data={updateCardDetailsData(data as CardData, configRender.requiredFields)}
                entity={entities.PEOPLE}
                id={data.id as string}
            />
        ) : (<EmptyPage />);
};

export default PeopleDetails;
