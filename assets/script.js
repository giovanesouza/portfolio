// EVENTOS

// SELEÇÃO DE LINK (MENU)
document.querySelectorAll('li a').forEach((item) => {

    // Seleciona um tamnho e desmarca as demais
    item.addEventListener('click', () => {

        document.querySelector('li a.active').classList.remove('active'); // Remove a seleção do link anterior
        item.classList.add('active'); // Add class no novo link

        // AO CLICAR NO LINK FECHA O MENU (window.innerWidth - Verifica a largura atual da tela)
        if (window.innerWidth < 769) {

            document.querySelector('li a.active').classList.remove('active');
            item.classList.add('active');

            showMenu();

        }

    });


});




// Seleciona a DIV que vai conter TODAS as linguagens
let listTecnologies = document.querySelector('.listTecnologies');


// Faz mapeamento de todos os itens e permite acessar os valores de todos os atributos
stacks.map((item, index) => {

    listTecnologies.innerHTML += `
    <div class="language" data-key="${index}">
        <div class="material-symbols-outlined">${item.icon}</div>
        <div class="name">${item.name}</div>
    </div>
    `;

});


// Seleciona TODAS as divs com class Language
document.querySelectorAll('.language').forEach(item => {

    // Adiciona EVENTO em cada language
    item.addEventListener('click', (e) => {

        let key = parseInt(e.currentTarget.getAttribute('data-key')); // Pega o valor do atributo



        let languages = stacks[key].languages;

        languagesHtml = '';

        // PEGA TODAS AS TECHS E FAZ UM LOOP
        for (let i = 0; i < languages.length; i++) {

            languagesHtml += `<div class="${languages[i]} icon"></div>`;
        }


        document.querySelector('.modalTitle h5').innerHTML = `${stacks[key].name}`; // Exibe o Nome da Linguagem
        document.querySelector('.modalBody').innerHTML = `
        
        <div class="description"><strong>Habilidades:</strong> ${stacks[key].skills}</div>
        <div class="techs">${languagesHtml}</div>

        <div></div>
        
        `;


        document.querySelector('.modal').style.display = 'block'; // Seleciona o MODAL e DEIXA-O VISÍVEL

        setTimeout(() => {
            document.querySelector('.modal').style.opacity = '1';
        }, 100);


        // REMOVE BARRA DE ROLAGEM ENQUANTO MODAL ESTIVER ATIVO
        document.querySelector('body').style.overflow = 'hidden';

    })

});



// Seleciona a DIV que vai conter TODAS as linguagens
let listProjects = document.querySelector('.listProjects');

// Faz mapeamento de todos os itens e permite acessar os valores de todos os atributos
projects.map((item, index) => {

    listProjects.innerHTML += `
        <figure data-key="${index}">

        <div class="stack ${item.stack}" >${item.stack}</div>
            <img src="${item.img}" alt="${item.name}" />

            <figcaption data-key="${index}">${item.name}</figcaption>
        </figure>
    `;


});



let allFigures = document.querySelectorAll('figure');
let n = allFigures.length;


let seeMore = document.querySelector('.seeMore');
seeMore.addEventListener('click', showAllProjects);


// FUNÇÃO PARA MOSTRAR TODOS OS PROJETOS
function showAllProjects() {

    if (n > 5) {

        // Lista apenas os 6 primeiros projetos
        for (let i = 0; i < allFigures.length; i++) {

            if (i > 5) {
                allFigures[i].style.display = 'none';
            }

        }

        n = 5;
        seeMore.innerHTML = 'Visualizar todos';

    } else if (n == 5) {
        // Lista todos os projetos
        for (let i = 0; i < allFigures.length; i++) {

            allFigures[i].style.display = 'block';

        }

        n = allFigures.length;
        seeMore.innerHTML = 'Visualizar menos';

    }

}

showAllProjects();




// Seleciona TODAS as figures
document.querySelectorAll('figure').forEach(item => {

    // Adiciona EVENTO em cada language
    item.addEventListener('click', e => {

        let key = parseInt(e.currentTarget.getAttribute('data-key')); // Pega o valor do atributo

        document.querySelector('.modalTitle h5').innerHTML = `${projects[key].name}`; // Exibe o Nome da Linguagem
        document.querySelector('.modalBody').innerHTML = `
      
      <div class="description"> 

      <div class='modal-img'> <img src="${projects[key].img}" title="${projects[key].name}" /> </div>
      
      <strong>Descrição:</strong> ${projects[key].description}
      
      </div>


      <p>
        <strong>Link aplicação:</strong><br/> 
        <a href="${projects[key].urlApp}" target="_blank">Clique aqui para acessar o App.</a>
      </p>

      <p>
        <strong>Link repositório:</strong><br/>
        <a href="${projects[key].urlRepository}" target="_blank">Clique aqui para acessar o repositório.</a>
      </p>

        
        `;



        document.querySelector('.modal').style.display = 'block'; // Seleciona o MODAL e DEIXA-O VISÍVEL

        setTimeout(() => {
            document.querySelector('.modal').style.opacity = '1';
        }, 100);


        // REMOVE BARRA DE ROLAGEM ENQUANTO MODAL ESTIVER ATIVO
        document.querySelector('body').style.overflow = 'hidden';

    })

});



// FECHA O MODAL
document.querySelector('.modalTitle button').addEventListener('click', () => {

    document.querySelector('.modal').style.opacity = '0';

    setTimeout(() => {
        document.querySelector('.modal').style.display = 'none';
    }, 100);


    // EXIBE A BARRA DE ROLAGEM AO FECHAR O MODAL
    document.querySelector('body').style.overflow = 'scroll';

});






// SOLICITAÇÃO DE CONTATO - FORM
// document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault();

//     let nome = document.querySelector('[name=nome]');
//     let email = document.querySelector('[name=email]');
//     let assunto = document.querySelector('[name=assunto]');

//     alert(`Olá, ${nome.value}! Sua solicitação de contato foi enviada com sucesso! \nEm breve entrarei em contato pelo e-mail: ${email.value}. \n\nAtt, Dev Giovane Souza.`)

//     nome.value = "";
//     email.value = "";
//     assunto.value = "";

// });



// FUNÇÕES

// Função para mostrar o Menu em dispositivos móveis
const showMenu = () => {
    let header = document.querySelector('header');
    let menu = document.querySelector('nav ul.menu-mobile-links');

    let line1 = document.querySelector('.menuLine.first');
    let line2 = document.querySelector('.menuLine.second');
    let line3 = document.querySelector('.menuLine.third');


    if (menu.style.display == 'none') {

        header.style.backgroundColor = '#212529';

        menu.style.display = 'flex';

        line1.classList.add('firstLine');
        line2.classList.add('secondLine');

        line3.style.display = 'none';



    } else {

        header.style.backgroundColor = '#212529d7';

        menu.style.display = 'none';

        line1.classList.remove('firstLine');
        line2.classList.remove('secondLine');
        line3.style.display = 'block';
    }


}