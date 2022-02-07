'use strict'

const switcher = document.querySelector('.btn'); //obter referência do botão

switcher.addEventListener('click',function(){ //adicionando um ouvinte e manipulador de eventos
    document.body.classList.toggle('dark-theme')

    var className = document.body.className; //verificar tema atual e atualizar o rótul do botão
    if (className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className); //mesagem do console para verificar resultado do código
});