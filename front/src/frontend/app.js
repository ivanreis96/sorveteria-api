
let produtos = []

let endpoint = 'https://raw.githubusercontent.com/ivanreis96/sorveteria-api/main/src/api-sorvetes/api-sorvete.json'

let listagemProdutos = document.getElementById('listagem_produtos');

async function buscarProdutosAPI(){
    let rs = await fetch(endpoint)
    produtos = await rs.json()
    exibirProdutos(produtos)
}

buscarProdutosAPI();

function exibirProdutos(produtos){
    produtos.forEach(produto => {
        console.log(produto)

        listagemProdutos.innerHTML += `
        
        <div class="listagem_produtos__item">
            <div class="produto_img_container">
                <img class="produto__img" src="${produto.img}" >
            </div>

            <div class="produto__nome">${produto.nome}</div>

            <div class="produto__descricao">
                ${produto.descricao}
            </div>

            <div class="produto__precos">
                <span class="preco_atual">R$ ${produto.precoAtual}</span>
                <s class="preco_antigo">R$ ${produto.precoAntigo}</s>
            </div>

            <button class="botao_carrinho">
                <svg clip-rule="evenodd" fill-rule="evenodd" height="512" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Icon"><path d="m18.643 8.614-3-5c-.213-.355-.674-.47-1.029-.257s-.47.674-.257 1.029l3 5c.213.355.674.47 1.029.257s.47-.674.257-1.029z"/><path d="m6.643 9.386 3-5c.213-.355.098-.816-.257-1.029s-.816-.098-1.029.257l-3 5c-.213.355-.098.816.257 1.029s.816.098 1.029-.257z"/><path d="m21.74 9.121c.036-.217-.026-.439-.168-.607-.143-.167-.352-.264-.572-.264h-18c-.22 0-.429.097-.572.264-.142.168-.204.39-.168.607 0 0 1.022 6.244 1.525 9.323.218 1.33 1.367 2.306 2.714 2.306h11.002c1.347 0 2.496-.976 2.714-2.306zm-10.49 3.379v4c0 .414.336.75.75.75s.75-.336.75-.75v-4c0-.414-.336-.75-.75-.75s-.75.336-.75.75zm4 0v4c0 .414.336.75.75.75s.75-.336.75-.75v-4c0-.414-.336-.75-.75-.75s-.75.336-.75.75zm-8 0v4c0 .414.336.75.75.75s.75-.336.75-.75v-4c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"/><path d="m22 8.25h-20c-.414 0-.75.336-.75.75s.336.75.75.75h20c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"/></g></svg>
                <span>Comprar</span>
            </button>
        </div>
        
        `
        
    })
}