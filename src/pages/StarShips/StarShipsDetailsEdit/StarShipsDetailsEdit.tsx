import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { JSONSchema7 } from "json-schema";
import { isEmpty } from "lodash";
import { IChangeEvent } from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";

import SchemaForm from "../../../components/SchemaForm/SchemaForm";
import BreadCrumbs from "../../../components/BreadCrumbs/BreadCrumbs";
import { getStarShipSchema, getStarShipsItemById } from "../../../store/selectors";
import { RootState } from "../../../store/store";
import { loadStarShipItemById, loadStarShipSchema, starShipDataUpdate } from "../../../store/actions";
import { Typography } from "antd";

import LocalStorageService from "../../../utils/localStorageHepler";
import { StarShipsData } from "../../../store/types";
import { cardTypes } from "../../../const/cardType";

import "./StarShipsDetailsEdit.scss";

const componentName: string = "StarShipsDetailsEdit";

const StarShipsDetailsEdit: React.FC = () => {
    const schema = useSelector(getStarShipSchema);
    const dispatch = useDispatch();
    const { Title } = Typography;
    const navigate = useNavigate();

    const { id } = useParams();

    const data = useSelector((state: RootState) => getStarShipsItemById(state, { id }));

    useEffect(() => {
        if (isEmpty(data)) {
            dispatch(loadStarShipItemById(id as string));
        }

        dispatch(loadStarShipSchema());
    }, []);

    const handleSubmit = (e: IChangeEvent) => {
        const localStorageService = new LocalStorageService();
        localStorageService.setItem<StarShipsData>(cardTypes.STAR_SHIPS, id as string, e.formData);
        dispatch(starShipDataUpdate());

        navigate(`/${cardTypes.STAR_SHIPS}/${id}`);
    };

    return (
        <>
            <BreadCrumbs />
            <div className={componentName}>
                <Title>
                    {data?.name}
                </Title>
                <SchemaForm
                    schema={schema as JSONSchema7}
                    uiSchema={{}}
                    formData={data}
                    onSubmit={handleSubmit as (e: IChangeEvent<any, JSONSchema7, any>, event: FormEvent<any>) => void}
                    validator={validator}
                />
            </div>
        </>
    );
};

export default StarShipsDetailsEdit;
