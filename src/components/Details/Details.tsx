import React from "react";

import { CardData } from "../../store/types";
import DetailsCard from "../DetailsCard/DetailsCard";

import { getItemImage } from "../../utils/helpers";
import DetailsTitle from "./DetailsTitle";

import "./Details.scss";

const componentName: string = "Details";

const Details: React.FC<
    {
        data: Partial<CardData>,
        entity: string,
        id: string,
        cardType: string,
    }
> = ({
    data,
    entity,
    id,
    cardType,
}) => {
    return data && id 
    ? (
        <div className={componentName}>
            <DetailsCard
                title={<DetailsTitle 
                    name={data?.name as string} 
                    path={`/${cardType}/${id}/edit`} 
                />}
                cardInfo={data as CardData}
                imgSrc={`${getItemImage(entity, id)}`}
            />
        </div>
    ): null;
};

export default Details;
