window.addEventListener("load", function(){
	//-------------------
	let btnPluses = document.getElementsByClassName("btnPlus");
	let btnMinuses = document.getElementsByClassName("btnMinus");
	let qtys = document.getElementsByClassName("qty");

	for (let i =0; i< btnPluses.length; i++){
		btnPluses[i].onclick = function(){
			qtys[i].value = parseInt(qtys[i].value)+1;
		}
		
	//-----註冊 按鈕
		btnMinuses[i].onclick = function(){
		if (qtys[i].value > 0 ){
			// qtys[i].value =  parseInt(qtys[i].value)-1;
			qtys[i].value =  (qtys[i].value)-1;
		}
		}
	}

})


	// document.getElementById("btnMinus0").onclick = function(){
	// }	