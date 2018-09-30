// Preencher a tabale Grupo B
if(JSON.parse(localStorage.getItem("times")) != null){
	
	if(JSON.parse(localStorage.getItem("times"))[4].jogos != 0){
		espanha.children[2].textContent = JSON.parse(localStorage.getItem("times"))[4].pontos;
		espanha.children[3].textContent = JSON.parse(localStorage.getItem("times"))[4].jogos;
		espanha.children[4].textContent = JSON.parse(localStorage.getItem("times"))[4].vitoria;
		espanha.children[5].textContent = JSON.parse(localStorage.getItem("times"))[4].empate;
		espanha.children[6].textContent = JSON.parse(localStorage.getItem("times"))[4].derrota;
		espanha.children[7].textContent = JSON.parse(localStorage.getItem("times"))[4].golsPro;
		espanha.children[8].textContent = JSON.parse(localStorage.getItem("times"))[4].golsContra;
		espanha.children[9].textContent = JSON.parse(localStorage.getItem("times"))[4].saldoGols;
		espanha.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[4].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(1);
	}else{
		espanha.children[0].textContent = "\u268B";
	}
	
	if(JSON.parse(localStorage.getItem("times"))[5].jogos != 0 ){
		ira.children[2].textContent = JSON.parse(localStorage.getItem("times"))[5].pontos;
		ira.children[3].textContent = JSON.parse(localStorage.getItem("times"))[5].jogos;
		ira.children[4].textContent = JSON.parse(localStorage.getItem("times"))[5].vitoria;
		ira.children[5].textContent = JSON.parse(localStorage.getItem("times"))[5].empate;
		ira.children[6].textContent = JSON.parse(localStorage.getItem("times"))[5].derrota;
		ira.children[7].textContent = JSON.parse(localStorage.getItem("times"))[5].golsPro;
		ira.children[8].textContent = JSON.parse(localStorage.getItem("times"))[5].golsContra;
		ira.children[9].textContent = JSON.parse(localStorage.getItem("times"))[5].saldoGols;
		ira.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[5].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(1);
	}else{
		ira.children[0].textContent = "\u268B";
	}
	
	if(JSON.parse(localStorage.getItem("times"))[6].jogos != 0 ){
		marrocos.children[2].textContent = JSON.parse(localStorage.getItem("times"))[6].pontos;
		marrocos.children[3].textContent = JSON.parse(localStorage.getItem("times"))[6].jogos;
		marrocos.children[4].textContent = JSON.parse(localStorage.getItem("times"))[6].vitoria;
		marrocos.children[5].textContent = JSON.parse(localStorage.getItem("times"))[6].empate;
		marrocos.children[6].textContent = JSON.parse(localStorage.getItem("times"))[6].derrota;
		marrocos.children[7].textContent = JSON.parse(localStorage.getItem("times"))[6].golsPro;
		marrocos.children[8].textContent = JSON.parse(localStorage.getItem("times"))[6].golsContra;
		marrocos.children[9].textContent = JSON.parse(localStorage.getItem("times"))[6].saldoGols;
		marrocos.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[6].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(1);
	}else{
		marrocos.children[0].textContent = "\u268B";
	}
	
	if(JSON.parse(localStorage.getItem("times"))[7].jogos != 0 ){
		portugal.children[2].textContent = JSON.parse(localStorage.getItem("times"))[7].pontos;
		portugal.children[3].textContent = JSON.parse(localStorage.getItem("times"))[7].jogos;
		portugal.children[4].textContent = JSON.parse(localStorage.getItem("times"))[7].vitoria;
		portugal.children[5].textContent = JSON.parse(localStorage.getItem("times"))[7].empate;
		portugal.children[6].textContent = JSON.parse(localStorage.getItem("times"))[7].derrota;
		portugal.children[7].textContent = JSON.parse(localStorage.getItem("times"))[7].golsPro;
		portugal.children[8].textContent = JSON.parse(localStorage.getItem("times"))[7].golsContra;
		portugal.children[9].textContent = JSON.parse(localStorage.getItem("times"))[7].saldoGols;
		portugal.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[7].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(1);
	}else{
		portugal.children[0].textContent = "\u268B";
	}
}

if(JSON.parse(localStorage.getItem("aux")) != null){
	
	if(JSON.parse(localStorage.getItem("aux"))[6].id1 != "a"){
		bJogo1a.value = JSON.parse(localStorage.getItem("aux"))[6].id1;
		bJogo1b.value = JSON.parse(localStorage.getItem("aux"))[6].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[7].id1 != "a"){
		bJogo2a.value = JSON.parse(localStorage.getItem("aux"))[7].id1;
		bJogo2b.value = JSON.parse(localStorage.getItem("aux"))[7].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[8].id1 != "a"){
		bJogo3a.value = JSON.parse(localStorage.getItem("aux"))[8].id1;
		bJogo3b.value = JSON.parse(localStorage.getItem("aux"))[8].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[9].id1 != "a"){
		bJogo4a.value = JSON.parse(localStorage.getItem("aux"))[9].id1;
		bJogo4b.value = JSON.parse(localStorage.getItem("aux"))[9].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[10].id1 != "a"){
		bJogo5a.value = JSON.parse(localStorage.getItem("aux"))[10].id1;
		bJogo5b.value = JSON.parse(localStorage.getItem("aux"))[10].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[11].id1 != "a"){
		bJogo6a.value = JSON.parse(localStorage.getItem("aux"))[11].id1;
		bJogo6b.value = JSON.parse(localStorage.getItem("aux"))[11].id2;
	}
}