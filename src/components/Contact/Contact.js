import React from "react";
import "./index.css";

export default function Contact() {
    return (
        <form className="contact container">
            <h2>Contact</h2>
            <div className="form-group">
                <label for="exampleFormControlInput1">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
            </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
    )
}