import React from "react";
import ModalRender from "../Modal/ModalRender";
import "./Home.sass";

const Home = () => {
    return (
        <div className="homeContainer">

            Hola soy home
            <ModalRender name="Tenemos Modal"></ModalRender>
        </div>
    )
};

export default Home;