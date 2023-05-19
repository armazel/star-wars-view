import React, { ChangeEvent } from "react";
import { Col, Input } from "antd";
import debounce from "lodash/debounce";

import { LoadCardParams } from "../../store/types";

import "./Search.scss";


type SearchParams = {
    cardType: string,
    onLoad: (param: LoadCardParams) => void;
};

const componentName: string = "Search";

const Search: React.FC<SearchParams> = ({
    cardType,
    onLoad,
}) => {
    const debounceTimeout = 1500;

    const loadData = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if(inputValue) {
            onLoad({ search: inputValue });
        }
    };

    const onChange = debounce(loadData, debounceTimeout);

    return (
        <Col >
            <Input.Search
                    className={componentName}
                    onChange={onChange}
                    placeholder={`Please, enter name of ${cardType}`}
                />                      
            </Col>
    );
};

export default Search;
