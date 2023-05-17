import React from "react";
import { Link } from "react-router-dom";

import "./LinksList.scss";

const componentName = "LinksList";

interface NavigationPanelParams {
    tabLinks?: {
        tab: string,
        to: string,
    }[];
}

const tabLinksInit = [
    { tab: "People", to: "/" },
    { tab: "StarShips", to: "/starships" },
    { tab: "Planets", to: "/planets" },
];

const LinksList: React.FC<NavigationPanelParams> = ({
    tabLinks = tabLinksInit
}) => {

    return (
        <div className={componentName}>
            {tabLinks.map((link) => (
                <div className={"link_item"} key={link.tab}>
                    <Link key={link.to} to={link.to}>
                        {link.tab}
                    </Link>
                </div>
            ))}
        </div>
    );
};

LinksList.defaultProps = {
    tabLinks: tabLinksInit,
};

export default LinksList;