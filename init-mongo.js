db = db.getSiblingDB('usuario'); // Cria ou acessa o banco 

// Criação de coleções e inserção de dados
db.usuarios.insertMany([
    { nome: "Bruno", email: "bruno@email.com" },
    { nome: "Marcelo", email: "marcelo@email.com" },
    { nome: "Pedro", email: "pedro@email.com" }
]);

print("Banco de dados e coleções configurados com sucesso!");