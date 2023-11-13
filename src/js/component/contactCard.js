import React from 'react';

export const ContactCard = ({ item, index, actions }) => {
    // Extracting the first two numbers of the ID to have different identifiers
    const firstTwoDigits = item.id.toString().slice(0, 2);

    // Creating a lorempicsum URL with the first two digits as a query parameter
    const imageUrl = `https://picsum.photos/300/300?seed=${firstTwoDigits}`;

    return (
        <li className="border row listContainer">

            {/* Avatar container */}
            <div className="d-flex col-lg-3 col-md-4 col-sm-5 userImageContainer">
                <img src={imageUrl} alt="Avatar" className="avatar" />
            </div>


            {/* Info container */}
            <div className="col-md-8 col-sm-6 col-lg-7 infoContainer">
                <div className="infoContainer">
                    <h3>{item.full_name}</h3>
                    <div className="fw-semibold text-secondary fs-5"><i class="fa-solid fa-location-dot me-2"></i>{item.address}</div>
                    <div className=" text-secondary"><i class="fa-solid fa-phone me-2"></i>{`(${item.phone.slice(0, 3)}) ${item.phone.slice(3, 6)}-${item.phone.slice(6)}`}</div>
                    <div className="text-secondary"><i class="fa-solid fa-envelope me-2"></i>{item.email}</div>
                </div>
            </div>


            {/* Edit and delete icons */}
            <div className=" col-lg-1 col-md-3 col-sm-6 d-flex iconsContainer " >
                <i className="fa-solid fa-pencil iconBtn " data-bs-toggle="modal" data-bs-target={`#editUser${index}`} ></i>
                <i className="fa-solid fa-trash-can iconBtn " data-bs-toggle="modal" data-bs-target={`#deleteUser${index}`} > </i>

            </div>


            <div className="modal fade" id={`editUser${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                                    <input type="text" placeholder="Full Name" className="form-control editModal" defaultValue={item.full_name} onChange={(event) => actions.setName(event.target.value)} required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="text" placeholder="Email" className="form-control editModal" defaultValue={item.email} onChange={(event) => actions.setEmail(event.target.value)} required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Phone</label>
                                    <input type="text" placeholder="Phone" className="form-control editModal" defaultValue={item.phone} onChange={(event) => actions.setPhone(event.target.value)} required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Address</label>
                                    <input type="text" placeholder="Address" className="form-control editModal" defaultValue={item.address} onChange={(event) => actions.setAddress(event.target.value)} required />
                                </div>

                                <div className="d-flex">
                                    <button type="button" className="btn btn-secondary w-50" data-bs-dismiss="modal" onClick={() => location.reload(true)}>No</button>
                                    <button onClick={() => actions.editUser(item, index)} className="btn btn-primary w-50">Save</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id={`deleteUser${index}`} tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">Are you sure?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            This action cannot be undone
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-secondary" onClick={() => actions.deleteUser(item.id)}>Delete anyway</button>

                        </div>
                    </div>
                </div>
            </div>

        </li>
    );
};

