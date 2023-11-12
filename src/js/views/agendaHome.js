import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/agendaHome.css";

export const AgendaHome = () => {

	const { store, actions } = useContext(Context); //bring store to every component that hears it

	return (
		<div className="container">
			<nav className="navbar navbar-dark bg-dark rounded-bottom-1 mb-3 ">
				<span className="navbar-brand mb-1 "></span>
				<div className="ml-auto">
					<Link to="/agenda_form">
						<button className="btn btn-success me-3 p-2">Add new contact</button> /*cambiar a morado
					</Link>
				</div>
			</nav>
			<div>
				{store.agenda.length < 1 ? <h2>No contacts in your agenda!</h2>} :
				<ul>
					{store.agenda.map((item, key) =>

						<li className="border row">

							{/* Avatar container */}
							<div className="d-flex col-lg-3 col-md-4 col-sm-5 userImageContainer">
								<img src="https://picsum.photos/300/300" alt="Avatar" className="avatar" />
							</div>


							{/* Info container */}
							<div className="col-md-8 col-sm-6 col-lg-7 infoContainer">
								<div className="infoContainer">
									<h3>{item.full_name}</h3>
									<div>{item.address}</div>
									<div>{`(${item.phone.slice(0, 3)}) ${item.phone.slice(3, 6)}-${item.phone.slice(6)}`}</div>
									<div>{item.email}</div>
								</div>
							</div>


							{/* Edit and delete icons */}
							<div className=" col-lg-1 col-md-3 col-sm-6 d-flex iconsContainer " >
								<i className="fa-solid fa-pencil iconBtn " data-bs-toggle="modal" data-bs-target={`#editUser${key}`} ></i>
								<i className="fa-solid fa-trash-can iconBtn " data-bs-toggle="modal" data-bs-target={`#deleteUser${key}`}  ></i>
							</div>


							<div className="modal fade" id={`editUser${key}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
								<div className="modal-dialog">
									<div className="modal-content">
										<div className="modal-header">
											<h1 className="modal-title fs-5" id="staticBackdropLabel">Edit your contact</h1>
											<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => location.reload(true)}></button>
										</div>


										<div className="modal-body">
											<form>

												<div className="mb-3">
													<label className="form-label">Full Name</label>
													<input type="text" placeholder="Full Name" className="form-control" defaultValue={item.full_name} onChange={(event) => actions.setName(event.target.value)} required />
												</div>

												<div className="mb-3">
													<label className="form-label">Email</label>
													<input type="text" placeholder="Email" className="form-control" defaultValue={item.email} onChange={(event) => actions.setEmail(event.target.value)} required />
												</div>

												<div className="mb-3">
													<label className="form-label">Phone</label>
													<input type="text" placeholder="Phone" className="form-control" defaultValue={item.phone} onChange={(event) => actions.setPhone(event.target.value)} required />
												</div>

												<div className="mb-3">
													<label className="form-label">Address</label>
													<input type="text" placeholder="Address" className="form-control" defaultValue={item.address} onChange={(event) => actions.setAddress(event.target.value)} required />
												</div>

												<div className="d-flex">
													<button type="button" className="btn btn-secondary w-50" data-bs-dismiss="modal" onClick={() => location.reload(true)}>No</button>
													<button onClick={() => actions.editUser(item, key)} className="btn btn-primary w-50">Save</button>
												</div>
											</form>
											
										</div>
									</div>
								</div>
							</div>


						</li>
					)}
				</ul>
			</div>
		</div>
	)


};
