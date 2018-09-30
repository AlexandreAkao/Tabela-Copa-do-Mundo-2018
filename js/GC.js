// Preencher a tabale Grupo C
if(JSON.parse(localStorage.getItem("times")) != null){
	
	if(JSON.parse(localStorage.getItem("times"))[8].jogos != 0 ){
		australia.children[2].textContent = JSON.parse(localStorage.getItem("times"))[8].pontos;
		australia.children[3].textContent = JSON.parse(localStorage.getItem("times"))[8].jogos;
		australia.children[4].textContent = JSON.parse(localStorage.getItem("times"))[8].vitoria;
		australia.children[5].textContent = JSON.parse(localStorage.getItem("times"))[8].empate;
		australia.children[6].textContent = JSON.parse(localStorage.getItem("times"))[8].derrota;
		australia.children[7].textContent = JSON.parse(localStorage.getItem("times"))[8].golsPro;
		australia.children[8].textContent = JSON.parse(localStorage.getItem("times"))[8].golsContra;
		australia.children[9].textContent = JSON.parse(localStorage.getItem("times"))[8].saldoGols;
		australia.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[8].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(2);
	}else{
		australia.children[0].textContent = "\u268B";
	}
	
	if(JSON.parse(localStorage.getItem("times"))[9].jogos != 0 ){
		dinamarca.children[2].textContent = JSON.parse(localStorage.getItem("times"))[9].pontos;
		dinamarca.children[3].textContent = JSON.parse(localStorage.getItem("times"))[9].jogos;
		dinamarca.children[4].textContent = JSON.parse(localStorage.getItem("times"))[9].vitoria;
		dinamarca.children[5].textContent = JSON.parse(localStorage.getItem("times"))[9].empate;
		dinamarca.children[6].textContent = JSON.parse(localStorage.getItem("times"))[9].derrota;
		dinamarca.children[7].textContent = JSON.parse(localStorage.getItem("times"))[9].golsPro;
		dinamarca.children[8].textContent = JSON.parse(localStorage.getItem("times"))[9].golsContra;
		dinamarca.children[9].textContent = JSON.parse(localStorage.getItem("times"))[9].saldoGols;
		dinamarca.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[9].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(2);
	}else{
		dinamarca.children[0].textContent = "\u268B";
	}
	
	if(JSON.parse(localStorage.getItem("times"))[10].jogos != 0 ){
		franca.children[2].textContent = JSON.parse(localStorage.getItem("times"))[10].pontos;
		franca.children[3].textContent = JSON.parse(localStorage.getItem("times"))[10].jogos;
		franca.children[4].textContent = JSON.parse(localStorage.getItem("times"))[10].vitoria;
		franca.children[5].textContent = JSON.parse(localStorage.getItem("times"))[10].empate;
		franca.children[6].textContent = JSON.parse(localStorage.getItem("times"))[10].derrota;
		franca.children[7].textContent = JSON.parse(localStorage.getItem("times"))[10].golsPro;
		franca.children[8].textContent = JSON.parse(localStorage.getItem("times"))[10].golsContra;
		franca.children[9].textContent = JSON.parse(localStorage.getItem("times"))[10].saldoGols;
		franca.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[10].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(2);
	}else{
		franca.children[0].textContent = "\u268B";
	}
	
	if(JSON.parse(localStorage.getItem("times"))[11].jogos != 0 ){
		peru.children[2].textContent = JSON.parse(localStorage.getItem("times"))[11].pontos;
		peru.children[3].textContent = JSON.parse(localStorage.getItem("times"))[11].jogos;
		peru.children[4].textContent = JSON.parse(localStorage.getItem("times"))[11].vitoria;
		peru.children[5].textContent = JSON.parse(localStorage.getItem("times"))[11].empate;
		peru.children[6].textContent = JSON.parse(localStorage.getItem("times"))[11].derrota;
		peru.children[7].textContent = JSON.parse(localStorage.getItem("times"))[11].golsPro;
		peru.children[8].textContent = JSON.parse(localStorage.getItem("times"))[11].golsContra;
		peru.children[9].textContent = JSON.parse(localStorage.getItem("times"))[11].saldoGols;
		peru.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[11].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(2);
	}else{
		peru.children[0].textContent = "\u268B";
	}
}

if(JSON.parse(localStorage.getItem("aux")) != null){
	
	if(JSON.parse(localStorage.getItem("aux"))[12].id1 != "a"){
		cJogo1a.value = JSON.parse(localStorage.getItem("aux"))[12].id1;
		cJogo1b.value = JSON.parse(localStorage.getItem("aux"))[12].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[13].id1 != "a"){
		cJogo2a.value = JSON.parse(localStorage.getItem("aux"))[13].id1;
		cJogo2b.value = JSON.parse(localStorage.getItem("aux"))[13].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[14].id1 != "a"){
		cJogo3a.value = JSON.parse(localStorage.getItem("aux"))[14].id1;
		cJogo3b.value = JSON.parse(localStorage.getItem("aux"))[14].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[15].id1 != "a"){
		cJogo4a.value = JSON.parse(localStorage.getItem("aux"))[15].id1;
		cJogo4b.value = JSON.parse(localStorage.getItem("aux"))[15].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[16].id1 != "a"){
		cJogo5a.value = JSON.parse(localStorage.getItem("aux"))[16].id1;
		cJogo5b.value = JSON.parse(localStorage.getItem("aux"))[16].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[17].id1 != "a"){
		cJogo6a.value = JSON.parse(localStorage.getItem("aux"))[17].id1;
		cJogo6b.value = JSON.parse(localStorage.getItem("aux"))[17].id2;
	}
}