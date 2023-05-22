import React, { useEffect, useState } from "react";
import { FormProps } from "@rjsf/core";
import Form from "@rjsf/core";

import { CardData } from "../../store/types";

const componentName: string = "SchemaForm";
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
            className={componentName}
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
