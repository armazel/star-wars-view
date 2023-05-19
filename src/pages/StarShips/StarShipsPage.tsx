import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardList from "../../components/CardsList/CardList";
import { entities } from "../../const/entities";
import { loadStarShipsData } from "../../store/actions";
import { getStarShips } from "../../store/selectors";

const StarShipsPage: React.FC = () => {
    const dispatch = useDispatch();
    const starShips = useSelector(getStarShips);

    useEffect(() => {
        if(!starShips.length) {
            dispatch(loadStarShipsData({
                page: 1,
            }));
        }
    }, []);

    return (
        <CardList info={starShips} entity={entities.STAR_SHIPS} />
    );
};

export default StarShipsPage;
