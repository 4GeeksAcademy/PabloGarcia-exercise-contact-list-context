const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: [] // VARIABLES QUE VOY A TENER
		},
		actions: {
			// FUNCIONES QUE VOY A UTILIZAR
			// OBTENER CONTACTO

			getContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/agenda_pablogarcia")
					.then(response => response.json())
					.then(data => {
						setStore({ contacts: data });
					})
					.catch(error => console.log(error));
			},

			// CREAR CONTACTO

			createContact: (full_name, address, phone, email) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: full_name,
						email: email,
						agenda_slug: "agenda_pablogarcia",
						address: address,
						phone: phone
					})
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.error(error));
			},

			// MODIFICAR CONTACTO
			updateContact: (full_name, email, address, phone) => {
				fetch("https://assets.breatheco.de/apis/fake/contact", {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: full_name,
						email: email,
						agenda_slug: "bertablancpastoragenda",
						address: address,
						phone: phone
					}) // body data type must match "Content-Type" header
				}) //busca informacion a la url dada con el metodo especificado
					.then(response => response.json()) // => convierto la respuesta buscada en un json => {"info":{},"results":[]} "hola"
					.then(data => console.log(data)) // => guardo el json en un espacio de memoria
					.catch(error => console.log(error)); // => te aviso si algo sale mal
			},

			// ELIMINAR CONTACTO

			deleteContact: id => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "DELETE"
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			}
		}
	};
};
export default getState;
