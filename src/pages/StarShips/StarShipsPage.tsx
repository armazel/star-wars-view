import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";

import CardList from "../../components/CardsList/CardList";
import { entities } from "../../const/entities";
import { loadStarShipsData } from "../../store/actions";
import { getStarShips } from "../../store/selectors";
import { defaultPage } from "../../const/apiConstants";

const StarShipsPage: React.FC = () => {
    const dispatch = useDispatch();
    const starShips = useSelector(getStarShips);

    useEffect(() => {
        if(isEmpty(starShips)) {
            dispatch(loadStarShipsData({
                page: defaultPage,
            }));
        }
    }, []);

    return (
        <CardList 
            info={starShips}
            entity={entities.STAR_SHIPS}
            imgHeight={300}
            width={"300px"}
        />
    );
};

export default StarShipsPage;
