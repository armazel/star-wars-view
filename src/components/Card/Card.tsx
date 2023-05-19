import React from "react";
import { Card as CardComponent, Image } from "antd";
import { CardData } from "../../store/types";

import "./Card.scss";

const componentName: string = "Card";

type CardParams = {
    cardInfo: CardData,
    imgSrc?: string,
    imgHeight?: number,
    imgWidth?: number,
};

const Card: React.FC<CardParams> = ({
    cardInfo,
    imgSrc,
    imgHeight,
    imgWidth,
}) => {

    return (
        <CardComponent
            style={{ width: imgWidth }}
            className={componentName}
            hoverable
            cover={
                <Image
                    height={imgHeight}
                    preview={false}
                    alt="example"
                    src={imgSrc}
                    fallback={"/default_card.png"}
                />
            }
        >
            <span>{cardInfo?.name}</span>
        </CardComponent>
    );
};

Card.defaultProps = {
    imgSrc: "",
    imgHeight: 300,
    imgWidth: 300,
};

export default Card;
