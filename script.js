function validacaoEmail() {
    var data = document.getElementById("email").value;
    usuario = data.substring(0, data.indexOf("@"));
    dominio = data.substring(data.indexOf("@")+ 1, data.length);
    if ((dominio.indexOf("gmail")!=-1)||
        (dominio.indexOf("outlook")!=-1)||
        (dominio.indexOf("hotmail")!=-1)&&
        (usuario.length >=1) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        document.getElementById("resposta").innerHTML="<font color='green'>Email válido</font>";
        alert("E-mail válido");
    } else{
        document.getElementById("resposta").innerHTML="<font color='#c26e6e'>E-mail inválido. Verifique o e-mail digitado</font>";
        alert("E-mail inválido");
    }
}