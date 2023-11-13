import { json } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	const apiUrl = "https://playground.4geeks.com/apis/fake/contact";

	return {
		store: {
			//declaro un array para llenarlos con los objetos obtenidos del GET
			agenda: [],

			//declaro un objeto para luego llenarlo con el valor de mis inputs
			inputs: {
				nameInput: "",
				emailInput: "",
				agenda_slug: "",
				addressInput: "",
				phoneInput: ""
			}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			//hago un GET request para luego llenar mi array que lleva el nombre de agenda
			getAgenda: async () => {
				try {
					const store = getStore()
					await fetch(`${apiUrl}/agenda/liliscontacts`)
						.then(response => response.json())
						.then(data => {
							data.map((e) => store.agenda.push(e))
							setStore({ agenda: store.agenda })
						})
				}
				catch (e) { console.log("Error requesting agenda: ", e) }

			},

			//declaro funciones para llenar mi objeto inputs con los valores ingresados en los inputs de los formularios
			setName: async (name) => {
				const store = getStore()
				store.inputs.nameInput = name
				await setStore({ name: store.inputs.nameInput })
				console.log(store.inputs)
			},

			setEmail: async (email) => {
				const store = getStore()
				store.inputs.emailInput = email
				await setStore({ email: store.inputs.emailInput })
				console.log(store.inputs)
			},

			setAddress: async (address) => {
				const store = getStore()
				store.inputs.addressInput = address
				await setStore({ address: store.inputs.addressInput })
				console.log(store.inputs)
			},

			setPhone: async (phone) => {
				const store = getStore()
				store.inputs.phoneInput = phone
				await setStore({ phone: store.inputs.phoneInput })
				console.log(store.inputs)
			},

			//declaro una funcion para luego declarar un objeto en el que asigno los valores de las repectivas propiedades de mi objeto inputs
			//luego verifico que el objeto no este vacio para luego hacer el POST request

			sendForm: async () => {
				const store = getStore()
				try {
					const data = {
						address: store.inputs.addressInput,
						agenda_slug: "liliscontacts",
						email: store.inputs.emailInput,
						full_name: store.inputs.nameInput,
						phone: store.inputs.phoneInput
					}
					if (data.full_name.length !== 0 || data.phone.length !== 0 || data.address.length !== 0 || data.email.length !== 0) {


						await fetch(`${apiUrl}`, {
							method: 'POST',
							headers: {
								"Content-type": "application/json"
							},
							body: JSON.stringify(data)
						}).then((response) => response.json())
							.then((json) => console.log(json))


					}
					else { alert("Complete all fields to procede") }
				}
				catch (e) {
					console.log("send form ERROR ===", e)

				}
			},

			//declaro mi funcion para borrar un usuario en particular
			deleteUser: async (i) => {
				try {
					let id = i
					await fetch(`${apiUrl}/${id}`, { method: "DELETE", })
					location.reload()

				} catch (e) {
					console.log("Delete User Function ERROR===", e)
				}
			},

			//con esta funcion recibo 2 parametros 1: el elemento seleccionado 2: el indice del mismo
			//lleno el objeto y luego verifico de que los inputs que no fueron modificados por el usuario terminen con la misma informacion que ya tenian

			editUser: async (item, key) => {

				try {

					const store = getStore()

					const data = {
						address: store.inputs.addressInput,
						agenda_slug: "liliscontacts",
						email: store.inputs.emailInput,
						full_name: store.inputs.nameInput,
						phone: store.inputs.phoneInput
					}

					if (data.email.length == 0) {
						let email = store.agenda[key].email
						data.email = email

					}
					if (data.phone.length == 0) {
						let phone = store.agenda[key].phone
						data.phone = phone

					}
					if (data.full_name.length == 0) {
						let name = store.agenda[key].full_name
						data.full_name = name

					}
					if (data.address.length == 0) {
						let address = store.agenda[key].address
						data.address = address
					}
					let id = item.id

					await fetch(`${apiUrl}/${id}`,
						{

							method: 'PUT',
							headers: {
								'Content-type': 'application/json'
							},
							body: JSON.stringify(data)
						}
					);



				} catch (e) {
					console.log("editUser Function Error ===", e)
				}

			}
		}
	};
};

export default getState;
