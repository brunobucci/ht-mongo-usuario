# Use a imagem oficial do MongoDB
FROM mongo:latest

# Exponha a porta padrão do MongoDB
EXPOSE 27017

# Comando padrão para rodar o MongoDB
CMD ["mongod"] 