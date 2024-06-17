let subTotal = 0;

function adicionar(){
    let produto = document.getElementById(`produto`).value;
    let nomeProduto = produto.split(`-`)[0];
    let valorUnitario = produto.split(`R$`)[1];
    let quantidade = document.getElementById(`quantidade`).value;
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById(`lista-produtos`);

    if(quantidade < 1){
        alert(`Escolha uma quantidade.`)
    }else{
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`

    }
    subTotal = subTotal + preco;
    document.getElementById(`valor-total`).innerHTML = `<span class="texto-azul" id="valor-total">R$${subTotal}</span>`
    document.getElementById(`quantidade`).value = ``;

}

function limpar() {
    subTotal = 0;
    carrinho = document.getElementById(`lista-produtos`);
    carrinho.innerHTML = `<section class="carrinho__produtos__produto">
      <span class="texto-azul"></span><span class="texto-azul"></span>
        </section>`;
    document.getElementById(`valor-total`).innerHTML = `<span class="texto-azul" id="valor-total"></span>`;
}