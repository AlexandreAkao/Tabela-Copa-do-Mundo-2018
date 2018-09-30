// Preencher a tabale Grupo E
if(JSON.parse(localStorage.getItem("times")) != null){

	if(JSON.parse(localStorage.getItem("times"))[16].jogos != 0 ){
		brasil.children[2].textContent = JSON.parse(localStorage.getItem("times"))[16].pontos;
		brasil.children[3].textContent = JSON.parse(localStorage.getItem("times"))[16].jogos;
		brasil.children[4].textContent = JSON.parse(localStorage.getItem("times"))[16].vitoria;
		brasil.children[5].textContent = JSON.parse(localStorage.getItem("times"))[16].empate;
		brasil.children[6].textContent = JSON.parse(localStorage.getItem("times"))[16].derrota;
		brasil.children[7].textContent = JSON.parse(localStorage.getItem("times"))[16].golsPro;
		brasil.children[8].textContent = JSON.parse(localStorage.getItem("times"))[16].golsContra;
		brasil.children[9].textContent = JSON.parse(localStorage.getItem("times"))[16].saldoGols;
		brasil.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[16].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(4);
	}else{
		brasil.children[0].textContent = "\u268B";
	}

	if(JSON.parse(localStorage.getItem("times"))[17].jogos != 0 ){
		costa_rica.children[2].textContent = JSON.parse(localStorage.getItem("times"))[17].pontos;
		costa_rica.children[3].textContent = JSON.parse(localStorage.getItem("times"))[17].jogos;
		costa_rica.children[4].textContent = JSON.parse(localStorage.getItem("times"))[17].vitoria;
		costa_rica.children[5].textContent = JSON.parse(localStorage.getItem("times"))[17].empate;
		costa_rica.children[6].textContent = JSON.parse(localStorage.getItem("times"))[17].derrota;
		costa_rica.children[7].textContent = JSON.parse(localStorage.getItem("times"))[17].golsPro;
		costa_rica.children[8].textContent = JSON.parse(localStorage.getItem("times"))[17].golsContra;
		costa_rica.children[9].textContent = JSON.parse(localStorage.getItem("times"))[17].saldoGols;
		costa_rica.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[17].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(4);
	}else{
		costa_rica.children[0].textContent = "\u268B";
	}

	if(JSON.parse(localStorage.getItem("times"))[18].jogos != 0 ){
		servia.children[2].textContent = JSON.parse(localStorage.getItem("times"))[18].pontos;
		servia.children[3].textContent = JSON.parse(localStorage.getItem("times"))[18].jogos;
		servia.children[4].textContent = JSON.parse(localStorage.getItem("times"))[18].vitoria;
		servia.children[5].textContent = JSON.parse(localStorage.getItem("times"))[18].empate;
		servia.children[6].textContent = JSON.parse(localStorage.getItem("times"))[18].derrota;
		servia.children[7].textContent = JSON.parse(localStorage.getItem("times"))[18].golsPro;
		servia.children[8].textContent = JSON.parse(localStorage.getItem("times"))[18].golsContra;
		servia.children[9].textContent = JSON.parse(localStorage.getItem("times"))[18].saldoGols;
		servia.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[18].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(4);
	}else{
		servia.children[0].textContent = "\u268B";
	}

	if(JSON.parse(localStorage.getItem("times"))[19].jogos != 0 ){
		suica.children[2].textContent = JSON.parse(localStorage.getItem("times"))[19].pontos;
		suica.children[3].textContent = JSON.parse(localStorage.getItem("times"))[19].jogos;
		suica.children[4].textContent = JSON.parse(localStorage.getItem("times"))[19].vitoria;
		suica.children[5].textContent = JSON.parse(localStorage.getItem("times"))[19].empate;
		suica.children[6].textContent = JSON.parse(localStorage.getItem("times"))[19].derrota;
		suica.children[7].textContent = JSON.parse(localStorage.getItem("times"))[19].golsPro;
		suica.children[8].textContent = JSON.parse(localStorage.getItem("times"))[19].golsContra;
		suica.children[9].textContent = JSON.parse(localStorage.getItem("times"))[19].saldoGols;
		suica.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[19].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(4);
	}else{
		suica.children[0].textContent = "\u268B";
	}
}

if(JSON.parse(localStorage.getItem("aux")) != null){
	
	if(JSON.parse(localStorage.getItem("aux"))[24].id1 != "a"){
		eJogo1a.value = JSON.parse(localStorage.getItem("aux"))[24].id1;
		eJogo1b.value = JSON.parse(localStorage.getItem("aux"))[24].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[25].id1 != "a"){
		eJogo2a.value = JSON.parse(localStorage.getItem("aux"))[25].id1;
		eJogo2b.value = JSON.parse(localStorage.getItem("aux"))[25].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[26].id1 != "a"){
		eJogo3a.value = JSON.parse(localStorage.getItem("aux"))[26].id1;
		eJogo3b.value = JSON.parse(localStorage.getItem("aux"))[26].id2;
	}

	if(JSON.parse(localStorage.getItem("aux"))[27].id1 != "a"){
		eJogo4a.value = JSON.parse(localStorage.getItem("aux"))[27].id1;
		eJogo4b.value = JSON.parse(localStorage.getItem("aux"))[27].id2;
	}

	if(JSON.parse(localStorage.getItem("aux"))[28].id1 != "a"){
		eJogo5a.value = JSON.parse(localStorage.getItem("aux"))[28].id1;
		eJogo5b.value = JSON.parse(localStorage.getItem("aux"))[28].id2;
	}

	if(JSON.parse(localStorage.getItem("aux"))[29].id1 != "a"){
		eJogo6a.value = JSON.parse(localStorage.getItem("aux"))[29].id1;
		eJogo6b.value = JSON.parse(localStorage.getItem("aux"))[29].id2;
	}
}