import React from "react";
import { Card as CardComponent, Image } from "antd";
import { CardData } from "../../store/types";

import "./DetailsCard.scss";

const componentName: string = "DetailsCard";

type CardParams = {
    cardInfo: CardData,
    imgSrc?: string,
    imgHeight?: number,
    imgWidth?: number,
    renderNode?: React.ReactNode,
    title?: string | React.ReactNode,
    width?: string,
};

const DetailsCard: React.FC<CardParams> = ({
    cardInfo,
    imgSrc,
    imgHeight,
    imgWidth,
    renderNode,
    title,
    width,
}) => {
    console.log('imgSrc', imgSrc);
    const renderData = (data: CardData) => {
        return (
            <>
                {
                    Object.keys(cardInfo)?.map((item) => (
                        <p key={`${item}`}>{`${item}: ${data[item as keyof CardData]}`}</p>
                    ))
                }
            </>
        );
    };

    return (
        <CardComponent
            title={title}
            className={componentName}
            hoverable
            style={{ width }}
        >
            <div className="wrapper">
                <Image
                    height={imgHeight}
                    width={imgWidth}
                    preview={false}
                    alt="example"
                    src={imgSrc}
                    fallback={"/default_card.png"}
                />
                <div className="description">
                    {  
                        renderNode
                            ? renderNode
                            : renderData(cardInfo)
                    }
                </div>
            </div>
        </CardComponent>
    );
};

DetailsCard.defaultProps = {
    imgSrc: "",
    imgHeight: 300,
    imgWidth: 300,
};

export default DetailsCard;
