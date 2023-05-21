import React from "react";

import { CardData, CardType } from "../../store/types";
import DetailsCard from "../DetailsCard/DetailsCard";

import "./Details.scss";
import { getItemImage } from "../../utils/helpers";

const componentName: string = "Details";

const Details: React.FC<
    {
        data: Partial<CardData>,
        entity: string,
        id: string,
    }
> = ({
    data,
    entity,
    id,
}) => {

    return data && id 
    ? (
        <div className={componentName}>
            <DetailsCard
                title={data?.name}
                cardInfo={data as CardData}
                imgSrc={`${getItemImage(entity, id)}`}
            />
        </div>
    ): null;
};

export default Details;