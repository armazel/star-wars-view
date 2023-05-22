import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { JSONSchema7 } from "json-schema";
import { isEmpty } from "lodash";
import { IChangeEvent } from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";

import BreadCrumbs from "../../../components/BreadCrumbs/BreadCrumbs";
import SchemaForm from "../../../components/SchemaForm/SchemaForm";
import { getPeopleItemById, getPeopleSchema } from "../../../store/selectors";
import { RootState } from "../../../store/store";
import { loadPeopleItemById, loadPeopleSchema, peopleDataUpdate } from "../../../store/actions";
import { Typography } from "antd";

import LocalStorageService from "../../../utils/localStorageHepler";
import { PeopleData } from "../../../store/types";
import { cardTypes } from "../../../const/cardType";

import "./PeopleDetailsEdit.scss";

const componentName: string = "PeopleDetailsEdit";

const PeopleDetailsEdit: React.FC = () => {
    const schema = useSelector(getPeopleSchema);
    const dispatch = useDispatch();
    const { Title } = Typography;
    const navigate = useNavigate();

    const { id } = useParams();

    const data = useSelector((state: RootState) => getPeopleItemById(state, { id }));

    useEffect(() => {
        if (isEmpty(data)) {
            dispatch(loadPeopleItemById(id as string));
        }
        dispatch(loadPeopleSchema());
    }, []);

    const handleSubmit = (e: IChangeEvent) => {
        const localStorageService = new LocalStorageService();
        localStorageService.setItem<PeopleData>(cardTypes.PEOPLE, id as string, e.formData);
        dispatch(peopleDataUpdate());

        navigate(`/${cardTypes.PEOPLE}/${id}`);
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

export default PeopleDetailsEdit;
