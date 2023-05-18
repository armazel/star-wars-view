import React from "react";
import { Col } from "antd";
import { Link } from "react-router-dom";

import Card from "../Card/Card";
import { CardsData } from "../../store/types";
import { entities } from "../../const/entities";

import "./CardList.scss";

const componentName: string = "CardList";

type CardListParams = {
    info: CardsData,
    entity: string,
};

const CardList: React.FC<CardListParams> = ({
    info,
    entity,
}) => (
    <div className={componentName}>
        {info.map((item, id: number) => (
                <Col className="gutter-row" xl={4} lg={12} md={24} xs={24} key={`${item.name}_${id}`} >
                    <Link to={`/${item.cardType}/${item.id}`} >
                        <Card cardInfo={item} key={item.name} entity={entity} />
                    </Link>
                </Col>
        ))}
    </div>
);

CardList.defaultProps = {
    info: [],
    entity: entities.PEOPLE,
};

export default CardList;
