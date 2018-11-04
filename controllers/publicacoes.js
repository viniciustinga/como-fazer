const api = require('../api');

// Nova publicação
const novaForm = async(req, res) => {
	const categorias = await api.listar('categorias');
	res.render('publicacoes/nova', { categorias });
}

// Salvar nova publicação
const nova = async(req, res) => {
	await api.criar('publicacoes/' + req.body.categoria, {
		titulo: req.body.titulo,
		conteudo: req.body.conteudo
	});	
	res.redirect('/publicacoes/categoria/'+req.body.categoria);
}

// Listar publicação
const listar =  async(req, res) => {
	const categoria = req.params.categoria;
	const publicacoes = await api.listar('publicacoes/'+categoria);
	res.render('publicacoes/index', { publicacoes, categoria });
}

// Excluir publicação
const excluir = async(req, res) => {
	await api.apagar('publicacoes/'+req.params.categoria, req.params.id);
	res.redirect('/publicacoes/categoria/'+req.params.categoria);
}

// Editar publicação
const editar = async(req, res) => {
	const publicacao = await api.editar('publicacoes/'+req.params.categoria, req.params.id);
	res.render('publicacoes/editar', {
		publicacao,
		categoria: req.params.categoria
	});
}

// Atualizar publicação
const atualizar = async(req, res) => {
	await api.atualizar('publicacoes/'+req.params.categoria, req.params.id, {
		titulo: req.body.titulo,
		conteudo: req.body.conteudo
	});
	res.redirect('/publicacoes/categoria/'+req.params.categoria);
}

module.exports = {
	novaForm, nova,
	listar, excluir,
	editar, atualizar
}