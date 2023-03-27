const express = require('express');
const router = express.Router();
const Aluno = require('../controllers/aluno');

router.post('/aluno/cadastrar', Aluno.cadastrar);
router.get('/alunos', Aluno.listar);

router.post('/aluno/telefone', Aluno.adicionarTelefone);
router.get('/telefones/:ra', Aluno.listarTelefones);
router.delete('/aluno/excluir/:ra', Aluno.excluir);
router.get('/aluno/buscar/ra/:ra', Aluno.buscarAlunoRa);
router.get('/aluno/nome/:nome', Aluno.buscarAlunoNome);


module.exports = router;