import React from "react";
import { FormProps } from "@rjsf/core";
import Form from "@rjsf/antd";

import { CardData } from "../../store/types";


interface SchemaFormParams extends FormProps {
    formData?: CardData;
}
const SchemaForm: React.FC<SchemaFormParams> = ({
    schema,
    uiSchema,
    formData,
    validator,
}) => {
    const handleSubmit = (formData) => {
        // Обработчик отправки формы
        console.log("Submitted data:", formData);
    };

    return (
        <Form
            schema={schema}
            uiSchema={uiSchema}
            formData={formData}
            onSubmit={handleSubmit}
            validator={validator || (() => {})}
        />
    );
};

export default SchemaForm;
