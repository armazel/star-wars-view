import React, { ChangeEvent } from "react";
import { Input } from "antd";
import { AnyAction } from "redux";
import debounce from "lodash/debounce";
import { useDispatch } from "react-redux";

import { ApiParams } from "../../const/apiConstants";

import "./Search.scss";

type SearchParams = {
    cardType: string,
    onLoad: (param: ApiParams) => AnyAction;
};

const componentName: string = "Search";

const Search: React.FC<SearchParams> = ({
    cardType,
    onLoad,
}) => {
    const debounceTimeout = 1500;
    const dispatch = useDispatch();

    const loadData = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        dispatch(
            onLoad({ search: inputValue })
        );
    };

    const onChange = debounce(loadData, debounceTimeout);

    return (
        <Input.Search
            className={componentName}
            onChange={onChange}
            placeholder={`Please, enter name of ${cardType}`}
        />
    );
};

export default Search;
