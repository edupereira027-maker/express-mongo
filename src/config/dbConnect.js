import mongoose from "mongoose";

function conectaMongoDB() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    const conexao = mongoose.connection;
    conexao.on("error", console.error.bind(console, "Erro de conexão:"));
    conexao.once("open", () => {
        console.log("Conexão com o MongoDB estabelecida com sucesso!");
});

    return mongoose.connection;
}
export default conectaMongoDB;