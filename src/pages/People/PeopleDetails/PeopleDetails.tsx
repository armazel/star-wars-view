import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../../../components/BreadCrumbs/BreadCrumbs";

import Details from "../../../components/Details/Details";
import EmptyPage from "../../../components/EmptyPage/EmptyPage";
import { cardTypes } from "../../../const/cardType";
import { entities } from "../../../const/entities";
import { loadPeopleItemById } from "../../../store/actions";
import { getPeopleItemById } from "../../../store/selectors";
import { RootState } from "../../../store/store";
import { CardData, CardDetailsRenderConfigType } from "../../../store/types";
import { updateCardDetailsData } from "../../../utils/helpers";
import { requredPeopleFields } from "./requiredPeopleFields";

const PeopleDetails: React.FC = () => {

    const dispatch = useDispatch();

    const { id } = useParams();

    const data = useSelector((state: RootState) => getPeopleItemById(state, { id }));

    useEffect(() => {
        dispatch(loadPeopleItemById(id as string));
    }, []);

    const configRender: CardDetailsRenderConfigType = {
        requiredFields: requredPeopleFields,
    };

    return data 
        ? (
            <>
                <BreadCrumbs />
                <Details 
                    data={updateCardDetailsData(data as CardData, configRender.requiredFields)}
                    entity={entities.PEOPLE}
                    id={data.id as string}
                    cardType={cardTypes.PEOPLE}
                />
            </>
        ) : (<EmptyPage />);
};

export default PeopleDetails;
