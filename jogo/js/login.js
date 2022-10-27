
validate = () =>{

    user = document.getElementById("user");
    pass = document.getElementById("pass");

    if(user.value == ""){
        alertWifi("Usuário em branco", false, 0,"img/toupeira.gif", 30);
        user.focus(); 
    }

    if(pass.value == ""){
        alertWifi("Senha em branco", false, 0,"img/toupeira.gif", 30);
        pass.focus();
    }
    
    if(user.value != "" && pass.value != ""){

        // alertWifi("Login válido, Uhuuuuulll", false, 0,"img/toupeira.gif", 30);

        readJSON(user.value, pass.value);

    }

    function readJSON(user, pass) {
        // file = "../json/users.json";
        file = "https://wilton-filho.github.io/JS-GitHub/aulas/jogo/login/json/users2.json";
        fetch(file)
            .then(response => response.json())
            .then(content => checkUser(content, user, pass))
            .catch(err => console.log("erro na leitura do JSON"));
    }

    function checkUser(content, usuario, senha) {
        var achou = false;
        for (i=0; i<content.usuarios.length; i++) {
            if ((content.usuarios[i].user == usuario) && (content.usuarios[i].pwd == senha)) {
                achou = true;
                break;
            }
        }
        if (achou)
            alertWifi("Usuário válido", false, 0, "img/toupeira.gif",30);
        else 
            alertWifi("Usuário não cadastrado ou senha inválida", false, 0, "img/toupeira.gif",30);
    }

    //https://wilton-filho.github.io/JS-GitHub/aulas/jogo/login/json/users2.json
}