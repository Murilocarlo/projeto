function somente_numero(campo){
	    var digits="0123456789"
	    var campo_temp 
	    for (var i=0;i<campo.value.length;i++){
	         campo_temp=campo.value.substring(i,i+1)	
	         if (digits.indexOf(campo_temp)==-1){
		       campo.value = campo.value.substring(0,i);
		       break;
	        }
	    }
    }

				function somente_letra(campo){
	    var digits="qwertyuiopasdfghjklzxcvbnm"
	    var campo_temp
	    for (var j=0;j<campo.value.length;j++){
		     campo_temp=campo.value.substring(j,j+1)
		     if (digits.indexOf(campo_temp) ==-1){
			    campo.value = campo.value.substring(0,j);
			    break;
		    }
	    }
				}
				
function conferirtudo(){
	var senha = document.getElementById("senha").value;
	var confsenha = document.getElementById("confsenha").value;
	var email = document.getElementById('email').value;
	var CPF1 = document.getElementById("cpfgo").value;
	var valido = document.getElementById("validador");
	var emailval = document.getElementById("validadoremail");
	var valsenha = document.getElementById("valsenha");
	var validasenha = document.getElementById("validasenha");

	//VALIDANDO CPF

	CPF1 = CPF1.replace('.','');
	var CPF2 = CPF1;
	CPF2 = CPF2.replace('.','');
	var CPF = CPF2;
	CPF = CPF.replace('-','');

	//variaveis do calculo de validação
	var Soma;
	var Resto;
	Soma = 0;


	if(CPF === ""){
		valido.value = "CPF não digitado" ;
		valido.style.backgroundColor="#ff9191";
		valido.style.borderColor="red";
		return false;
	}
	else{
		for (i=1; i<=9; i++) Soma = Soma + parseInt(CPF.substring(i-1, i)) * (11 - i);
		Resto = (Soma * 10) % 11;
		if ((Resto == 10) || (Resto == 11)) {
			Resto = 0;
		}
		if (Resto != parseInt(CPF.substring(9, 10)) || CPF == "00000000000" || CPF == "11111111111" || CPF == "22222222222" || 
			CPF == "33333333333" || CPF == "44444444444" || CPF == "55555555555" || CPF == "66666666666" || CPF == "77777777777" || 
			CPF == "88888888888" || CPF == "99999999999") {
			valido.value = "CPF invalido";
			valido.style.backgroundColor="#ff9191";
			valido.style.borderColor="red";
			return false;
		}
		else{
			Soma = 0;
			for (i = 1; i <= 10; i++) Soma = Soma + parseInt(CPF.substring(i-1, i)) * (12 - i);
			Resto = (Soma * 10) % 11;

			if ((Resto == 10) || (Resto == 11)) {
				Resto = 0;
			}
			if (Resto != parseInt(CPF.substring(10, 11) ) ) {
				valido.value = "CPF invalido";
				valido.style.backgroundColor="#ff9191";
				valido.style.borderColor="red";
				return false;
			}
			else{
			
				valido.value = "CPF valido";
				valido.style.backgroundColor="#86ff74";
				valido.style.borderColor="green";
							}
		}
	}



	// VALIDANDO EMAIL
	var exclude=/[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;
	var check=/@[\w\-]+\./;
	var checkend=/\.[a-zA-Z]{2,3}$/;
	
	if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){
	emailval.value = "Email iInvalido" ;
	emailval.style.backgroundColor="#ff9191";
    emailval.style.borderColor="red";
	return false;
	}
	else {
	emailval.value = "Email válido" ;
	emailval.style.backgroundColor="#86ff74";
	emailval.style.borderColor="green";
	}


    //validando senha 
	var regex = /^(?=(?:.*?[A-Z]){0})(?=(?:.*?[0-9]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;

	if(senha.length < 7)
	{
	valsenha.value = "A senha deve conter no minímo 7 digitos!" ;
	valsenha.style.backgroundColor="#ff9191";
	valsenha.style.borderColor="red";
	return false;

	}
	else {
	if(!regex.exec(senha)){
		valsenha.value = "A senha deve conter no mínimo 2 números e 1 caractere especial" ;
		valsenha.style.backgroundColor="#ff9191";
		valsenha.style.borderColor="red";
		return false;
	}
	else{
		valsenha.value = "Senha Valida" ;
		valsenha.style.backgroundColor="#86ff74";
		valsenha.style.borderColor="green";
	

	if(senha == confsenha){
		validasenha.value = "As senhas conferem" ;
		validasenha.style.backgroundColor="#86ff74";
		valconfsenha.style.borderColor="green";
	}
	else
	{
		validasenha.value = "Senhas Diferentes" ;
		validasenha.style.backgroundColor="#ff9191";
		validasenha.style.borderColor="red";
		return false;
	}
	}
	}
	}