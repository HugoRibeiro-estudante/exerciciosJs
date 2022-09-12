function testar(){

    let login = document.querySelector("#login").value;
    let senha = document.querySelector("#senha").value;
    let confsenha = document.querySelector("#confsenha").value;


    if(login == ""){

        alert("O campo LOGIN não está preenchido");
        login.focus();

    }else{       

        if(senha == ""){
            alert("Senha está em branco. Favor informa-lá");
            senha.focus();
        }else if(confsenha == ""){
            alert("Confirmação de senha está em branco. Favor informa-lá");
            confsenha.focus();

        }else if(senha === confsenha){
            
            alert("Logado, senhas iguais");
            
        }else{
            alert("As senhas não conferem");
                  
            senha = "";
            confsenha = "";

        }
    }    
 }   
 

