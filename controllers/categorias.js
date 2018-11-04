const api = require('../api');

// Criar categoria
const novaForm = (req, res) => {
	res.render('categorias/nova');
}

const nova = async(req, res) => {
	await api.criar('categorias', {
		categoria: req.body.categoria
	});	
	res.redirect('/categorias');
}

// Listar categoria
const listar =  async(req, res) => {
	const categorias = await api.listar('categorias');
	res.render('categorias/index', { categorias });
}

// Excluir categoria
const excluir = async(req, res) => {
	await api.apagar('categorias', req.params.id);
	await api.apagar('publicacoes', req.params.id);
	res.redirect('/categorias');
}

// Editar categoria
const editar = async(req, res) => {
	const categoria = await api.editar('categorias', req.params.id);
	res.render('categorias/editar', {
		categoria
	});
}

// Atualizar categoria
const atualizar = async(req, res) => {
	await api.atualizar('categorias', req.params.id, {
		categoria: req.body.categoria
	});
	res.redirect('/categorias');
}

module.exports = {
	novaForm, nova,
	listar, excluir,
	editar, atualizar
}