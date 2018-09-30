// Preencher a tabale Grupo D
if(JSON.parse(localStorage.getItem("times")) != null){
	
	if(JSON.parse(localStorage.getItem("times"))[12].jogos != 0 ){
		argentina.children[2].textContent = JSON.parse(localStorage.getItem("times"))[12].pontos;
		argentina.children[3].textContent = JSON.parse(localStorage.getItem("times"))[12].jogos;
		argentina.children[4].textContent = JSON.parse(localStorage.getItem("times"))[12].vitoria;
		argentina.children[5].textContent = JSON.parse(localStorage.getItem("times"))[12].empate;
		argentina.children[6].textContent = JSON.parse(localStorage.getItem("times"))[12].derrota;
		argentina.children[7].textContent = JSON.parse(localStorage.getItem("times"))[12].golsPro;
		argentina.children[8].textContent = JSON.parse(localStorage.getItem("times"))[12].golsContra;
		argentina.children[9].textContent = JSON.parse(localStorage.getItem("times"))[12].saldoGols;
		argentina.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[12].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(3);
	}else{
		argentina.children[0].textContent = "\u268B";
	}
	
	if(JSON.parse(localStorage.getItem("times"))[13].jogos != 0 ){
		croacia.children[2].textContent = JSON.parse(localStorage.getItem("times"))[13].pontos;
		croacia.children[3].textContent = JSON.parse(localStorage.getItem("times"))[13].jogos;
		croacia.children[4].textContent = JSON.parse(localStorage.getItem("times"))[13].vitoria;
		croacia.children[5].textContent = JSON.parse(localStorage.getItem("times"))[13].empate;
		croacia.children[6].textContent = JSON.parse(localStorage.getItem("times"))[13].derrota;
		croacia.children[7].textContent = JSON.parse(localStorage.getItem("times"))[13].golsPro;
		croacia.children[8].textContent = JSON.parse(localStorage.getItem("times"))[13].golsContra;
		croacia.children[9].textContent = JSON.parse(localStorage.getItem("times"))[13].saldoGols;
		croacia.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[13].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(3);
	}else{
		croacia.children[0].textContent = "\u268B";
	}
	
	if(JSON.parse(localStorage.getItem("times"))[14].jogos != 0 ){
		islandia.children[2].textContent = JSON.parse(localStorage.getItem("times"))[14].pontos;
		islandia.children[3].textContent = JSON.parse(localStorage.getItem("times"))[14].jogos;
		islandia.children[4].textContent = JSON.parse(localStorage.getItem("times"))[14].vitoria;
		islandia.children[5].textContent = JSON.parse(localStorage.getItem("times"))[14].empate;
		islandia.children[6].textContent = JSON.parse(localStorage.getItem("times"))[14].derrota;
		islandia.children[7].textContent = JSON.parse(localStorage.getItem("times"))[14].golsPro;
		islandia.children[8].textContent = JSON.parse(localStorage.getItem("times"))[14].golsContra;
		islandia.children[9].textContent = JSON.parse(localStorage.getItem("times"))[14].saldoGols;
		islandia.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[14].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(3);
	}else{
		islandia.children[0].textContent = "\u268B";
	}
	
	if(JSON.parse(localStorage.getItem("times"))[15].jogos != 0 ){
		nigeria.children[2].textContent = JSON.parse(localStorage.getItem("times"))[15].pontos;
		nigeria.children[3].textContent = JSON.parse(localStorage.getItem("times"))[15].jogos;
		nigeria.children[4].textContent = JSON.parse(localStorage.getItem("times"))[15].vitoria;
		nigeria.children[5].textContent = JSON.parse(localStorage.getItem("times"))[15].empate;
		nigeria.children[6].textContent = JSON.parse(localStorage.getItem("times"))[15].derrota;
		nigeria.children[7].textContent = JSON.parse(localStorage.getItem("times"))[15].golsPro;
		nigeria.children[8].textContent = JSON.parse(localStorage.getItem("times"))[15].golsContra;
		nigeria.children[9].textContent = JSON.parse(localStorage.getItem("times"))[15].saldoGols;
		nigeria.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[15].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(3);
	}else{
		nigeria.children[0].textContent = "\u268B";
	}
}

if(JSON.parse(localStorage.getItem("aux")) != null){
	
	if(JSON.parse(localStorage.getItem("aux"))[18].id1 != "a"){
		dJogo1a.value = JSON.parse(localStorage.getItem("aux"))[18].id1;
		dJogo1b.value = JSON.parse(localStorage.getItem("aux"))[18].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[19].id1 != "a"){
		dJogo2a.value = JSON.parse(localStorage.getItem("aux"))[19].id1;
		dJogo2b.value = JSON.parse(localStorage.getItem("aux"))[19].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[20].id1 != "a"){
		dJogo3a.value = JSON.parse(localStorage.getItem("aux"))[20].id1;
		dJogo3b.value = JSON.parse(localStorage.getItem("aux"))[20].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[21].id1 != "a"){
		dJogo4a.value = JSON.parse(localStorage.getItem("aux"))[21].id1;
		dJogo4b.value = JSON.parse(localStorage.getItem("aux"))[21].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[22].id1 != "a"){
		dJogo5a.value = JSON.parse(localStorage.getItem("aux"))[22].id1;
		dJogo5b.value = JSON.parse(localStorage.getItem("aux"))[22].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[23].id1 != "a"){
		dJogo6a.value = JSON.parse(localStorage.getItem("aux"))[23].id1;
		dJogo6b.value = JSON.parse(localStorage.getItem("aux"))[23].id2;
	}
}