import React from "react";
import LinksList from "../LinksList/LinksList";

const componentName = "NavigationPanel";

const NavigationPanel: React.FC = () => {

    return (
        <div className={componentName}>
            <LinksList />
        </div>
    );
};

export default NavigationPanel;