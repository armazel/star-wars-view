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
    renderNode?: React.ReactNode,
    title?: string | React.ReactNode,
    width?: string,
};

const Card: React.FC<CardParams> = ({
    cardInfo,
    imgSrc,
    imgHeight,
    imgWidth,
    renderNode,
    title,
    width,
}) => {

    return (
        <CardComponent
            title={title}
            className={componentName}
            hoverable
            style={{width}}
            cover={
                <Image
                    height={imgHeight}
                    width={imgWidth}
                    preview={false}
                    alt="example"
                    src={imgSrc}
                    // eslint-disable-next-line no-undef
                    fallback={`${process.env.PUBLIC_URL}/default_card.png`}
                />
            }
        >
            {
                renderNode 
                    ? renderNode
                    : (
                        <span>{cardInfo?.name}</span>
                    )
            }
        </CardComponent>
    );
};

Card.defaultProps = {
    imgSrc: "",
    imgHeight: 300,
    imgWidth: 300,
};

export default Card;
