import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const AgendaForm = () => {

    const { store, actions } = useContext(Context);

    return (
        <div className="m-5 p-5">
            <h1 className="text-center">Add new Contact</h1>
            <form action="/" className="p-3">

                <div className="mb-3 text-center">
                    <label for="exampleInputEmail1" className="form-label"><b>Full Name</b></label>
                    <input type="text" placeholder="Full name" className="form-control text-center" onChange={(event) => actions.setName(event.target.value)} required />
                </div>

                <div className="mb-3 text-center">
                    <label for="exampleInputPassword1" className="form-label"><b>Email</b></label>
                    <input type="email" placeholder="Email" className="form-control text-center" onChange={(event) => actions.setEmail(event.target.value)} required />
                </div>

                <div className="mb-3 text-center">
                    <label for="exampleInputPassword1" className="form-label"><b>Phone</b></label>
                    <input placeholder="Enter phone" className="form-control text-center " onChange={(event) => actions.setPhone(event.target.value)} required />
                </div>

                <div className="mb-3 text-center">
                    <label for="exampleInputPassword1" className="form-label"><b>Address</b></label>
                    <input type="text" placeholder="Enter address" className="form-control text-center" onChange={(event) => actions.setAddress(event.target.value)} required />
                </div>

                <div className="buttonFormContainer">
                    <button onClick={() => actions.sendForm()} className="btn saveButton w-25 p-2 fs-5" type="submit" >Save</button>
                    <Link to={"/"}>

                        <p onClick={() => setInterval(() => location.reload(true), 200)} className="getBackAnchor my-3">or get back to contacts</p>

                    </Link>
                </div>

            </form>
        </div>
    )
}