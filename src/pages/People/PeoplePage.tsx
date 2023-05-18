import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardList from "../../components/CardsList/CardList";
import { entities } from "../../const/entities";

import { loadPeopleData } from "../../store/actions";
import { getPeople } from "../../store/selectors";

const PeoplePage: React.FC = () => {

    const dispatch = useDispatch();
    const people = useSelector(getPeople);

    useEffect(() => {
        if(!people.length) {
            dispatch(loadPeopleData("1"));
        }
    }, []);

    return (
        <CardList info={people} entity={entities.PEOPLE} />
    );
};

export default PeoplePage;
