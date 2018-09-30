// Preencher a tabale Grupo G
if(JSON.parse(localStorage.getItem("times")) != null){

	if(JSON.parse(localStorage.getItem("times"))[24].jogos != 0 ){
		belgica.children[2].textContent = JSON.parse(localStorage.getItem("times"))[24].pontos;
		belgica.children[3].textContent = JSON.parse(localStorage.getItem("times"))[24].jogos;
		belgica.children[4].textContent = JSON.parse(localStorage.getItem("times"))[24].vitoria;
		belgica.children[5].textContent = JSON.parse(localStorage.getItem("times"))[24].empate;
		belgica.children[6].textContent = JSON.parse(localStorage.getItem("times"))[24].derrota;
		belgica.children[7].textContent = JSON.parse(localStorage.getItem("times"))[24].golsPro;
		belgica.children[8].textContent = JSON.parse(localStorage.getItem("times"))[24].golsContra;
		belgica.children[9].textContent = JSON.parse(localStorage.getItem("times"))[24].saldoGols;
		belgica.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[24].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(6);
	}else{
		belgica.children[0].textContent = "\u268B";
	}

	if(JSON.parse(localStorage.getItem("times"))[25].jogos != 0 ){
		inglaterra.children[2].textContent = JSON.parse(localStorage.getItem("times"))[25].pontos;
		inglaterra.children[3].textContent = JSON.parse(localStorage.getItem("times"))[25].jogos;
		inglaterra.children[4].textContent = JSON.parse(localStorage.getItem("times"))[25].vitoria;
		inglaterra.children[5].textContent = JSON.parse(localStorage.getItem("times"))[25].empate;
		inglaterra.children[6].textContent = JSON.parse(localStorage.getItem("times"))[25].derrota;
		inglaterra.children[7].textContent = JSON.parse(localStorage.getItem("times"))[25].golsPro;
		inglaterra.children[8].textContent = JSON.parse(localStorage.getItem("times"))[25].golsContra;
		inglaterra.children[9].textContent = JSON.parse(localStorage.getItem("times"))[25].saldoGols;
		inglaterra.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[25].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(6);
	}else{
		inglaterra.children[0].textContent = "\u268B";
	}

	if(JSON.parse(localStorage.getItem("times"))[26].jogos != 0 ){
		panama.children[2].textContent = JSON.parse(localStorage.getItem("times"))[26].pontos;
		panama.children[3].textContent = JSON.parse(localStorage.getItem("times"))[26].jogos;
		panama.children[4].textContent = JSON.parse(localStorage.getItem("times"))[26].vitoria;
		panama.children[5].textContent = JSON.parse(localStorage.getItem("times"))[26].empate;
		panama.children[6].textContent = JSON.parse(localStorage.getItem("times"))[26].derrota;
		panama.children[7].textContent = JSON.parse(localStorage.getItem("times"))[26].golsPro;
		panama.children[8].textContent = JSON.parse(localStorage.getItem("times"))[26].golsContra;
		panama.children[9].textContent = JSON.parse(localStorage.getItem("times"))[26].saldoGols;
		panama.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[26].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(6);
	}else{
		panama.children[0].textContent = "\u268B";
	}

	if(JSON.parse(localStorage.getItem("times"))[27].jogos != 0 ){
		tunisia.children[2].textContent = JSON.parse(localStorage.getItem("times"))[27].pontos;
		tunisia.children[3].textContent = JSON.parse(localStorage.getItem("times"))[27].jogos;
		tunisia.children[4].textContent = JSON.parse(localStorage.getItem("times"))[27].vitoria;
		tunisia.children[5].textContent = JSON.parse(localStorage.getItem("times"))[27].empate;
		tunisia.children[6].textContent = JSON.parse(localStorage.getItem("times"))[27].derrota;
		tunisia.children[7].textContent = JSON.parse(localStorage.getItem("times"))[27].golsPro;
		tunisia.children[8].textContent = JSON.parse(localStorage.getItem("times"))[27].golsContra;
		tunisia.children[9].textContent = JSON.parse(localStorage.getItem("times"))[27].saldoGols;
		tunisia.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[27].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(6);
	}else{
		tunisia.children[0].textContent = "\u268B";
	}
}

if(JSON.parse(localStorage.getItem("aux")) != null){

	if(JSON.parse(localStorage.getItem("aux"))[36].id1 != "a"){
		gJogo1a.value = JSON.parse(localStorage.getItem("aux"))[36].id1;
		gJogo1b.value = JSON.parse(localStorage.getItem("aux"))[36].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[37].id1 != "a"){
		gJogo2a.value = JSON.parse(localStorage.getItem("aux"))[37].id1;
		gJogo2b.value = JSON.parse(localStorage.getItem("aux"))[37].id2;
	}

	if(JSON.parse(localStorage.getItem("aux"))[38].id1 != "a"){
		gJogo3a.value = JSON.parse(localStorage.getItem("aux"))[38].id1;
		gJogo3b.value = JSON.parse(localStorage.getItem("aux"))[38].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[39].id1 != "a"){
		gJogo4a.value = JSON.parse(localStorage.getItem("aux"))[39].id1;
		gJogo4b.value = JSON.parse(localStorage.getItem("aux"))[39].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[40].id1 != "a"){
		gJogo5a.value = JSON.parse(localStorage.getItem("aux"))[40].id1;
		gJogo5b.value = JSON.parse(localStorage.getItem("aux"))[40].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[41].id1 != "a"){
		gJogo6a.value = JSON.parse(localStorage.getItem("aux"))[41].id1;
		gJogo6b.value = JSON.parse(localStorage.getItem("aux"))[41].id2;
	}
}