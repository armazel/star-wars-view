import { Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Search/Search";
import { cardTypes } from "../../const/cardType";
import { loadPlanetsData } from "../../store/actions";
import { getPlanetsSearchData, getPlanetsTotalItems } from "../../store/selectors";
import { LoadCardParams } from "../../store/types";

import "./PlanetsControls.scss";

const componentName: string = "PlanetsControls";

const PlanetsControls = () => {
    const total: number = useSelector(getPlanetsTotalItems);
    const searchData = useSelector(getPlanetsSearchData);

    const dispatch = useDispatch();

    const onLoad = (params: LoadCardParams) => dispatch(loadPlanetsData(params));

    return (
        <div className={componentName} >
            <Search 
                onLoad={onLoad}
                cardType={cardTypes.PLANETS}
                searchData={searchData}
            />
            <Pagination onLoad={onLoad} total={total} />
        </div>
    );
};

export default PlanetsControls;
