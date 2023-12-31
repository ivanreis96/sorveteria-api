from fastapi import FastAPI
from models.sorvete import Sorvete

app = FastAPI()

@app.get('/')

def say_hello():
    return {'Fast':'API'}


sorvetes = [
    Sorvete(id=1,img='caminho_imagem', nome='Flocos cremoso', descricao='Sorvete de flocos da linha Kilambi, o mais cremoso do mercado', precoAtual=17.50, precoAntigo=25.00),
    Sorvete(id=2,img='caminho_imagem', nome='Napolitano tradicional', descricao='Sorvete Napolitano com sabores originais de Napoli, mais gostoso', precoAtual=12.50, precoAntigo=26.00),
    Sorvete(id=3,img='caminho_imagem', nome='Romeu e Julieta', descricao='Famosa mistura mineira de Romeu e Julieta agora em seu sorvete', precoAtual=8.00, precoAntigo=16.00),
    Sorvete(id=4,img='caminho_imagem', nome='Limão', descricao='Sorvete de limão muito bom mesmo', precoAtual=17.50, precoAntigo=25.00),
    Sorvete(id=5,img='caminho_imagem', nome='Mamão papaya', descricao='Sorvete de Papaya mais refrescante e tropical', precoAtual=12.50, precoAntigo=26.00),
    Sorvete(id=6,img='caminho_imagem', nome='Magno da Kilambi', descricao='Versão semelhante ao magno só que da kilambi', precoAtual=8.00, precoAntigo=16.00),

]

@app.get('/api/sorvetes')
def get__sorvetes():
    return sorvetes
