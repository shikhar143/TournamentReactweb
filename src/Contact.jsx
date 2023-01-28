import React, { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullname: '',
        email: '',
        number: '',
        message: '',
    });
const InputEvent = (event) => {
    const {name, value} =event.target;
    setData((preVAl) => {
        return {
            ...preVAl,
            [name]: value,
        };
    }); 
};

    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `My name is ${data.fullname}. Number is ${data.number}. Email is ${data.email}`
        );
    };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center" >Contact Us
                </h1>
                <div className="Container Contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={formSubmit}>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Full Name</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter Name" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Contact Number</label>
                                    <input type="int" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    name="number"
                                    value={data.number}
                                    onChange={InputEvent}
                                    placeholder="Enter Number" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your Contact Number with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Message</label>
                                    <textarea class="form-control" 
                                    name="message"
                                    value={data.message}
                                    onChange={InputEvent}
                                    id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-outline-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;