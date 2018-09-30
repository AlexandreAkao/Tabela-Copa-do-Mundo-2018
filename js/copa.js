//TABELA COPA DO MUNDO 2018

const pontos = document.getElementsByClassName("pontosList");
const classif = document.getElementById("classif");
const visaoGeral = document.getElementById("visaoGeral");

//Todos os time com dados
var times = [
	{pais: "Arábia Saudita", img: "img/arabia_saudita.png", abr: "ARA"}, 
	{pais: "Egito", img: "img/egito.png", abr: "EGI"}, 
	{pais: "Rússia", img: "img/russia.png", abr: "RUS"}, 
	{pais: "Uruguai", img: "img/uruguai.png", abr: "URU"},
	{pais: "Espanha", img: "img/espanha.png", abr: "ESP"}, 
	{pais: "Irã", img: "img/ira.png", abr: "IRA"}, 
	{pais: "Marrocos", img: "img/marrocos.png", abr: "MAR"},
	{pais: "Portugal", img: "img/portugal.png", abr: "POR"},
	{pais: "Austrália", img: "img/australia.png", abr: "AUS"},
	{pais: "Dinamarca", img: "img/dinamarca.png", abr: "DIN"},
	{pais: "França", img: "img/franca.png", abr: "FRA"},
	{pais: "Peru", img: "img/peru.gif", abr: "PER"},
	{pais: "Argentina", img: "img/argentina.png", abr: "ARG"},
	{pais: "Croácia", img: "img/croacia.png", abr: "CRO"},
	{pais: "Islândia", img: "img/islandia.png", abr: "ISL"},
	{pais: "Nigéria", img: "img/nigeria.png", abr: "NIG"},
	{pais: "Brasil", img: "img/brasil.png", abr: "BRA"},
	{pais: "Costa Rica", img: "img/costa_rica.png", abr: "COS"},
	{pais: "Sérvia", img: "img/servia.png", abr:"SER"},
	{pais: "Suíça", img: "img/suica.png", abr: "SUI"},
	{pais: "Alemanha", img: "img/alemanha.png", abr: "ALE"},
	{pais: "Coreia do Sul", img: "img/coreia_do_sul.png", abr: "COR"},
	{pais: "México", img: "img/mexico.png", abr: "MEX"},
	{pais: "Suécia", img: "img/suecia.png", abr: "SUE"},
	{pais: "Bélgica", img: "img/belgica.png", abr: "BEL"},
	{pais: "Inglaterra", img: "img/inglaterra.png", abr: "ING"},
	{pais: "Panamá", img: "img/panama.png", abr: "PAN"},
	{pais: "Tunísia", img: "img/tunisia.png", abr: "TUN"},
	{pais: "Colômbia", img: "img/colombia.png", abr: "COL"},
	{pais: "Japão", img: "img/japao.png", abr: "JAN"},
	{pais: "Polônia", img: "img/polonia.png", abr: "POL"},
	{pais: "Senegal", img: "img/senegal.png", abr: "SEN"}
];

var aux = [];
var auxQualif = [];
var qualificados = [];

//Menu lateral
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//Criar objeto
function criarAux(ids1, ids2){
	
	this.id1 = ids1;
	this.id2 = ids2;
}

//Função para preencher a tabela
function tabela(time1, time2, pais1, pais2, json1, json2){

	pais1.children[2].textContent = eval("JSON.parse(localStorage.getItem('times'))[" + json1 + "]").pontos;
	pais1.children[3].textContent = eval("JSON.parse(localStorage.getItem('times'))[" + json1 + "]").jogos;
	pais1.children[4].textContent = eval("JSON.parse(localStorage.getItem('times'))[" + json1 + "]").vitoria;
	pais1.children[5].textContent = eval("JSON.parse(localStorage.getItem('times'))[" + json1 + "]").empate;
	pais1.children[6].textContent = eval("JSON.parse(localStorage.getItem('times'))[" + json1 + "]").derrota;
	pais1.children[7].textContent = eval("JSON.parse(localStorage.getItem('times'))[" + json1 + "]").golsPro;
	pais1.children[8].textContent = eval("JSON.parse(localStorage.getItem('times'))[" + json1 + "]").golsContra;
	pais1.children[9].textContent = eval("JSON.parse(localStorage.getItem('times'))[" + json1 + "]").saldoGols;
	pais1.children[10].textContent = (parseInt(eval("JSON.parse(localStorage.getItem('times'))[" + json1 + "]").pontos) / 9 * 100).toFixed(1);
	
	pais2.children[2].textContent = eval("JSON.parse(localStorage.getItem('times'))[" + json2 + "]").pontos;
	pais2.children[3].textContent = eval("JSON.parse(localStorage.getItem('times'))[" + json2 + "]").jogos;
	pais2.children[4].textContent = eval("JSON.parse(localStorage.getItem('times'))[" + json2 + "]").vitoria;
	pais2.children[5].textContent = eval("JSON.parse(localStorage.getItem('times'))[" + json2 + "]").empate;
	pais2.children[6].textContent = eval("JSON.parse(localStorage.getItem('times'))[" + json2 + "]").derrota;
	pais2.children[7].textContent = eval("JSON.parse(localStorage.getItem('times'))[" + json2 + "]").golsPro;
	pais2.children[8].textContent = eval("JSON.parse(localStorage.getItem('times'))[" + json2 + "]").golsContra;
	pais2.children[9].textContent = eval("JSON.parse(localStorage.getItem('times'))[" + json2 + "]").saldoGols;
	pais2.children[10].textContent = (parseInt(eval("JSON.parse(localStorage.getItem('times'))[" + json2 + "]").pontos) / 9 * 100).toFixed(1);
}

//Função para organizar as posições
function classificacao() {
	
	var guardaPlacar = [];
	var maior1;
	var maior2;
	var maior3;
	var posicao;
	var auxi;
	for(var i = 0; i < 4; i++){
		guardaPlacar[i] = {
			info: pontos[0].children[1],
			pontos: pontos[0].children[1].children[2].textContent,
			sg: pontos[0].children[1].children[9].textContent,
			gp: pontos[0].children[1].children[7].textContent,
			time: pontos[0].children[1].children[11].textContent
		};	
		pontos[0].children[1].remove();
	}

	//Organizar por ordem de pontos Selection Sort
	for(var i = 0; i < guardaPlacar.length - 1; i++){
		
		auxi = guardaPlacar[i];
		maior1 = guardaPlacar[i].pontos;
		maior2 = guardaPlacar[i].sg;
		maior3 = guardaPlacar[i].gp;
		posicao = i;		
		
		for(var j = i + 1; j < guardaPlacar.length; j++){
			
			if(parseInt(guardaPlacar[j].pontos) > parseInt(maior1)){
				
				auxi = guardaPlacar[j];
				maior1 = guardaPlacar[j].pontos;
				posicao = j; 
			}else if(parseInt(guardaPlacar[j].pontos) == parseInt(maior1)){
				
				if(parseInt(guardaPlacar[j].sg) > parseInt(maior2)){
				
					auxi = guardaPlacar[j];
					maior2 = guardaPlacar[j].sg;
					posicao = j;
				}else if(parseInt(guardaPlacar[j].sg) == parseInt(maior2)){
					
					if(parseInt(guardaPlacar[j].gp) > parseInt(maior3)){

						auxi = guardaPlacar[j];
						maior3 = guardaPlacar[j].gp;
						posicao = j;
					}
				}
			}
		}	
		guardaPlacar[posicao] = guardaPlacar[i];
		guardaPlacar[i] = auxi;
	}
	//Colocar de volta na tabela
	for(var i = 0; i < guardaPlacar.length; i++){

		if(i == 0 || i == 1){
			auxQualif[i] = eval(guardaPlacar[i].time); 
		}
		pontos[0].appendChild(guardaPlacar[i].info);
		pontos[0].children[i + 1].children[0].textContent = (i + 1);
	}
}

//Mostrar os classificados
function vGeral(grupo){
	visaoGeral.style.display = "";

	classif.children[0].children[0].children[1].children[0].src = JSON.parse(localStorage.getItem("qualificados"))[grupo].lugar1.img;
	classif.children[0].children[0].children[2].textContent = JSON.parse(localStorage.getItem("qualificados"))[grupo].lugar1.pais.toUpperCase();

	classif.children[0].children[1].children[1].children[0].src = JSON.parse(localStorage.getItem("qualificados"))[grupo].lugar2.img;
	classif.children[0].children[1].children[2].textContent = JSON.parse(localStorage.getItem("qualificados"))[grupo].lugar2.pais.toUpperCase();
}

//Função para avaliar vitoria/derrota/empate
function comparar(id1, id2, time1, time2, pais1, pais2, auxt, json1, json2, grupo){
	
	var valorid1 = parseInt(id1.value);
	var valorid2 = parseInt(id2.value);
	
	if(id1.value == "" || id2.value == ""){
		return;
	}else if(auxt.id1 != "a" && auxt.id2 != "a"){  //Retirar valores antigos
		
		var antiId1Saldo = auxt.id2 - auxt.id1;
		var antiId2Saldo = auxt.id1 - auxt.id2;
		if(auxt.id1 > auxt.id2){
			time1.golsPro -= auxt.id1;
			time2.golsPro -= auxt.id2;
			time1.golsContra -= auxt.id2;
			time2.golsContra -= auxt.id1;
			time1.saldoGols += antiId1Saldo;
			time2.saldoGols += antiId2Saldo;
			time1.vitoria--;
			time2.derrota--;
			time1.jogos--;
			time2.jogos--;
			time1.pontos = time1.pontos - 3;
		}else if(auxt.id1 < auxt.id2){
			time1.golsPro -= auxt.id1;
			time2.golsPro -= auxt.id2;
			time1.golsContra -= auxt.id2;
			time2.golsContra -= auxt.id1;
			time1.saldoGols += antiId1Saldo;
			time2.saldoGols += antiId2Saldo;
			time2.vitoria--;
			time1.derrota--;
			time1.jogos--;
			time2.jogos--;
			time2.pontos = time2.pontos - 3;
		}else{
			time1.golsPro -= auxt.id1;
			time2.golsPro -= auxt.id2;
			time1.golsContra -= auxt.id2;
			time2.golsContra -= auxt.id1;
			time1.saldoGols += antiId1Saldo;
			time2.saldoGols += antiId2Saldo;
			time1.empate--;
			time2.empate--;
			time1.jogos--;
			time2.jogos--;
			time1.pontos--;
			time2.pontos--;
		}
	}
	
	//Adicionar novos valores
	if(valorid1 > valorid2){
		time1.golsPro += valorid1;
		time2.golsPro += valorid2;
		time1.golsContra += valorid2;
		time2.golsContra += valorid1;
		time1.saldoGols += (valorid1 - valorid2);
		time2.saldoGols += (valorid2 - valorid1);
		time1.vitoria++;
		time2.derrota++;
		time1.jogos++;
		time2.jogos++;
		auxt.id1 = valorid1;
		auxt.id2 = valorid2;
	}else if(valorid1 < valorid2){
		time1.golsPro += valorid1;
		time2.golsPro += valorid2;
		time1.golsContra += valorid2;
		time2.golsContra += valorid1;
		time1.saldoGols += (valorid1 - valorid2);
		time2.saldoGols += (valorid2 - valorid1);
		time2.vitoria++;
		time1.derrota++;
		time1.jogos++;
		time2.jogos++;
		auxt.id1 = valorid1;
		auxt.id2 = valorid2;
	}else{
		time1.golsPro += valorid1;
		time2.golsPro += valorid2;
		time1.golsContra += valorid2;
		time2.golsContra += valorid1;
		time1.saldoGols += (valorid1 - valorid2);
		time2.saldoGols += (valorid2 - valorid1);
		time1.empate++;
		time2.empate++;
		time1.jogos++;
		time2.jogos++;
		auxt.id1 = valorid1;
		auxt.id2 = valorid2;
	}
	time1.pontos = (3 * time1.vitoria) + time1.empate;
	time2.pontos = (3 * time2.vitoria) + time2.empate;
	
	localStorage.setItem("times", JSON.stringify(times));
	localStorage.setItem("aux", JSON.stringify(aux));

	tabela(time1, time2, pais1, pais2, json1, json2);
	classificacao();

	//Times que passaram da fase de Grupo
	qualificados[grupo] = {
		lugar1: auxQualif[0],
		lugar2: auxQualif[1]
	};
	localStorage.setItem("qualificados", JSON.stringify(qualificados));
	vGeral(grupo);
}

//Função resetar Dados
function reset(ident){

	//Zerando os dados dos Times
	for(var i = 0; i < times.length; i++){
		times[i].pontos = 0;
		times[i].jogos = 0;
		times[i].vitoria = 0;
		times[i].empate = 0;
		times[i].derrota = 0;
		times[i].golsPro = 0;
		times[i].golsContra = 0;
		times[i].saldoGols = 0;
	}

	//Zerando os auxiliares dos inputs
	for(var i = 0; i < 48; i++){
		aux[i] = new criarAux("a", "a");
	}

	//Resetando a tabela
	for(var i = 1; i < 5; i++){
		for(var j = 2; j < 11; j++){
			pontos[0].children[i].children[j].textContent = "";
		}
		pontos[0].children[i].children[0].textContent = "\u268B";
	}

	//Zerando os inputs
	eval(ident + "1a").value = ""
	eval(ident + "1b").value = ""

	eval(ident + "2a").value = ""
	eval(ident + "2b").value = ""

	eval(ident + "3a").value = ""
	eval(ident + "3b").value = ""

	eval(ident + "4a").value = ""
	eval(ident + "4b").value = ""

	eval(ident + "5a").value = ""
	eval(ident + "5b").value = ""

	eval(ident + "6a").value = ""
	eval(ident + "6b").value = ""

	visaoGeral.style.display = "none";

	localStorage.removeItem("times");
	localStorage.removeItem("aux");
	localStorage.removeItem("qualificados");
	localStorage.removeItem("auxAll");	
	localStorage.removeItem("finalista");
}

//Criar auxiliares localStorage nome: aux
if(localStorage.getItem("aux") == null){

	for(var i = 0; i < 48; i++){
		aux[i] = new criarAux("a", "a");
	}
}else{
	
	aux = JSON.parse(localStorage.getItem("aux"));
}

//Completar os dados localStorage nome: times
if(localStorage.getItem("times") == null){

	for(var i = 0; i < times.length; i++){
		times[i].pontos = 0;
		times[i].jogos = 0;
		times[i].vitoria = 0;
		times[i].empate = 0;
		times[i].derrota = 0;
		times[i].golsPro = 0;
		times[i].golsContra = 0;
		times[i].saldoGols = 0;
	}
}else{
	
	times = JSON.parse(localStorage.getItem("times")); 
}

//localStorage nome: qualificados
if(localStorage.getItem("qualificados") != null){
	
	qualificados = JSON.parse(localStorage.getItem("qualificados"));
}