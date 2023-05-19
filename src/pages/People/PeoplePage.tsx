import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardList from "../../components/CardsList/CardList";
import Search from "../../components/Search/Search";
import { ApiParams } from "../../const/apiConstants";
import { entities } from "../../const/entities";

import { loadPeopleData } from "../../store/actions";
import { getPeople } from "../../store/selectors";

const PeoplePage: React.FC = () => {

    const dispatch = useDispatch();
    const people = useSelector(getPeople);

    useEffect(() => {
        if(!people.length) {
            dispatch(loadPeopleData({
                page: "1",
            }));
        }
    }, []);

    const onSearchLoad = (params: ApiParams) => dispatch(loadPeopleData(params));

    return <CardList info={people} entity={entities.PEOPLE} />;
};

export default PeoplePage;
