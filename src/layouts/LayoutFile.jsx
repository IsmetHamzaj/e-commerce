import React from "react";
import Header from './../components/Header'
import Footer from "../components/Footer";

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