// buscar os itens da tela
const itensPerguntasERespostas = document.querySelectorAll('.item-do-quadro');

// console.log(itensPerguntasERespostas);

// entender que o item foi clicado
itensPerguntasERespostas.forEach(function(item){
    // console.log(item)
    item.addEventListener('click', function(){
        // console.log('clicou!');
        // verificar se a pergunta clicada está ativa
        const estaAtiva = item.classList.contains('ativo')
        // se a pergunta não estiver ativa
        if(!estaAtiva){
            // fechar todas as outras
            itensPerguntasERespostas.forEach(function(item){
                item.classList.remove('ativo')
                item.classList.add('escondido')
            })
            // abrir a resposta atual
            item.classList.add('ativo')
            item.classList.remove('escondido')
        }
            
    
        // se a pergunta estiver ativa
        if(estaAtiva){
            itensPerguntasERespostas.forEach(function(item){
                item.classList.remove('ativo')
                item.classList.remove('escondido')
            })
            // fechar a resposta atual(remover a classe ativo)
            item.classList.remove('ativo')
        }
            
    })
})


    
