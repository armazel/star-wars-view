import { Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Search/Search";
import { cardTypes } from "../../const/cardType";
import { loadStarShipsData } from "../../store/actions";
import { getStarShipsSearchData, getStarShipsTotalItems } from "../../store/selectors";
import { LoadCardParams } from "../../store/types";

import "./StartShipsControls.scss";

const componentName: string = "StarShipsControls";

const StarShipsControls = () => {
    const total: number = useSelector(getStarShipsTotalItems);
    const searchData = useSelector(getStarShipsSearchData);

    const dispatch = useDispatch();

    const onLoad = (params: LoadCardParams) => dispatch(loadStarShipsData(params));

    return (
        <div className={componentName} >
            <Search
                onLoad={onLoad} 
                cardType={cardTypes.STAR_SHIPS}
                searchData={searchData}
            />
            <Pagination onLoad={onLoad} total={total} />
        </div>
    );
};

export default StarShipsControls;
