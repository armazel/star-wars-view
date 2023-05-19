import React from "react";
import { Col } from "antd";
import { Link } from "react-router-dom";

import Card from "../Card/Card";
import { CardsData } from "../../store/types";
import { entities } from "../../const/entities";
import { getItemImage } from "../../utils/helpers";

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
                <Col className="gutter-row" key={`${item.name}_${id}`} >
                    <Link to={`/${item.cardType}/${item.id}`} >
                        <Card 
                            cardInfo={item}
                            key={item.name}
                            imgSrc={`${getItemImage(entity, item.id)}`}
                        />
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
