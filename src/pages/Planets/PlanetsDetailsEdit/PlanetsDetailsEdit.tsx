import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { JSONSchema7 } from "json-schema";
import { isEmpty } from "lodash";
import { IChangeEvent } from "@rjsf/core";
import { Typography } from "antd";
import validator from "@rjsf/validator-ajv8";

import SchemaForm from "../../../components/SchemaForm/SchemaForm";
import BreadCrumbs from "../../../components/BreadCrumbs/BreadCrumbs";
import { getPlanetSchema, getPlanetsItemById } from "../../../store/selectors";
import { RootState } from "../../../store/store";
import { loadPlanetItemById, loadPlanetSchema, planetDataUpdate } from "../../../store/actions";

import LocalStorageService from "../../../utils/localStorageHepler";
import { PlanetsData } from "../../../store/types";
import { cardTypes } from "../../../const/cardType";

import "./PlanetsDetailsEdit.scss";

const componentName: string = "PlanetsDetailsEdit";

const PlanetsDetailsEdit: React.FC = () => {
    const schema = useSelector(getPlanetSchema);
    const dispatch = useDispatch();
    const { Title } = Typography;
    const navigate = useNavigate();

    const { id } = useParams();

    const data = useSelector((state: RootState) => getPlanetsItemById(state, { id }));

    useEffect(() => {
        if (isEmpty(data)) {
            dispatch(loadPlanetItemById(id as string));
        }

        dispatch(loadPlanetSchema());
    }, []);

    const handleSubmit = (e: IChangeEvent) => {
        const localStorageService = new LocalStorageService();
        localStorageService.setItem<PlanetsData>(cardTypes.PLANETS, id as string, e.formData);
        dispatch(planetDataUpdate());

        navigate(`/${cardTypes.PLANETS}/${id}`);
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

export default PlanetsDetailsEdit;
