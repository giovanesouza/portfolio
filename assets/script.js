// EVENTOS

// SELEÇÃO DE LINK (MENU)
document.querySelectorAll('li a').forEach((item) => {

    // Seleciona um tamnho e desmarca as demais
    item.addEventListener('click', (e) => {
        document.querySelector('li a.active').classList.remove('active'); // Remove a seleção do link anterior
        item.classList.add('active'); // Add class no novo link

    });

});



// Seleciona a DIV que vai conter TODAS as linguagens
let listTecnologies = document.querySelector('.listTecnologies');


// Faz mapeamento de todos os itens e permite acessar os valores de todos os atributos
languages.map((item, index) => {

    listTecnologies.innerHTML += `
    <div class="language" data-key="${index}">
        <i class="${item.icon}" data-key="${index}"></i>
    </div>
    `;

});



// Seleciona TODAS as divs com class Language
document.querySelectorAll('.language').forEach(item => {

    // Adiciona EVENTO em cada language
    item.addEventListener('click', e => {

        let key = parseInt(e.target.getAttribute('data-key')); // Pega o valor do atributo


        document.querySelector('.modalTitle h5').innerHTML = `${languages[key].name}`; // Exibe o Nome da Linguagem
        document.querySelector('.modalBody').innerHTML = `
        
        <div class="describe"><strong>Descrição:</strong> ${languages[key].skills[0]}</div>
        <div class="hability"><strong>Habilidades:</strong> ${languages[key].skills[1]}</div>
        
        `;

        document.querySelector('.modal').style.display = 'block'; // Seleciona o MODAL e DEIXA-O VISÍVEL

        setTimeout(() => {
            document.querySelector('.modal').style.opacity = '1';
        }, 100);



    })

});



// Seleciona a DIV que vai conter TODAS as linguagens
let listProjects = document.querySelector('.listProjects');

// Faz mapeamento de todos os itens e permite acessar os valores de todos os atributos
projects.map((item, index) => {

    listProjects.innerHTML += `
        <figure data-key="${index}">
            <img src="${item.img}" alt="${item.name}" data-key="${index}" />

            <figcaption data-key="${index}">${item.name}</figcaption>
        </figure>
    `;

});




// Seleciona TODAS as figures
document.querySelectorAll('figure').forEach(item => {

    // Adiciona EVENTO em cada language
    item.addEventListener('click', e => {

        let key = parseInt(e.target.getAttribute('data-key')); // Pega o valor do atributo

        document.querySelector('.modalTitle h5').innerHTML = `${projects[key].name}`; // Exibe o Nome da Linguagem
        document.querySelector('.modalBody').innerHTML = `
      
      <div class="description"> <strong>Descrição:</strong> ${projects[key].description}</div>


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


    })

});



// FECHA O MODAL
document.querySelector('.modalTitle button').addEventListener('click', () => {

    document.querySelector('.modal').style.opacity = '0';

    setTimeout(() => {
        document.querySelector('.modal').style.display = 'none';
    }, 100);


});





// SOLICITAÇÃO DE CONTATO - FORM

document.querySelector('form').addEventListener('submit', (e) => {

    e.preventDefault();

    let nome = document.querySelector('[name=nome]');
    let email = document.querySelector('[name=email]');
    let assunto = document.querySelector('[name=assunto]');

    alert(`Olá, ${nome.value}! Sua solicitação de contato foi enviada com sucesso! \nEm breve entrarei em contato pelo e-mail: ${email.value}. \n\nAtt, Dev Giovane Souza.`)

    nome.value = "";
    email.value = "";
    assunto.value = "";


});







// FUNÇÕES

// Função para mostrar o Menu em dispositivos móveis
const showMenu = () => {
    let menu = document.querySelector('nav ul');
    //    console.log(menu);

    if (menu.style.display == 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }

}

