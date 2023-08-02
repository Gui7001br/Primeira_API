const Produtos = require('../model/produtos');

//Listar

exports.ListarProdutos = async (req, res) => {
    try {
        const produtos = await Produtos.find({})
        res.send(produtos)
    }catch(erro) {
        console.log(erro);
        res.send({mensagem: '[ERRO]: Listagem' });
    }
}

//Adicionar 
exports.adicionarProduto = async (req, res) => {
    const novoProduto = req.query;
    if(!novoProduto.nome || !novoProduto.preco) {
        res.send({mensagem: '[ERRO]: informar nome e preco!'})
    } else {
        try {
            await Produtos.create(novoProduto);
            res.send({mensagem: '[SUCESSO]: Produto salvo!'});
        } catch(erro) {
            console.log(erro);
            res.send({ mensagem: '[ERRO]: adiconar produto', detalhes: erro });
        }
    }
}

//Remover
exports.removerProduto = async (req, res) => {
    const produto = req.query;
    if(!produto.nome) {
        res.send({ mensagem: '[ERRO]: Informar nome!' });
    } else {
        try {
          const produtoRemovido = await Produtos.findByIdAndDelete({nome: 
          produto.nome})

          if(produtoRemovido == null)
           res.send({mensagem: '[AVISO]: produto não existe no banco'});
          else
            res.send({mensagem: '[SUCESSO]: produto removido'})

        } catch(erro) {
            console.log(erro);
            res.send({mensagem: '[ERRO]: na remoção'})
        }
    }
}