import React from "react";
import web from "../src/imsages/img1.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common
                name='Grow your Tournament with'
                imgsrc={web}
                visit="/Service"
                btname='Get Started'
            />
        </>
    );
};

export default Home;