import React from "react";
import { Button, Typography } from "antd";
import { Link } from "react-router-dom";

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
        <Link to={path}>
            <Button href={path}>Edit</Button>
        </Link>
    </div>
);

export default DetailsTitle;
