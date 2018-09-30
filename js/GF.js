// Preencher a tabale Grupo F
if(JSON.parse(localStorage.getItem("times")) != null){
	
	if(JSON.parse(localStorage.getItem("times"))[20].jogos != 0 ){
		alemanha.children[2].textContent = JSON.parse(localStorage.getItem("times"))[20].pontos;
		alemanha.children[3].textContent = JSON.parse(localStorage.getItem("times"))[20].jogos;
		alemanha.children[4].textContent = JSON.parse(localStorage.getItem("times"))[20].vitoria;
		alemanha.children[5].textContent = JSON.parse(localStorage.getItem("times"))[20].empate;
		alemanha.children[6].textContent = JSON.parse(localStorage.getItem("times"))[20].derrota;
		alemanha.children[7].textContent = JSON.parse(localStorage.getItem("times"))[20].golsPro;
		alemanha.children[8].textContent = JSON.parse(localStorage.getItem("times"))[20].golsContra;
		alemanha.children[9].textContent = JSON.parse(localStorage.getItem("times"))[20].saldoGols;
		alemanha.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[20].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(5);
	}else{
		alemanha.children[0].textContent = "\u268B";
	}
	
	if(JSON.parse(localStorage.getItem("times"))[21].jogos != 0 ){
		coreia.children[2].textContent = JSON.parse(localStorage.getItem("times"))[21].pontos;
		coreia.children[3].textContent = JSON.parse(localStorage.getItem("times"))[21].jogos;
		coreia.children[4].textContent = JSON.parse(localStorage.getItem("times"))[21].vitoria;
		coreia.children[5].textContent = JSON.parse(localStorage.getItem("times"))[21].empate;
		coreia.children[6].textContent = JSON.parse(localStorage.getItem("times"))[21].derrota;
		coreia.children[7].textContent = JSON.parse(localStorage.getItem("times"))[21].golsPro;
		coreia.children[8].textContent = JSON.parse(localStorage.getItem("times"))[21].golsContra;
		coreia.children[9].textContent = JSON.parse(localStorage.getItem("times"))[21].saldoGols;
		coreia.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[21].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(5);
	}else{
		coreia.children[0].textContent = "\u268B";
	}

	if(JSON.parse(localStorage.getItem("times"))[22].jogos != 0 ){
		mexico.children[2].textContent = JSON.parse(localStorage.getItem("times"))[22].pontos;
		mexico.children[3].textContent = JSON.parse(localStorage.getItem("times"))[22].jogos;
		mexico.children[4].textContent = JSON.parse(localStorage.getItem("times"))[22].vitoria;
		mexico.children[5].textContent = JSON.parse(localStorage.getItem("times"))[22].empate;
		mexico.children[6].textContent = JSON.parse(localStorage.getItem("times"))[22].derrota;
		mexico.children[7].textContent = JSON.parse(localStorage.getItem("times"))[22].golsPro;
		mexico.children[8].textContent = JSON.parse(localStorage.getItem("times"))[22].golsContra;
		mexico.children[9].textContent = JSON.parse(localStorage.getItem("times"))[22].saldoGols;
		mexico.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[22].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(5);
	}else{
		mexico.children[0].textContent = "\u268B";
	}
	
	if(JSON.parse(localStorage.getItem("times"))[23].jogos != 0 ){
		suecia.children[2].textContent = JSON.parse(localStorage.getItem("times"))[23].pontos;
		suecia.children[3].textContent = JSON.parse(localStorage.getItem("times"))[23].jogos;
		suecia.children[4].textContent = JSON.parse(localStorage.getItem("times"))[23].vitoria;
		suecia.children[5].textContent = JSON.parse(localStorage.getItem("times"))[23].empate;
		suecia.children[6].textContent = JSON.parse(localStorage.getItem("times"))[23].derrota;
		suecia.children[7].textContent = JSON.parse(localStorage.getItem("times"))[23].golsPro;
		suecia.children[8].textContent = JSON.parse(localStorage.getItem("times"))[23].golsContra;
		suecia.children[9].textContent = JSON.parse(localStorage.getItem("times"))[23].saldoGols;
		suecia.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[23].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(5);
	}else{
		suecia.children[0].textContent = "\u268B";
	}
}

if(JSON.parse(localStorage.getItem("aux")) != null){
	
	if(JSON.parse(localStorage.getItem("aux"))[30].id1 != "a"){
		fJogo1a.value = JSON.parse(localStorage.getItem("aux"))[30].id1;
		fJogo1b.value = JSON.parse(localStorage.getItem("aux"))[30].id2;
	}

	if(JSON.parse(localStorage.getItem("aux"))[31].id1 != "a"){
		fJogo2a.value = JSON.parse(localStorage.getItem("aux"))[31].id1;
		fJogo2b.value = JSON.parse(localStorage.getItem("aux"))[31].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[32].id1 != "a"){
		fJogo3a.value = JSON.parse(localStorage.getItem("aux"))[32].id1;
		fJogo3b.value = JSON.parse(localStorage.getItem("aux"))[32].id2;
	}

	if(JSON.parse(localStorage.getItem("aux"))[33].id1 != "a"){
		fJogo4a.value = JSON.parse(localStorage.getItem("aux"))[33].id1;
		fJogo4b.value = JSON.parse(localStorage.getItem("aux"))[33].id2;
	}

	if(JSON.parse(localStorage.getItem("aux"))[34].id1 != "a"){
		fJogo5a.value = JSON.parse(localStorage.getItem("aux"))[34].id1;
		fJogo5b.value = JSON.parse(localStorage.getItem("aux"))[34].id2;
	}

	if(JSON.parse(localStorage.getItem("aux"))[35].id1 != "a"){
		fJogo6a.value = JSON.parse(localStorage.getItem("aux"))[35].id1;
		fJogo6b.value = JSON.parse(localStorage.getItem("aux"))[35].id2;
	}
}