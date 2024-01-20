let totalGeral = 0;
limpar();


function adicionar() {
    //recuperando valores
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    //calcular o preço
    let preco = quantidade * valorUnitario;

    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
    </section>`;

    //atualizar o valor total
    totalGeral = totalGeral + preco;
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 1;
}

function limpar() {
    document.getElementById('quantidade').value = 1;
    document.getElementById('valor-total').textContent = 'R$ 0';
    document.getElementById('lista-produtos').innerHTML = '';

}