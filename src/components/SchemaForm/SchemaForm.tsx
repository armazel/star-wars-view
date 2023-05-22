import React, { useEffect, useState } from "react";
import { FormProps } from "@rjsf/core";
import Form from "@rjsf/antd";
import { isEmpty } from "lodash";

import { CardData } from "../../store/types";

interface SchemaFormParams extends FormProps {
    formData?: CardData;
}
const SchemaForm: React.FC<SchemaFormParams> = ({
    schema,
    uiSchema,
    formData,
    onSubmit,
    validator,
}) => {

    return (
        <Form
            schema={schema}
            uiSchema={uiSchema}
            formData={formData}
            onSubmit={onSubmit}
            validator={validator}
            noValidate
        />
    );
};

export default SchemaForm;
