import React, { useState } from "react";
import { Col } from "antd";
import { AnyAction } from "redux";
import { toRoman } from "roman-numerals";
import { Pagination as PaginationComponent } from "antd";

import { LoadCardParams } from "../../store/types";

import "./Pagination.scss";

type PaginationParams = {
    onLoad: (param: LoadCardParams) => AnyAction;
    total: number, 
    searchData: string,
};

const componentName: string = "Pagination";

const Pagination: React.FC<PaginationParams> = ({
    onLoad,
    total,
    searchData,
}) => {

    const [ currentPage, setCurrentPage ] = useState<number>(1);

    const onChange = (page: number) => {
        setCurrentPage(page);
        onLoad({
            page,
            search: searchData,
        });
    };

    const itemRender = (page: number, type: string, originalElement: React.ReactNode) => 
        type === "page" ? toRoman(page) : originalElement;

    return (
        <Col className={componentName}>
            <PaginationComponent 
                className={componentName}
                current={currentPage}
                hideOnSinglePage
                total={total}
                pageSize={10}
                responsive
                onChange={onChange}
                showSizeChanger={false}
                itemRender={itemRender}
            />                               
        </Col>
    );
};

export default Pagination;
