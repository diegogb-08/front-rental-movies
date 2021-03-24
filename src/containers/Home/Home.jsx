import React from "react";
import ModalRender from "../Modal/ModalRender";

const Home = () => {
    return (
        <div className="homeContainer">
            <div className="nesting"></div>
            Hola soy home
            <ModalRender name="Tenemos Modal"></ModalRender>
            <button className="btn btn-primary"></button>
        </div>
    )
};

export default Home;