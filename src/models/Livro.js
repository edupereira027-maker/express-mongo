import mongoose from "mongoose";
//import version from "nodemon/lib/version";

const LivroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    titulo: { type: String, required: true },
    editora: { type: String, required: true },
    preco: { type: Number, required: true },
    paginas: { type: Number, required: false }
}, { versionKey: false });

const livro = mongoose.model('livros', LivroSchema);

export default livro;