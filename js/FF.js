var oitavas = document.getElementById("oitavas");

var auxAll = [];
var finalistas = [];

//Criar Objeto
function auxFF(a, b, c, d){
	
	this.p1 = a;
	this.p2 = b;
	this.info1 = c;
	this.info2 = d;
}

//Função Ganhador partida
function partida(id1, id2, go1, terc, go2, aux){
	var valorId1 = parseInt(id1.children[2].children[0].value);
	var valorId2 = parseInt(id2.children[2].children[0].value);

	if(valorId1 == valorId2){
		swal({
		  type: 'error',
		  title: 'Número de Gols iguais!!',
		});
		return;
	}else{

		auxAll[aux].p1 = id1.children[2].children[0].value;
		auxAll[aux].p2 = id2.children[2].children[0].value;
		auxAll[aux].info1 = id1.children[3].textContent;
		auxAll[aux].info2 = id2.children[3].textContent;

		if(valorId1 > valorId2){

			go1.children[0].children[0].src = JSON.parse(id1.children[3].textContent).img;
			go1.children[1].textContent = JSON.parse(id1.children[3].textContent).abr;
			go1.children[3].textContent = id1.children[3].textContent;
		}else if(valorId1 < valorId2){

			go1.children[0].children[0].src = JSON.parse(id2.children[3].textContent).img;
			go1.children[1].textContent = JSON.parse(id2.children[3].textContent).abr;
			go1.children[3].textContent = id2.children[3].textContent;
		}
	}

	if(terc){
		if(valorId1 < valorId2){
			go2.children[0].children[0].src = JSON.parse(id1.children[3].textContent).img;
			go2.children[1].textContent = JSON.parse(id1.children[3].textContent).abr;
			go2.children[3].textContent = id1.children[3].textContent;

		}else if(valorId1 > valorId2){
			go2.children[0].children[0].src = JSON.parse(id2.children[3].textContent).img;
			go2.children[1].textContent = JSON.parse(id2.children[3].textContent).abr;
			go2.children[3].textContent = id2.children[3].textContent;
		}
	}

	localStorage.setItem("auxAll", JSON.stringify(auxAll));
}

//Função Jogo Final e terceiro
function finalist(id1, id2, aux, final, terc){
	var valorId1 = parseInt(id1.children[2].children[0].value);
	var valorId2 = parseInt(id2.children[2].children[0].value);

	if(valorId1 == valorId2){
		swal({
		  type: 'error',
		  title: 'Número de Gols iguais!!',
		});
		return;
	}else{
		
		auxAll[aux].p1 = id1.children[2].children[0].value;
		auxAll[aux].p2 = id2.children[2].children[0].value;
		auxAll[aux].info1 = id1.children[3].textContent;
		auxAll[aux].info2 = id2.children[3].textContent;

		if(final){
			if(valorId1 > valorId2){
				finalistas[0] = JSON.parse(id1.children[3].textContent);
				finalistas[1] = JSON.parse(id2.children[3].textContent);
			}else if(valorId1 < valorId2){
				finalistas[0] = JSON.parse(id2.children[3].textContent);
				finalistas[1] = JSON.parse(id1.children[3].textContent);
			}	
		}
		if(terc){
			if(valorId1 > valorId2){
				finalistas[2] = JSON.parse(id1.children[3].textContent);
			}else if(valorId1 < valorId2){
				finalistas[2] = JSON.parse(id2.children[3].textContent);
			}
		}
	}

	colocados(true);
	

	localStorage.setItem("auxAll", JSON.stringify(auxAll));
	localStorage.setItem("finalista", JSON.stringify(finalistas));
}

//Função aparecer tabela e SweetAlert
function colocados(a){

	if(final.children[0].children[0].children[0].children[2].children[0].value != "" && final.children[0].children[0].children[1].children[2].children[0].value != "" && final.children[2].children[0].children[0].children[2].children[0].value != "" && final.children[2].children[0].children[1].children[2].children[0].value != ""){

		for(var i = 0; i < 3; i++){
			colocacao.children[0].children[0].children[i].children[0].textContent = (i + 1);
			colocacao.children[0].children[0].children[i].children[1].children[0].src = finalistas[i].img;
			colocacao.children[0].children[0].children[i].children[2].textContent = finalistas[i].pais; 
		}
		colocacao.style.display = "";
	}

	if(a){

		swal({
		    type: 'success',
		    title: 'Tabela Finalizada!',
		    html: 'Ganhadores: <br><br>1° <img class="bandeira" src="' + finalistas[0].img + '"> ' + finalistas[0].pais + '<br><br>2° <img class="bandeira" src="' + finalistas[1].img + '"> ' + finalistas[1].pais + '<br><br>3° <img class="bandeira" src="' + finalistas[2].img + '"> ' + finalistas[2].pais,
		    confirmButtonColor: '#B9141A',
		    confirmButtonText: 'Ok'
		}).then(() => {
		    swal({
		        type: 'warning',
		        title: 'ATENÇÃO!',
		        html: 'Gostaria de resetar a tabela ?',
		        showCancelButton: true,
		        cancelButtonText: 'Não!',
		        cancelButtonColor: '#d33',
		        confirmButtonColor: '#3085d6',
		        confirmButtonText: 'Sim!'
		    }).then((result) => {
		        if (result.value) {
		            swal(
		              'Deletado!',
		              'A tabela foi resetada.',
		              'success'
		            )
		            reset2();
		        }
		    })
		})
	}
}

//Função para resetar
function reset2(){
	var aux1;
	var aux2;
	var aux3 = [
		["1° A", "2° B"],
		["1° C", "2° D"],
		["1° E", "2° F"],
		["1° G", "2° H"],
		["1° B", "2° A"],
		["1° D", "2° C"],
		["1° F", "2° E"],
		["1° H", "2° G"]
	];

	//Oitavas
	for(var i = 0; i < 8; i++){
		aux1 = oitavas.children[i].children[0];
		for(var j = 0; j < 2; j++){
			aux2 = aux1.children[j];
			aux2.children[0].children[0].src = "img/bandeira_interrogacao.svg";
			aux2.children[1].textContent = aux3[i][j];
			aux2.children[2].children[0].value = "";
			aux2.children[3].textContent = "";
		}
	}

	//Quartas
	for(var i = 0; i < 4; i++){
		aux1 = quartas.children[i].children[0];
		for(var j = 0; j < 2; j++){
			aux2 = aux1.children[j];
			aux2.children[0].children[0].src = "img/bandeira_interrogacao.svg";
			aux2.children[1].textContent = "?";
			aux2.children[2].children[0].value = "";
			aux2.children[3].textContent = "";
		}
	}

	//Semi
	for(var i = 0; i < 2; i++){
		aux1 = semi.children[i].children[0];
		for(var j = 0; j < 2; j++){
			aux2 = aux1.children[j];
			aux2.children[0].children[0].src = "img/bandeira_interrogacao.svg";
			aux2.children[1].textContent = "?";
			aux2.children[2].children[0].value = "";
			aux2.children[3].textContent = "";
		}
	}

	//Final
	aux1 = final.children[0].children[0];
	for(var j = 0; j < 2; j++){
		aux2 = aux1.children[j];
		aux2.children[0].children[0].src = "img/bandeira_interrogacao.svg";
		aux2.children[1].textContent = "?";
		aux2.children[2].children[0].value = "";
		aux2.children[3].textContent = "";
	}

	//Terceiro
	aux1 = final.children[2].children[0];
	for(var j = 0; j < 2; j++){
		aux2 = aux1.children[j];
		aux2.children[0].children[0].src = "img/bandeira_interrogacao.svg";
		aux2.children[1].textContent = "?";
		aux2.children[2].children[0].value = "";
		aux2.children[3].textContent = "";
	}
	colocacao.style.display = "none";

	localStorage.removeItem("times");
	localStorage.removeItem("aux");
	localStorage.removeItem("qualificados");
	localStorage.removeItem("auxAll");
	localStorage.removeItem("finalista");
}

//Criar ou Resgatar os dados do auxAll
if(localStorage.getItem("auxAll") == null){
	for(var i = 0; i < 16; i++){
		auxAll[i] = new auxFF("", "", "", "");
	}
}else{
	auxAll = JSON.parse(localStorage.getItem("auxAll"));
}

//localStorage nome: finalista
if(localStorage.getItem("finalista") != null){
	finalistas = JSON.parse(localStorage.getItem("finalista"));
}

//Completar Bandeira e Abreviação Oitavas
if(localStorage.getItem("qualificados") != null){
	if(JSON.parse(localStorage.getItem("qualificados"))[0] != null){
		oitavas.children[0].children[0].children[0].children[0].children[0].src = JSON.parse(localStorage.getItem("qualificados"))[0].lugar1.img;
		oitavas.children[0].children[0].children[0].children[1].textContent = JSON.parse(localStorage.getItem("qualificados"))[0].lugar1.abr;
		oitavas.children[0].children[0].children[0].children[3].textContent = JSON.stringify(JSON.parse(localStorage.getItem("qualificados"))[0].lugar1);

		oitavas.children[4].children[0].children[1].children[0].children[0].src = JSON.parse(localStorage.getItem("qualificados"))[0].lugar2.img;
		oitavas.children[4].children[0].children[1].children[1].textContent = JSON.parse(localStorage.getItem("qualificados"))[0].lugar2.abr;
		oitavas.children[4].children[0].children[1].children[3].textContent = JSON.stringify(JSON.parse(localStorage.getItem("qualificados"))[0].lugar2);
	}
	if(JSON.parse(localStorage.getItem("qualificados"))[1] != null){
		oitavas.children[4].children[0].children[0].children[0].children[0].src = JSON.parse(localStorage.getItem("qualificados"))[1].lugar1.img;
		oitavas.children[4].children[0].children[0].children[1].textContent = JSON.parse(localStorage.getItem("qualificados"))[1].lugar1.abr;
		oitavas.children[4].children[0].children[0].children[3].textContent = JSON.stringify(JSON.parse(localStorage.getItem("qualificados"))[1].lugar1);

		oitavas.children[0].children[0].children[1].children[0].children[0].src = JSON.parse(localStorage.getItem("qualificados"))[1].lugar2.img;
		oitavas.children[0].children[0].children[1].children[1].textContent = JSON.parse(localStorage.getItem("qualificados"))[1].lugar2.abr;
		oitavas.children[0].children[0].children[1].children[3].textContent = JSON.stringify(JSON.parse(localStorage.getItem("qualificados"))[1].lugar2);
	}
	if(JSON.parse(localStorage.getItem("qualificados"))[2] != null){
		oitavas.children[1].children[0].children[0].children[0].children[0].src = JSON.parse(localStorage.getItem("qualificados"))[2].lugar1.img;
		oitavas.children[1].children[0].children[0].children[1].textContent = JSON.parse(localStorage.getItem("qualificados"))[2].lugar1.abr;
		oitavas.children[1].children[0].children[0].children[3].textContent = JSON.stringify(JSON.parse(localStorage.getItem("qualificados"))[2].lugar1);

		oitavas.children[5].children[0].children[1].children[0].children[0].src = JSON.parse(localStorage.getItem("qualificados"))[2].lugar2.img;
		oitavas.children[5].children[0].children[1].children[1].textContent = JSON.parse(localStorage.getItem("qualificados"))[2].lugar2.abr;
		oitavas.children[5].children[0].children[1].children[3].textContent = JSON.stringify(JSON.parse(localStorage.getItem("qualificados"))[2].lugar2);
	}
	if(JSON.parse(localStorage.getItem("qualificados"))[3] != null){
		oitavas.children[5].children[0].children[0].children[0].children[0].src = JSON.parse(localStorage.getItem("qualificados"))[3].lugar1.img;
		oitavas.children[5].children[0].children[0].children[1].textContent = JSON.parse(localStorage.getItem("qualificados"))[3].lugar1.abr;
		oitavas.children[5].children[0].children[0].children[3].textContent = JSON.stringify(JSON.parse(localStorage.getItem("qualificados"))[3].lugar1);

		oitavas.children[1].children[0].children[1].children[0].children[0].src = JSON.parse(localStorage.getItem("qualificados"))[3].lugar2.img;
		oitavas.children[1].children[0].children[1].children[1].textContent = JSON.parse(localStorage.getItem("qualificados"))[3].lugar2.abr;
		oitavas.children[1].children[0].children[1].children[3].textContent = JSON.stringify(JSON.parse(localStorage.getItem("qualificados"))[3].lugar2);
	}
	if(JSON.parse(localStorage.getItem("qualificados"))[4] != null){
		oitavas.children[2].children[0].children[0].children[0].children[0].src = JSON.parse(localStorage.getItem("qualificados"))[4].lugar1.img;
		oitavas.children[2].children[0].children[0].children[1].textContent = JSON.parse(localStorage.getItem("qualificados"))[4].lugar1.abr;
		oitavas.children[2].children[0].children[0].children[3].textContent = JSON.stringify(JSON.parse(localStorage.getItem("qualificados"))[4].lugar1);

		oitavas.children[6].children[0].children[1].children[0].children[0].src = JSON.parse(localStorage.getItem("qualificados"))[4].lugar2.img;
		oitavas.children[6].children[0].children[1].children[1].textContent = JSON.parse(localStorage.getItem("qualificados"))[4].lugar2.abr;
		oitavas.children[6].children[0].children[1].children[3].textContent = JSON.stringify(JSON.parse(localStorage.getItem("qualificados"))[4].lugar2);
	}
	if(JSON.parse(localStorage.getItem("qualificados"))[5] != null){
		oitavas.children[6].children[0].children[0].children[0].children[0].src = JSON.parse(localStorage.getItem("qualificados"))[5].lugar1.img;
		oitavas.children[6].children[0].children[0].children[1].textContent = JSON.parse(localStorage.getItem("qualificados"))[5].lugar1.abr;
		oitavas.children[6].children[0].children[0].children[3].textContent = JSON.stringify(JSON.parse(localStorage.getItem("qualificados"))[5].lugar1);

		oitavas.children[2].children[0].children[1].children[0].children[0].src = JSON.parse(localStorage.getItem("qualificados"))[5].lugar2.img;
		oitavas.children[2].children[0].children[1].children[1].textContent = JSON.parse(localStorage.getItem("qualificados"))[5].lugar2.abr;
		oitavas.children[2].children[0].children[1].children[3].textContent = JSON.stringify(JSON.parse(localStorage.getItem("qualificados"))[5].lugar2);
	}
	if(JSON.parse(localStorage.getItem("qualificados"))[6] != null){
		oitavas.children[3].children[0].children[0].children[0].children[0].src = JSON.parse(localStorage.getItem("qualificados"))[6].lugar1.img;
		oitavas.children[3].children[0].children[0].children[1].textContent = JSON.parse(localStorage.getItem("qualificados"))[6].lugar1.abr;
		oitavas.children[3].children[0].children[0].children[3].textContent = JSON.stringify(JSON.parse(localStorage.getItem("qualificados"))[6].lugar1);

		oitavas.children[7].children[0].children[1].children[0].children[0].src = JSON.parse(localStorage.getItem("qualificados"))[6].lugar2.img;
		oitavas.children[7].children[0].children[1].children[1].textContent = JSON.parse(localStorage.getItem("qualificados"))[6].lugar2.abr;
		oitavas.children[7].children[0].children[1].children[3].textContent = JSON.stringify(JSON.parse(localStorage.getItem("qualificados"))[6].lugar2);
	}
	if(JSON.parse(localStorage.getItem("qualificados"))[7] != null){
		oitavas.children[7].children[0].children[0].children[0].children[0].src = JSON.parse(localStorage.getItem("qualificados"))[7].lugar1.img;
		oitavas.children[7].children[0].children[0].children[1].textContent = JSON.parse(localStorage.getItem("qualificados"))[7].lugar1.abr;
		oitavas.children[7].children[0].children[0].children[3].textContent = JSON.stringify(JSON.parse(localStorage.getItem("qualificados"))[7].lugar1);

		oitavas.children[3].children[0].children[1].children[0].children[0].src = JSON.parse(localStorage.getItem("qualificados"))[7].lugar2.img;
		oitavas.children[3].children[0].children[1].children[1].textContent = JSON.parse(localStorage.getItem("qualificados"))[7].lugar2.abr;
		oitavas.children[3].children[0].children[1].children[3].textContent = JSON.stringify(JSON.parse(localStorage.getItem("qualificados"))[7].lugar2);
	}
}

//Completar os dados
if(JSON.parse(localStorage.getItem("auxAll")) != null){
	oitavas.children[0].children[0].children[0].children[2].children[0].value = auxAll[0].p1;
	oitavas.children[0].children[0].children[1].children[2].children[0].value = auxAll[0].p2;

	oitavas.children[1].children[0].children[0].children[2].children[0].value = auxAll[1].p1;
	oitavas.children[1].children[0].children[1].children[2].children[0].value = auxAll[1].p2;

	oitavas.children[2].children[0].children[0].children[2].children[0].value = auxAll[2].p1;
	oitavas.children[2].children[0].children[1].children[2].children[0].value = auxAll[2].p2;

	oitavas.children[3].children[0].children[0].children[2].children[0].value = auxAll[3].p1;
	oitavas.children[3].children[0].children[1].children[2].children[0].value = auxAll[3].p2;

	oitavas.children[4].children[0].children[0].children[2].children[0].value = auxAll[4].p1;
	oitavas.children[4].children[0].children[1].children[2].children[0].value = auxAll[4].p2;

	oitavas.children[5].children[0].children[0].children[2].children[0].value = auxAll[5].p1;
	oitavas.children[5].children[0].children[1].children[2].children[0].value = auxAll[5].p2;

	oitavas.children[6].children[0].children[0].children[2].children[0].value = auxAll[6].p1;
	oitavas.children[6].children[0].children[1].children[2].children[0].value = auxAll[6].p2;

	oitavas.children[7].children[0].children[0].children[2].children[0].value = auxAll[7].p1;
	oitavas.children[7].children[0].children[1].children[2].children[0].value = auxAll[7].p2;

	//auxAll[8]
	if(auxAll[8].info1 != ""){

		quartas.children[0].children[0].children[0].children[0].children[0].src = JSON.parse(auxAll[8].info1).img;
		quartas.children[0].children[0].children[0].children[1].textContent = JSON.parse(auxAll[8].info1).abr;
		quartas.children[0].children[0].children[0].children[3].textContent = auxAll[8].info1;
	}
	if(auxAll[8].info2 != ""){
		
		quartas.children[0].children[0].children[1].children[0].children[0].src = JSON.parse(auxAll[8].info2).img;
		quartas.children[0].children[0].children[1].children[1].textContent = JSON.parse(auxAll[8].info2).abr;
		quartas.children[0].children[0].children[1].children[3].textContent = auxAll[8].info2;
	}
	quartas.children[0].children[0].children[0].children[2].children[0].value = auxAll[8].p1;
	quartas.children[0].children[0].children[1].children[2].children[0].value = auxAll[8].p2;

	//auxAll[9]
	if(auxAll[9].info1 != ""){
		
		quartas.children[1].children[0].children[0].children[0].children[0].src = JSON.parse(auxAll[9].info1).img;
		quartas.children[1].children[0].children[0].children[1].textContent = JSON.parse(auxAll[9].info1).abr;
		quartas.children[1].children[0].children[0].children[3].textContent = auxAll[9].info1;
	}
	if(auxAll[9].info2 != ""){
		
		quartas.children[1].children[0].children[1].children[0].children[0].src = JSON.parse(auxAll[9].info2).img;
		quartas.children[1].children[0].children[1].children[1].textContent = JSON.parse(auxAll[9].info2).abr;
		quartas.children[1].children[0].children[1].children[3].textContent = auxAll[9].info2;

	}
	quartas.children[1].children[0].children[0].children[2].children[0].value = auxAll[9].p1;
	quartas.children[1].children[0].children[1].children[2].children[0].value = auxAll[9].p2;

	//auxAll[10]
	if(auxAll[10].info1 != ""){
		
		quartas.children[2].children[0].children[0].children[0].children[0].src = JSON.parse(auxAll[10].info1).img;
		quartas.children[2].children[0].children[0].children[1].textContent = JSON.parse(auxAll[10].info1).abr;
		quartas.children[2].children[0].children[0].children[3].textContent = auxAll[10].info1;
	}
	if(auxAll[10].info2 != ""){
		
		quartas.children[2].children[0].children[1].children[0].children[0].src = JSON.parse(auxAll[10].info2).img;
		quartas.children[2].children[0].children[1].children[1].textContent = JSON.parse(auxAll[10].info2).abr;
		quartas.children[2].children[0].children[1].children[3].textContent = auxAll[10].info2;
	}
	quartas.children[2].children[0].children[0].children[2].children[0].value = auxAll[10].p1;
	quartas.children[2].children[0].children[1].children[2].children[0].value = auxAll[10].p2;

	//auxAll[11]
	if(auxAll[11].info1 != ""){
		
		quartas.children[3].children[0].children[0].children[0].children[0].src = JSON.parse(auxAll[11].info1).img;
		quartas.children[3].children[0].children[0].children[1].textContent = JSON.parse(auxAll[11].info1).abr;
		quartas.children[3].children[0].children[0].children[3].textContent = auxAll[11].info1;
	}
	if(auxAll[11].info2 != ""){
		
		quartas.children[3].children[0].children[1].children[0].children[0].src = JSON.parse(auxAll[11].info2).img;
		quartas.children[3].children[0].children[1].children[1].textContent = JSON.parse(auxAll[11].info2).abr;
		quartas.children[3].children[0].children[1].children[3].textContent = auxAll[11].info2;
	}
	quartas.children[3].children[0].children[0].children[2].children[0].value = auxAll[11].p1;
	quartas.children[3].children[0].children[1].children[2].children[0].value = auxAll[11].p2;

	//auxAll[12]
	if(auxAll[12].info1 != ""){
		
		semi.children[0].children[0].children[0].children[0].children[0].src = JSON.parse(auxAll[12].info1).img;
		semi.children[0].children[0].children[0].children[1].textContent = JSON.parse(auxAll[12].info1).abr;
		semi.children[0].children[0].children[0].children[3].textContent = auxAll[12].info1;
	}
	if(auxAll[12].info2 != ""){
		
		semi.children[0].children[0].children[1].children[0].children[0].src = JSON.parse(auxAll[12].info2).img;
		semi.children[0].children[0].children[1].children[1].textContent = JSON.parse(auxAll[12].info2).abr;
		semi.children[0].children[0].children[1].children[3].textContent = auxAll[12].info2;
	}
	semi.children[0].children[0].children[0].children[2].children[0].value = auxAll[12].p1;
	semi.children[0].children[0].children[1].children[2].children[0].value = auxAll[12].p2;

	//auxAll[13]
	if(auxAll[13].info1 != ""){
		
		semi.children[1].children[0].children[0].children[0].children[0].src = JSON.parse(auxAll[13].info1).img;
		semi.children[1].children[0].children[0].children[1].textContent = JSON.parse(auxAll[13].info1).abr;
		semi.children[1].children[0].children[0].children[3].textContent = auxAll[13].info1;
	}
	if(auxAll[13].info2 != ""){
		
		semi.children[1].children[0].children[1].children[0].children[0].src = JSON.parse(auxAll[13].info2).img;
		semi.children[1].children[0].children[1].children[1].textContent = JSON.parse(auxAll[13].info2).abr;
		semi.children[1].children[0].children[1].children[3].textContent = auxAll[13].info2;
	}
	semi.children[1].children[0].children[0].children[2].children[0].value = auxAll[13].p1;
	semi.children[1].children[0].children[1].children[2].children[0].value = auxAll[13].p2;

	//auxAll[14]
	if(auxAll[14].info1 != ""){
		
		final.children[0].children[0].children[0].children[0].children[0].src = JSON.parse(auxAll[14].info1).img;
		final.children[0].children[0].children[0].children[1].textContent = JSON.parse(auxAll[14].info1).abr;
		final.children[0].children[0].children[0].children[3].textContent = auxAll[14].info1;
	}
	if(auxAll[14].info2 != ""){
		
		final.children[0].children[0].children[1].children[0].children[0].src = JSON.parse(auxAll[14].info2).img;
		final.children[0].children[0].children[1].children[1].textContent = JSON.parse(auxAll[14].info2).abr;
		final.children[0].children[0].children[1].children[3].textContent = auxAll[14].info2;
	}
	final.children[0].children[0].children[0].children[2].children[0].value = auxAll[14].p1;
	final.children[0].children[0].children[1].children[2].children[0].value = auxAll[14].p2;

	//auxAll[15]
	if(auxAll[15].info1 != ""){
		
		final.children[2].children[0].children[0].children[0].children[0].src = JSON.parse(auxAll[15].info1).img;
		final.children[2].children[0].children[0].children[1].textContent = JSON.parse(auxAll[15].info1).abr;
		final.children[2].children[0].children[0].children[3].textContent = auxAll[15].info1;
	}
	if(auxAll[15].info2 != ""){
		
		final.children[2].children[0].children[1].children[0].children[0].src = JSON.parse(auxAll[15].info2).img;
		final.children[2].children[0].children[1].children[1].textContent = JSON.parse(auxAll[15].info2).abr;
		final.children[2].children[0].children[1].children[3].textContent = auxAll[15].info2;
	}
	final.children[2].children[0].children[0].children[2].children[0].value = auxAll[15].p1;
	final.children[2].children[0].children[1].children[2].children[0].value = auxAll[15].p2;
}

colocados(false);