import React, { useState } from "react";
import { Card as CardComponent } from "antd";
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

    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <CardComponent
            style={{ width: imgWidth }}
            className={componentName}
            hoverable
            cover={<img height={imgHeight} alt="example" src={imageError ? "/default_card.png" : imgSrc} />}
            onError={handleImageError}
        >
            <span>{cardInfo?.name}</span>
        </CardComponent>
    );
};

Card.defaultProps = {
    imgSrc: "",
    imgHeight: 350,
    imgWidth: 300,
};

export default Card;
