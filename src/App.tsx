import React from "react";

import Header from "./components/Header/Header";
import Spinner from "./components/Spinner/Spinner";
// import Content from "./pages/Content/Content";
import Layout from "./pages/Layout/Layout";

const App = () => {
    return (
        <Layout>
            <Header />
            <Spinner>
                {/* <Content /> */}
            </Spinner>
        </Layout>
    );
};

export default App;