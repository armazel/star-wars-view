import React, { useState } from "react";
import { Card as CardComponent } from "antd";
import { getItemImage } from "../../utils/helpers";
import { CardData } from "../../store/types";

import "./Card.scss";

const componentName: string = "Card";

type CardParams = {
    cardInfo: CardData,
    entity: string,
};

const Card: React.FC<CardParams> = ({
    cardInfo,
    entity,
}) => {

    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <CardComponent
            style={{ width: 300 }}
            className={componentName}
            hoverable
            cover={<img height={350} alt="example" src={imageError ? "/default_card.png" : `${getItemImage(entity, cardInfo.id)}`} />}
            onError={handleImageError}
        >
            <span>{cardInfo.name}</span>
        </CardComponent>
    );
};

export default Card;
