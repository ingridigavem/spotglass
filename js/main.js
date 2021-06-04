const inputCheckbox = document.querySelector('#check');
const divMain = document.querySelector('.main');
const searchIcon = document.querySelector('.search-icon');


searchIcon.classList.add('esconde-lupa');

inputCheckbox.addEventListener('click', () => {
    divMain.classList.toggle('moveMain');
    searchIcon.classList.toggle('esconde-lupa');
});

function carregar() {
    const elem_msg = document.getElementById("div_msg");

    const data = new Date();
    const hora = data.getHours();

    if (hora >= 0 && hora < 12) {
        elem_msg.innerHTML = "<b>Bom dia, Bem vindo ao Spotglass =D</b>";
    } else if (hora >= 12 && hora < 18) {
        elem_msg.innerHTML = "<b>Boa tarde, Bem vindo ao Spotglass =D</b>";
    } else {
        elem_msg.innerHTML = "<b>Boa noite, Bem vindo ao Spotglass =D</b>";
    }
}

