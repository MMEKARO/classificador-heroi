// Função para classificar o nível do herói
function classificarHeroi(nome, xp) {
    if (xp < 1000) return "Ferro";
    else if (xp <= 2000) return "Bronze";
    else if (xp <= 5000) return "Prata";
    else if (xp <= 7000) return "Ouro";
    else if (xp <= 8000) return "Platina";
    else if (xp <= 9000) return "Ascendente";
    else if (xp <= 10000) return "Imortal";
    else return "Radiante";
}

// Função para exibir a tabela de níveis
function exibirTabelaNiveis() {
    const tabela = `
        <h2>Tabela de Níveis</h2>
        <table>
            <tr>
                <th>XP Mínimo</th>
                <th>XP Máximo</th>
                <th>Nível</th>
            </tr>
            <tr><td>0</td><td>1000</td><td>Ferro</td></tr>
            <tr><td>1001</td><td>2000</td><td>Bronze</td></tr>
            <tr><td>2001</td><td>5000</td><td>Prata</td></tr>
            <tr><td>5001</td><td>7000</td><td>Ouro</td></tr>
            <tr><td>7001</td><td>8000</td><td>Platina</td></tr>
            <tr><td>8001</td><td>9000</td><td>Ascendente</td></tr>
            <tr><td>9001</td><td>10000</td><td>Imortal</td></tr>
            <tr><td>10001</td><td>∞</td><td>Radiante</td></tr>
        </table>
    `;
    document.getElementById('tabela').innerHTML = tabela;
}

// Evento de submit do formulário
document.getElementById('heroForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const xp = parseInt(document.getElementById('xp').value);
    const nivel = classificarHeroi(nome, xp);
    document.getElementById('resultado').innerHTML = `<strong>O Herói de nome ${nome} está no nível de ${nivel}</strong>`;
    exibirTabelaNiveis();
});

// Função para abrir o código Java no JDoodle
function abrirJava() {
    const codigoJava = document.getElementById('codigoJava').value;
    const url = `https://www.jdoodle.com/online-java-compiler/?code=${encodeURIComponent(codigoJava)}`;
    window.open(url, '_blank');
}

// Função para abrir o código Python no OnlineGDB
function abrirPython() {
    const codigoPython = document.getElementById('codigoPython').value;
    const url = `https://www.onlinegdb.com/online_python_compiler?code=${encodeURIComponent(codigoPython)}`;
    window.open(url, '_blank');
}

// Função para abrir o código .NET no .NET Fiddle
function abrirDotNet() {
    const codigoDotNet = document.getElementById('codigoDotNet').value;
    const url = `https://dotnetfiddle.net/?code=${encodeURIComponent(codigoDotNet)}`;
    window.open(url, '_blank');
}

// Função para alternar a visibilidade do código
function toggleCodigo(id) {
    const codigo = document.getElementById(id);
    codigo.classList.toggle('visible');
}

// Função de nova consulta
function novaConsulta() {
    document.getElementById('heroForm').reset();  // Limpa o formulário
    document.getElementById('resultado').innerHTML = "";  // Limpa o resultado
    document.getElementById('tabela').innerHTML = "";  // Limpa a tabela
}

// Função para mostrar/ocultar o botão de voltar ao topo
window.onscroll = function() {
    const btnTopo = document.getElementById('btnTopo');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
};

// Função para voltar ao topo da página
document.getElementById('btnTopo').addEventListener('click', function() {
    document.body.scrollTop = 0;  // Para Safari
    document.documentElement.scrollTop = 0;  // Para Chrome, Firefox, IE e Opera
});