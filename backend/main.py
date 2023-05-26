from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
from sqlalchemy import create_engine
from json import dumps


#Precisa instalar os 4 pacotes: clica em packages e digita o nome do pacote
#Flask
#Flask-SQLAlchemy
#Flask-Restful
#Jsonify

# Conectando ao BD exemplo feito em SQLLITE
db_connect = create_engine('sqlite:///PequenoClube.db')

##Coloca o servidor Web no ar
app = Flask(__name__)
cors = CORS(app)
api = Api(app)


#COMEÇO
class usuario(Resource):

  def get(self):  # Mostra todos os usuários cadastrados no BD
    conn = db_connect.connect()
    query = conn.execute("select * from usuario")
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)

  def post(self):  # Inclui no BD um usuário passado como parâmetro
    conn = db_connect.connect()
    nomUsuario = request.json['nomUsuario']
    codSenha = request.json['codSenha']
    dscEmail = request.json['dscEmail']

    conn.execute("insert into usuario values(null, '{0}','{1}','{2}')".format(
      nomUsuario, codSenha, dscEmail))

    query = conn.execute(
      'select * from usuario order by codUsuario desc limit 1')
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)

  def put(
      self):  # Update*(atualizar) no BD de um usuário passado como parâmetro
    conn = db_connect.connect()
    codUsuario = request.json['codUsuario']
    nomUsuario = request.json['nomUsuario']
    codSenha = request.json['codSenha']
    dscEmail = request.json['dscEmail']

    conn.execute("update usuario set nomUsuario ='" + str(nomUsuario) +
                 "', codSenha ='" + str(codSenha) + "', dscEmail ='" +
                 str(dscEmail) + "'  where codUsuario =%d " % int(codUsuario))

    query = conn.execute("select * from usuario where codUsuario=%d " %
                         int(codUsuario))
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)


class usuarioPorID(Resource
                   ):  # Deleta no BD de um usuário passado como parâmetro

  def delete(self, id):
    conn = db_connect.connect()
    conn.execute("delete from usuario where codUsuario=%d " % int(id))
    return {"status": "success"}

  def get(self, id):
    conn = db_connect.connect()
    query = conn.execute("select * from usuario where codUsuario =%d " %
                         int(id))
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)


api.add_resource(usuario, '/usuario')
api.add_resource(usuarioPorID, '/usuario/<id>')


class pontuacao(Resource):

  def get(self):  # Mostra todos os usuários cadastrados no BD
    conn = db_connect.connect()
    query = conn.execute("select * from pontuacao")
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)

  def post(self):  # Inclui no BD um usuário passado como parâmetro
    conn = db_connect.connect()
    codJogo = request.json['codJogo']
    codUsuario = request.json['codUsuario']
    qtdPontuacao = request.json['qtdPontuacao']

    conn.execute("insert into pontuacao values('{0}','{1}','{2}')".format(
      codJogo, codUsuario, qtdPontuacao))

    query = conn.execute(
      'select * from pontuacao order by codUsuario desc limit 1')
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)

  def put(
      self):  # Update*(atualizar) no BD de um usuário passado como parâmetro
    conn = db_connect.connect()
    codJogo = request.json['codJogo']
    codUsuario = request.json['codUsuario']
    qtdPontuacao = request.json['qtdPontuacao']

    conn.execute(
      "update pontuacao set qtdPontuacao ={0}, codJogo ={1}  where codUsuario ={2}"
      .format(int(qtdPontuacao), int(codJogo), int(codUsuario)))

    query = conn.execute("select * from pontuacao where codUsuario=%d " %
                         int(codUsuario))
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)


class pontuacaoPorID(Resource
                     ):  # Deleta no BD de um usuário passado como parâmetro

  def delete(self, id):
    conn = db_connect.connect()
    conn.execute("delete from pontuacao where codUsuario=%d " % int(id))
    return {"status": "success"}

  def get(self, id):
    conn = db_connect.connect()
    query = conn.execute("select * from pontuacao where codUsuario=%d " %
                         int(id))
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)


api.add_resource(pontuacao, '/pontuacao')
api.add_resource(pontuacaoPorID, '/pontuacao/<id>')


class mensagem(Resource):

  def get(self):  # Mostra todos os usuários cadastrados no BD
    conn = db_connect.connect()
    query = conn.execute("select * from mensagem")
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)

  def post(self):  # Inclui no BD um usuário passado como parâmetro
    conn = db_connect.connect()
    codMensagem = request.json['codMensagem']
    dscMensagem = request.json['dscMensagem']
    codUsuario = request.json['codUsuario']

    conn.execute("insert into mensagem values('{0}','{1}',{2})".format(codMensagem,dscMensagem, codUsuario))

    query = conn.execute(
      'select * from mensagem order by codMensagem desc limit 1')
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)

  def put(
      self):  # Update*(atualizar) no BD de um usuário passado como parâmetro
    conn = db_connect.connect()
    codMensagem = request.json['codMensagem']
    dscMensagem = request.json['dscMensagem']
    codUsuario = request.json['codUsuario']

    conn.execute("update mensagem set dscMensagem ='" + str(dscMensagem) +
                 "', codUsuario ='" + str(codUsuario) + "'  where codMensagem =%d " % int(codMensagem))

    query = conn.execute("select * from mensagem where codMensagem=%d " % int(codMensagem))
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)


class mensagemPorID(Resource
                    ):  # Deleta no BD de um usuário passado como parâmetro

  def delete(self, id):
    conn = db_connect.connect()
    conn.execute("delete from mensagem where codMensagem=%d " % int(id))
    return {"status": "success"}

  def get(self, id):
    conn = db_connect.connect()
    query = conn.execute("select * from mensagem where codMensagem =%d " %int(id))
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)


api.add_resource(mensagem, '/mensagem')
api.add_resource(mensagemPorID, '/mensagem/<id>')
#FIM


class jogo(Resource):

  def get(self):  # Mostra todos os usuários cadastrados no BD
    conn = db_connect.connect()
    query = conn.execute("select * from jogo")
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)

  def post(self):  # Inclui no BD um usuário passado como parâmetro
    conn = db_connect.connect()
    
    nmJogo = request.json['nmJogo']

    conn.execute("insert into jogo values(null, '{0}')".format(nmJogo))

    query = conn.execute('select * from jogo order by codJogo desc limit 1')
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)

  def put(
      self):  # Update*(atualizar) no BD de um usuário passado como parâmetro
    conn = db_connect.connect()
    codJogo = request.json['codJogo']
    nmJogo = request.json['nmJogo']

    conn.execute("update jogo set nmJogo ='" + str(nmJogo) +
                 "'  where codjogo =%d " % int(codJogo))

    query = conn.execute("select * from jogo where codJogo=%d " % int(codJogo))
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)


class jogoPorID(Resource):  # Deleta no BD de um usuário passado como parâmetro

  def delete(self, id):
    conn = db_connect.connect()
    conn.execute("delete from jogo where codJogo=%d " % int(id))
    return {"status": "success"}

  def get(self, id):
    conn = db_connect.connect()
    query = conn.execute("select * from jogo where codJogo =%d " % int(id))
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)


api.add_resource(jogo, '/jogo')
api.add_resource(jogoPorID, '/jogo/<id>')

if __name__ == '__main__':
  app.run(host='0.0.0.0')
