const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ProdutoSchema = new Schema({
    nome: {type: String, require: true, unique: true},
    preco:{type: Number, require: true},
    create: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Produtos', ProdutoSchema);

