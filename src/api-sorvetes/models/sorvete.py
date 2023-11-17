from pydantic import BaseModel

class Sorvete(BaseModel):
    """

    id, img, nome, descricao, precoAtual, precoAntigo

    """

    id:int
    img:str
    nome:str
    descricao:str
    precoAtual:float
    precoAntigo:float