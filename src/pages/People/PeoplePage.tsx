import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadPeopleData } from "../../store/actions";
import { getPeople } from "../../store/selectors";
import { LoadCardParams } from "../../store/types";
import CardList from "../../components/CardsList/CardList";
import { entities } from "../../const/entities";

const PeoplePage: React.FC = () => {

    const dispatch = useDispatch();
    const people = useSelector(getPeople);

    useEffect(() => {
        if(!people.length) {
            dispatch(loadPeopleData({
                page: 1,
            }));
        }
    }, []);

    const onSearchLoad = (params: LoadCardParams) => dispatch(loadPeopleData(params));

    return <CardList info={people} entity={entities.PEOPLE} />;
};

export default PeoplePage;
