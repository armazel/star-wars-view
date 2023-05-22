import React from "react";
import { Button, Typography } from "antd";

import "./Details.scss";

const componentName: string = "DetailsTitle";

const DetailsTitle: React.FC<
    {
        name: string,
        path: string,
    }
> = ({
    name,
    path,
}) => (
    <div className={componentName}>
        <Typography.Title>{name}</Typography.Title>
        <Button href={path}>Edit</Button>
    </div>
);

export default DetailsTitle;
