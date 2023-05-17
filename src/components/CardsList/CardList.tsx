import React from "react";
import { Col } from "antd";
import { Link } from "react-router-dom";

import EmptyPage from "../EmptyPage/EmptyPage";
import Card from "../Card/Card";
import { CardsData } from "../../store/types";
import { entities } from "../../const/entities";
import { getItemImage } from "../../utils/helpers";

import "./CardList.scss";

const componentName: string = "CardList";

type CardListParams = {
    info: CardsData,
    entity: string,
    imgHeight?: number,
    imgWidth?: number,
    width?: string,
};

const CardList: React.FC<CardListParams> = ({
    info,
    entity,
    imgWidth,
    imgHeight,
    width,
}) => (
    <div className={componentName}>
        {
            info?.length
                ? info.map((item, id: number) => (
                    <Col className="gutter-row" key={`${item.name}_${id}`} >
                        <Link 
                            to={{
                                pathname: `/${item.cardType}/${item.id}`,
                            }}
                        >
                            <Card
                                cardInfo={item}
                                key={item.name}
                                imgSrc={`${getItemImage(entity, item.id)}`}
                                imgHeight={imgHeight}
                                imgWidth={imgWidth}
                                width={width}
                            />
                        </Link>
                    </Col>
                ))
            : info?.length === 0 && <EmptyPage />
        }
    </div>
);

CardList.defaultProps = {
    info: [],
    entity: entities.PEOPLE,
};

export default CardList;
