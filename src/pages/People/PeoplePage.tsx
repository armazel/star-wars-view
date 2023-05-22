import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";

import { loadPeopleData } from "../../store/actions";
import { getPeople } from "../../store/selectors";
import CardList from "../../components/CardsList/CardList";
import { entities } from "../../const/entities";

const PeoplePage: React.FC = () => {

    const dispatch = useDispatch();
    const people = useSelector(getPeople);
    console.log("people", people);

    useEffect(() => {
        if(isEmpty(people)) {
            dispatch(loadPeopleData({
                page: 1,
            }));
        }
    }, []);

    return people && (
        <CardList 
            info={people} 
            entity={entities.PEOPLE} 
            imgHeight={350}
            width={"300"}
        />
    );
};

export default PeoplePage;
