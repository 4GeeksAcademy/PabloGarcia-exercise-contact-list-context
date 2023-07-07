import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const AddContact = () => {
	const { store, actions } = useContext(Context); // desestrucutrando
	const [full_name, setFull_name] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		actions.createContact(full_name, address, phone, email);
	};
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form onSubmit={e => handleSubmit(e)}>
					<div className="form-group">
						<label>Full Name</label>
						<input
							onChange={e => setFull_name(e.target.value)}
							type="text"
							className="form-control"
							placeholder="Full Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							onChange={e => setEmail(e.target.value)}
							type="email"
							className="form-control"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							onChange={e => setPhone(e.target.value)}
							type="phone"
							className="form-control"
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							onChange={e => setAddress(e.target.value)}
							type="text"
							className="form-control"
							placeholder="Enter address"
						/>
					</div>
					<button type="submit" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
