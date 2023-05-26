import pytest
from sqlalchemy import create_engine
from sqlalchemy.exc import OperationalError

def test_database_connection():
    try:
        # Conecte-se ao banco de dados
        engine = create_engine('sqlite:///PequenoClube.db')
        connection = engine.connect()

        # Verifique se a conexão foi estabelecida com sucesso
        assert connection
      
      
        # Feche a conexão
        connection.close()
      

    except OperationalError as e:
        pytest.fail(f"A conexão com o banco de dados falhou: {e}")