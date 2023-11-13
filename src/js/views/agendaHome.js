import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/contactCard";
import "../../styles/agendaHome.css";

export const AgendaHome = () => {

	const { store, actions } = useContext(Context); //bring store to every component that hears it

	return (
		<div className="container">
			<nav className="navbar navbar-dark bg-dark rounded-bottom-1 mb-3 ">
				<span className="navbar-brand mb-1 ms-3"><i class="fa-solid fa-phone"> &nbsp; Contact List</i></span>
				<div className="ml-auto">
					<Link to="/agenda_form">
						<button className="btn addNewContact me-3 p-2">Add new contact</button>
					</Link>
				</div>
			</nav>
			<div>
				{store.agenda.length < 1 ? <h2 className="noContatsMsg">No contacts in your agenda!</h2> :
					<ul>
						{store.agenda.map((item, index) =>

							<ContactCard key={index} item={item} index={index} actions={actions} />

						)}
					</ul>}
			</div>
		</div>
	)
};
