// Preencher a tabale Grupo A
if(JSON.parse(localStorage.getItem("times")) != null){
	
	if(JSON.parse(localStorage.getItem("times"))[0].jogos != 0 ){
		arabia.children[2].textContent = JSON.parse(localStorage.getItem("times"))[0].pontos;
		arabia.children[3].textContent = JSON.parse(localStorage.getItem("times"))[0].jogos;
		arabia.children[4].textContent = JSON.parse(localStorage.getItem("times"))[0].vitoria;
		arabia.children[5].textContent = JSON.parse(localStorage.getItem("times"))[0].empate;
		arabia.children[6].textContent = JSON.parse(localStorage.getItem("times"))[0].derrota;
		arabia.children[7].textContent = JSON.parse(localStorage.getItem("times"))[0].golsPro;
		arabia.children[8].textContent = JSON.parse(localStorage.getItem("times"))[0].golsContra;
		arabia.children[9].textContent = JSON.parse(localStorage.getItem("times"))[0].saldoGols;
		arabia.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[0].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(0);
	}else{
		arabia.children[0].textContent = "\u268B";
	}
	
	if(JSON.parse(localStorage.getItem("times"))[1].jogos != 0 ){
		egito.children[2].textContent = JSON.parse(localStorage.getItem("times"))[1].pontos;
		egito.children[3].textContent = JSON.parse(localStorage.getItem("times"))[1].jogos;
		egito.children[4].textContent = JSON.parse(localStorage.getItem("times"))[1].vitoria;
		egito.children[5].textContent = JSON.parse(localStorage.getItem("times"))[1].empate;
		egito.children[6].textContent = JSON.parse(localStorage.getItem("times"))[1].derrota;
		egito.children[7].textContent = JSON.parse(localStorage.getItem("times"))[1].golsPro;
		egito.children[8].textContent = JSON.parse(localStorage.getItem("times"))[1].golsContra;
		egito.children[9].textContent = JSON.parse(localStorage.getItem("times"))[1].saldoGols;
		egito.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[1].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(0);
	}else{
		egito.children[0].textContent = "\u268B";
	}
	
	if(JSON.parse(localStorage.getItem("times"))[2].jogos != 0 ){
		russia.children[2].textContent = JSON.parse(localStorage.getItem("times"))[2].pontos;
		russia.children[3].textContent = JSON.parse(localStorage.getItem("times"))[2].jogos;
		russia.children[4].textContent = JSON.parse(localStorage.getItem("times"))[2].vitoria;
		russia.children[5].textContent = JSON.parse(localStorage.getItem("times"))[2].empate;
		russia.children[6].textContent = JSON.parse(localStorage.getItem("times"))[2].derrota;
		russia.children[7].textContent = JSON.parse(localStorage.getItem("times"))[2].golsPro;
		russia.children[8].textContent = JSON.parse(localStorage.getItem("times"))[2].golsContra;
		russia.children[9].textContent = JSON.parse(localStorage.getItem("times"))[2].saldoGols;
		russia.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[2].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(0);
	}else{
		russia.children[0].textContent = "\u268B";
	}
	
	if(JSON.parse(localStorage.getItem("times"))[3].jogos != 0 ){
		uruguai.children[2].textContent = JSON.parse(localStorage.getItem("times"))[3].pontos;
		uruguai.children[3].textContent = JSON.parse(localStorage.getItem("times"))[3].jogos;
		uruguai.children[4].textContent = JSON.parse(localStorage.getItem("times"))[3].vitoria;
		uruguai.children[5].textContent = JSON.parse(localStorage.getItem("times"))[3].empate;
		uruguai.children[6].textContent = JSON.parse(localStorage.getItem("times"))[3].derrota;
		uruguai.children[7].textContent = JSON.parse(localStorage.getItem("times"))[3].golsPro;
		uruguai.children[8].textContent = JSON.parse(localStorage.getItem("times"))[3].golsContra;
		uruguai.children[9].textContent = JSON.parse(localStorage.getItem("times"))[3].saldoGols;
		uruguai.children[10].textContent = (parseInt(JSON.parse(localStorage.getItem("times"))[3].pontos) / 9 * 100).toFixed(1);
		classificacao();
		vGeral(0);
	}else{
		uruguai.children[0].textContent = "\u268B";
	}
}

if(JSON.parse(localStorage.getItem("aux")) != null){
	
	if(JSON.parse(localStorage.getItem("aux"))[0].id1 != "a"){
		aJogo1a.value = JSON.parse(localStorage.getItem("aux"))[0].id1;
		aJogo1b.value = JSON.parse(localStorage.getItem("aux"))[0].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[1].id1 != "a"){
		aJogo2a.value = JSON.parse(localStorage.getItem("aux"))[1].id1;
		aJogo2b.value = JSON.parse(localStorage.getItem("aux"))[1].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[2].id1 != "a"){
		aJogo3a.value = JSON.parse(localStorage.getItem("aux"))[2].id1;
		aJogo3b.value = JSON.parse(localStorage.getItem("aux"))[2].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[3].id1 != "a"){
		aJogo4a.value = JSON.parse(localStorage.getItem("aux"))[3].id1;
		aJogo4b.value = JSON.parse(localStorage.getItem("aux"))[3].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[4].id1 != "a"){
		aJogo5a.value = JSON.parse(localStorage.getItem("aux"))[4].id1;
		aJogo5b.value = JSON.parse(localStorage.getItem("aux"))[4].id2;
	}
	
	if(JSON.parse(localStorage.getItem("aux"))[5].id1 != "a"){
		aJogo6a.value = JSON.parse(localStorage.getItem("aux"))[5].id1;
		aJogo6b.value = JSON.parse(localStorage.getItem("aux"))[5].id2;
	}
}