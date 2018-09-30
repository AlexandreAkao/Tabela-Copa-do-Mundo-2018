// Preencher a tabale Grupo H
if(JSON.parse(localStorage.getItem("times")) != null){

	if(JSON.parse(localStorage.getItem("times"))[28].jogos != 0 ){
		colombia.children[2].textContent = JSON.parse(localStorage.getItem("times"))[28].pontos;
		colombia.children[3].textContent = JSON.parse(localStorage.getItem("times"))[28].jogos;
		colombia.children[4].textContent = JSON.parse(localStorage.getItem("times"))[28].vitoria;
		colombia.children[5].textContent = JSON.parse(localStorage.getItem("times"))[28].empate;
		colombia.children[6].textContent = JSON.parse(localStorage.getItem("times"))[28].derrota;
		colombia.children[7].textContent = JSON.parse(localStorage.getItem("times"))[28].golsPro;
		colombia.children[8].textContent = JSON.parse(localStorage.getItem("times"))[28].golsContra;
		colombia.children[9].textContent = JSON.parse(localStorage.getItem("times"))[28].saldoGols;
		colombia.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[28].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(7);
	}else{
		colombia.children[0].textContent = "\u268B";
	}
	
	if(JSON.parse(localStorage.getItem("times"))[29].jogos != 0 ){
		japao.children[2].textContent = JSON.parse(localStorage.getItem("times"))[29].pontos;
		japao.children[3].textContent = JSON.parse(localStorage.getItem("times"))[29].jogos;
		japao.children[4].textContent = JSON.parse(localStorage.getItem("times"))[29].vitoria;
		japao.children[5].textContent = JSON.parse(localStorage.getItem("times"))[29].empate;
		japao.children[6].textContent = JSON.parse(localStorage.getItem("times"))[29].derrota;
		japao.children[7].textContent = JSON.parse(localStorage.getItem("times"))[29].golsPro;
		japao.children[8].textContent = JSON.parse(localStorage.getItem("times"))[29].golsContra;
		japao.children[9].textContent = JSON.parse(localStorage.getItem("times"))[29].saldoGols;
		japao.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[29].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(7);
	}else{
		japao.children[0].textContent = "\u268B";
	}
	
	if(JSON.parse(localStorage.getItem("times"))[30].jogos != 0 ){
		polonia.children[2].textContent = JSON.parse(localStorage.getItem("times"))[30].pontos;
		polonia.children[3].textContent = JSON.parse(localStorage.getItem("times"))[30].jogos;
		polonia.children[4].textContent = JSON.parse(localStorage.getItem("times"))[30].vitoria;
		polonia.children[5].textContent = JSON.parse(localStorage.getItem("times"))[30].empate;
		polonia.children[6].textContent = JSON.parse(localStorage.getItem("times"))[30].derrota;
		polonia.children[7].textContent = JSON.parse(localStorage.getItem("times"))[30].golsPro;
		polonia.children[8].textContent = JSON.parse(localStorage.getItem("times"))[30].golsContra;
		polonia.children[9].textContent = JSON.parse(localStorage.getItem("times"))[30].saldoGols;
		polonia.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[30].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(7);
	}else{
		polonia.children[0].textContent = "\u268B";
	}

	if(JSON.parse(localStorage.getItem("times"))[31].jogos != 0 ){
		senegal.children[2].textContent = JSON.parse(localStorage.getItem("times"))[31].pontos;
		senegal.children[3].textContent = JSON.parse(localStorage.getItem("times"))[31].jogos;
		senegal.children[4].textContent = JSON.parse(localStorage.getItem("times"))[31].vitoria;
		senegal.children[5].textContent = JSON.parse(localStorage.getItem("times"))[31].empate;
		senegal.children[6].textContent = JSON.parse(localStorage.getItem("times"))[31].derrota;
		senegal.children[7].textContent = JSON.parse(localStorage.getItem("times"))[31].golsPro;
		senegal.children[8].textContent = JSON.parse(localStorage.getItem("times"))[31].golsContra;
		senegal.children[9].textContent = JSON.parse(localStorage.getItem("times"))[31].saldoGols;
		senegal.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[31].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(7);
	}else{
		senegal.children[0].textContent = "\u268B";
	}
}

if(JSON.parse(localStorage.getItem("aux")) != null){
	
	if(JSON.parse(localStorage.getItem("aux"))[42].id1 != "a"){
		hJogo1a.value = JSON.parse(localStorage.getItem("aux"))[42].id1;
		hJogo1b.value = JSON.parse(localStorage.getItem("aux"))[42].id2;
	}

	if(JSON.parse(localStorage.getItem("aux"))[43].id1 != "a"){
		hJogo2a.value = JSON.parse(localStorage.getItem("aux"))[43].id1;
		hJogo2b.value = JSON.parse(localStorage.getItem("aux"))[43].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[44].id1 != "a"){
		hJogo3a.value = JSON.parse(localStorage.getItem("aux"))[44].id1;
		hJogo3b.value = JSON.parse(localStorage.getItem("aux"))[44].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[45].id1 != "a"){
		hJogo4a.value = JSON.parse(localStorage.getItem("aux"))[45].id1;
		hJogo4b.value = JSON.parse(localStorage.getItem("aux"))[45].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[46].id1 != "a"){
		hJogo5a.value = JSON.parse(localStorage.getItem("aux"))[46].id1;
		hJogo5b.value = JSON.parse(localStorage.getItem("aux"))[46].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[47].id1 != "a"){
		hJogo6a.value = JSON.parse(localStorage.getItem("aux"))[47].id1;
		hJogo6b.value = JSON.parse(localStorage.getItem("aux"))[47].id2;
	}
}