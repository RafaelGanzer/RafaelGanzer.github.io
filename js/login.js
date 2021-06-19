function entrar(){
    
    usuario = document.getElementById('usuario').value
    alert(usuario);

    if(usuario == ""){
        alert("Informe o Usuário");

    }else if(usuario == "adm" ){
        window.location.href = "indexADM.html"; 

    }else if( usuario == "vendedor" ){
        window.location.href = "indexVendedor.html"; 

    }

    


}