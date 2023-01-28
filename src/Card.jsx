import React from "react";
import web from '../src/imsages/img2.webp';
import { NavLink } from "react-router-dom";
import Input from "./Input";

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto" >
                <div className="card">
                    <img className="card-img-top" src={props.imgsrc} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <NavLink to='/input' className="btn btn-primary">Create Tournament</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Card;