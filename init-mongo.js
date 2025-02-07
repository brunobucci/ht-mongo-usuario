db = db.getSiblingDB('Hackathon'); // Cria ou acessa o banco 

// Criação da coleção "usuario" sem inserir documentos
db.createCollection("usuario");

print("Banco de dados e coleções configurados com sucesso!");