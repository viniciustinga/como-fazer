const axios = require('axios');
const baseURL = 'https://como-fazer-vfreitas.firebaseio.com/';
const auth = 'hlcrzO5NYxLz1KDNdtWbPNkpduWPObYzJnfzzK1v';

// Listar categoria
const listar = async(key) => {
	const content = await axios.get(baseURL+key+'.json?auth='+auth);
	if(content.data) {
		const objetos = Object
							.keys(content.data)
							.map(key => {
								return {
									id: key,
									...content.data[key]
								}
							});	
		return objetos;
	}
	return [];
}

// Excluir categoria
const apagar = async(key, id) => {
	await axios.delete(baseURL + key + '/' + id + '.json?auth='+auth);
	return true;
}

// Editar categoria
const editar = async(key, id) => {
	const content = await axios.get(baseURL + key + '/' + id + '.json?auth='+auth);
	return {
		id: id,
		...content.data	
	} 
}

// Atualizar categoria
const atualizar = async(key, id, data) => {
	await axios.put(baseURL + key + '/' + id + '.json?auth='+auth, data);
	return true;
}

// Criar categoria
const criar = async(key, data) => {
	await axios.post(baseURL+key+'.json?auth='+auth, data);
	return true;
}

module.exports = {
	listar, apagar, editar, atualizar, criar
}