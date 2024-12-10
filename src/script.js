let selectImgCriarCtt = document.querySelector(".selectImgCriarCtt");
let previewImgCtt = document.querySelector(".previewImgCtt");
let salvarCttCriado = document.querySelector('.salvarCttCriado');

// Seleciona todos os itens da lista
const themeOptions = document.querySelectorAll('.menu li');

// Adiciona um evento de clique em cada item
themeOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Obtém o ID do item clicado, que corresponde ao tema
        const selectedTheme = option.id;
        
        // Define o tema no atributo `data-theme` do elemento `<html>`
        document.documentElement.setAttribute('data-theme', selectedTheme);
        
        // Opcional: Exibe uma mensagem no console para depuração
        console.log(`Tema alterado para: ${selectedTheme}`);
    });
});

let btnTelaAddCtt = document.querySelector('.btnTelaAddCtt');

btnTelaAddCtt.addEventListener('click', function(){
let telaAddCtt = document.querySelector('.telaAddCtt');
telaAddCtt.classList.remove('hidden')
telaAddCtt.classList.add('flex')
});

let sairTelaCriar = document.querySelector('.sairTelaCriar');
sairTelaCriar.addEventListener('click', function(){
    let telaAddCtt = document.querySelector('.telaAddCtt');
    telaAddCtt.classList.remove('flex')
    telaAddCtt.classList.add('hidden')   
})


selectImgCriarCtt.addEventListener("change", (event) => {
    // Verifica se algum arquivo foi selecionado
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        // Quando o arquivo for carregado, atribui o conteúdo ao src da imagem
        reader.onload = (e) => {
            previewImgCtt.src = e.target.result;
        };
        reader.readAsDataURL(file); // Lê o conteúdo do arquivo como URL de dados
    }
});

function criarCtt() {
    // Obtendo os valores dos inputs
    let nomeValue = document.querySelector('.nomeValue').value.trim();
    let numValue = document.querySelector('.numValue').value.trim();
    let emailValue = document.querySelector('.emailValue').value.trim();
    let descValue = document.querySelector('.descValue').value.trim();
    let allCtt = document.querySelector('.allCtt');
    // Cria o container do contato
    let ctt = document.createElement('div');
    ctt.classList.add('cttMin');

    let selectImg = document.createElement('div');
    selectImg.classList.add('selectImg')
    ctt.appendChild(selectImg);

    // Adiciona a imagem
    let imgAdd = document.createElement('img');
    imgAdd.classList.add('imgAdd');
    imgAdd.src = previewImgCtt.src || 'default.jpg'; // Adiciona uma imagem padrão se nenhuma for selecionada
    selectImg.appendChild(imgAdd);

    let inputFile = document.createElement('input');
    inputFile.setAttribute('type', 'file');
    inputFile.classList.add('hidden');
    selectImg.appendChild(inputFile);
    ctt.appendChild(selectImg);


    // Adiciona as informações do contato
    let infosCtt = document.createElement('div');
    infosCtt.classList.add('infosCtt');

    let nomeAdd = document.createElement('h2');
    nomeAdd.classList.add('infoAdd', 'nomeAdd');
    nomeAdd.innerHTML = nomeValue;
    infosCtt.appendChild(nomeAdd);

    let numAdd = document.createElement('h2');
    numAdd.classList.add('infoAdd', 'hidden', 'numAdd');
    numAdd.innerHTML = numValue;
    infosCtt.appendChild(numAdd);

    let emailAdd = document.createElement('h2');
    emailAdd.classList.add('infoAdd', 'hidden', 'emailAdd');
    emailAdd.innerHTML = emailValue;
    infosCtt.appendChild(emailAdd);

    let descAdd = document.createElement('h2');
    descAdd.classList.add('infoAdd', 'hidden', 'descAdd');
    descAdd.innerHTML = descValue;
    infosCtt.appendChild(descAdd);

    ctt.appendChild(infosCtt);

    // Adiciona os botões
    let btnsCtt = document.createElement('div');
    btnsCtt.classList.add('btnsCtt','hidden');

    let btnSairCtt = document.createElement('button');
    btnSairCtt.classList.add('btnSairCtt','hidden');
    btnSairCtt.innerHTML = 'Sair';
    btnsCtt.appendChild(btnSairCtt);

    let btnEditCtt = document.createElement('button');
    btnEditCtt.classList.add('btnEditCtt','hidden');
    btnEditCtt.innerHTML = 'Editar';
    btnsCtt.appendChild(btnEditCtt);

    let btnExcCtt = document.createElement('button');
    btnExcCtt.classList.add('btnExcCtt','hidden');
    btnExcCtt.innerHTML = 'Excluir';
    btnsCtt.appendChild(btnExcCtt);

    ctt.appendChild(btnsCtt);

    let btnVerMaisCtt = document.createElement('button');
    btnVerMaisCtt.classList.add('btnVerMaisCtt','flex');
    btnVerMaisCtt.innerHTML = 'Ver mais';
    ctt.appendChild(btnVerMaisCtt);

    // Adiciona o contato à lista
    allCtt.appendChild(ctt);

    btnVerMaisCtt.addEventListener('click', function () {
        // Alterar classes do container principal
        ctt.classList.remove('cttMin');
        ctt.classList.add('cttMax');

        numAdd.classList.remove('hidden')
        numAdd.classList.add('flex')

        emailAdd.classList.remove('hidden')
        emailAdd.classList.add('flex')

        descAdd.classList.remove('hidden')
        descAdd.classList.add('flex')

        btnsCtt.classList.remove('hidden');
        btnsCtt.classList.add('flex')

        btnVerMaisCtt.classList.remove('btnVerMaisCtt');
        btnVerMaisCtt.classList.add('hidden')

    });  

    btnSairCtt.addEventListener('click', function () {
        // Alterar classes do container principal
        ctt.classList.remove('cttMax');
        ctt.classList.add('cttMin');

        numAdd.classList.remove('flex')
        numAdd.classList.add('hidden')

        emailAdd.classList.remove('flex')
        emailAdd.classList.add('hidden')

        descAdd.classList.remove('flex')
        descAdd.classList.add('hidden')

        btnsCtt.classList.remove('flex');
        btnsCtt.classList.add('hidden')

        btnVerMaisCtt.classList.add('btnVerMaisCtt');
        btnVerMaisCtt.classList.remove('hidden')

    }); 

    btnExcCtt.addEventListener('click', function () {
        ctt.remove();
    });

    btnEditCtt.addEventListener('click', function () {
        // Alterar o texto e estilo do botão
        btnEditCtt.innerHTML = 'Salvar';
        btnEditCtt.classList.remove('btnEditCtt', 'hidden');
        btnEditCtt.classList.add('btn', 'btn-success');
        imgAdd.classList.remove('imgAdd');
        imgAdd.classList.add('previewImgCtt')
        inputFile.classList.add('selectImgCriarCtt');
        inputFile.classList.remove('hidden');

        selectImgCriarCtt.addEventListener("change", (event) => {
            // Verifica se algum arquivo foi selecionado
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                // Quando o arquivo for carregado, atribui o conteúdo ao src da imagem
                reader.onload = (e) => {
                    imgAdd.src = e.target.result;
                };
                reader.readAsDataURL(file); // Lê o conteúdo do arquivo como URL de dados
            }
        });

    
        // Selecionar todos os <h2> dentro de infosCtt
        const h2Elements = infosCtt.querySelectorAll('h2');
    
        // Tornar cada <h2> editável e aplicar classes
        h2Elements.forEach((h2) => {
            h2.setAttribute('contenteditable', 'true');
            h2.classList.remove('infoAdd');
            h2.classList.add('infoEdit');
        });
    });
    
    

    let telaAddCtt = document.querySelector('.telaAddCtt');
    telaAddCtt.classList.remove('flex')
    telaAddCtt.classList.add('hidden') 
    
    // Limpar os campos após salvar o contato
document.querySelector('.nomeValue').value = '';
document.querySelector('.numValue').value = '';
document.querySelector('.emailValue').value = '';
document.querySelector('.descValue').value = '';

// Se tiver uma imagem carregada, pode definir para a imagem padrão
previewImgCtt.src = 'default.jpg';

}

// Evento para salvar o contato
salvarCttCriado.addEventListener('click', criarCtt);

