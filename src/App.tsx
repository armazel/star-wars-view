import React from "react";

import Header from "./components/Header/Header";
import Content from "./pages/Content/Content";
import Layout from "./pages/Layout/Layout";

const App = () => {
    return (
        <Layout>
            <Header />
            <Content />
        </Layout>
    );
};

export default App;