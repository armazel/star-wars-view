import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Search/Search";
import { cardTypes } from "../../const/cardType";
import { loadPeopleData } from "../../store/actions";
import { getPeopleSearchData, getPeopleTotalItems } from "../../store/selectors";
import { LoadCardParams } from "../../store/types";

import "./PeopleControls.scss";

const componentName: string = "PeopleControls";

const PeopleControls = () => {
    const total: number = useSelector(getPeopleTotalItems);
    const searchData = useSelector(getPeopleSearchData);
    const dispatch = useDispatch();

    const onLoad = (params: LoadCardParams) => dispatch(loadPeopleData(params));

    return (
        <div className={componentName}>
            <Search 
                onLoad={onLoad}
                cardType={cardTypes.PEOPLE}
                searchData={searchData}
            />
            <Pagination onLoad={onLoad} total={total} />
        </div>
    );
};

export default PeopleControls;
