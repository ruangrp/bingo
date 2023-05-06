 $(document).ready(function(){
	 
	var contB = 0;
	var contI = 0;
	var contN = 0;
	var contG = 0;
	var contO = 0;
	
	var contTotal = 0; 
	var resultado = "erro";
	var letra = "";
	
	var numeros = new Array();
	 
	$('#getRandom').click(function(){
		
		/* Desabilita botao */
		document.getElementById("getRandom").style.display = "none";
		
		/* Sorteia */
		getRandom();

		/* Habilita botao */
		var timerB = setTimeout(function() {
			document.getElementById("getRandom").style.display = "";
			
		}, 4000);



		
	});
	 
    function getRandom() {
		
		number = getNumber(numeros);
					
			if(number <= 15){
				contB ++;
				contTotal ++;
				letra = "B"
				resultado = "B" + contB;
			}
			if(number > 15 && number <= 30){
				contI ++;
				contTotal ++;
				letra = "I";
				resultado = "I" + contI;
			}
			if(number > 30 && number <= 45){
				contN ++;
				contTotal ++;
				letra = "N";
				resultado = "N" + contN;
			}
			if(number > 45 && number <= 60){
				contG ++;
				contTotal ++;
				letra = "G";
				resultado = "G" + contG;
			}
			if(number > 60 && number <= 75){
				contO ++;
				contTotal ++;
				letra = "O";
				resultado = "O" + contO;
			}
			
			if(number <= 0 || number > 75){
				$('#erro').html("Acabou! " + number);
			}else{
				
				numeros[contTotal] = number;

				console.log(numeros);
				localStorage.setItem("ultimo_sorteio_bkp", numeros);

				var seconds = 76;
    			var timer = setInterval(function() {
       				seconds--;
        			if(seconds == number) {
            			document.getElementById("erro").innerHTML = number;
            			$('#' + resultado).html(number);
            			clearInterval(timer);            
       				} else {
            			document.getElementById("erro").innerHTML = seconds;
                    }
				}, 20);
			}
			
	}


	
	function getNumber(numeros){

		/*se o array ainda nao tem 75 sorteia um aleatorio*/
		if (numeros.length <= 75){
		numero = Math.floor(Math.random()*75)+1;
				
		/*se o numero existe no array numeros, sorteia outro*/
		while (numeros.indexOf(numero) >=0){		
			numero = Math.floor(Math.random()*75)+1;
		}
		
		return numero;
	}
	return numeros.length;
	}
 });