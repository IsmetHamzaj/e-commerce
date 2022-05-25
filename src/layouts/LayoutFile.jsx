import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const LayOut = (BaseComponent) => (props) => {

    return (
        <div>
            <Header />
            <BaseComponent {...props} />
            <Footer />
        </div>
    )
}

export default LayOut