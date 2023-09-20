var NomeCompleto = window.document.getElementById('nomecompleto')
var filiacao = window.document.getElementById('filiacao')
var Bilhete_Identidade = window.document.getElementById('bilhete_identidade')
var residencia = window.document.getElementById('residencia')
var bairro = window.document.getElementById('bairro')
var naturalidade = window.document.getElementById('naturalidade')
var provincia = window.document.getElementById('provincia')
var Data_Nascimento = window.document.getElementById('data_nascimento')
var sexo = window.document.getElementById('sexo')
var altura = window.document.getElementById('altura')
var Data_Emissao = window.document.getElementById('data_emisao')
var Data_Validade = window.document.getElementById('data_validade')

function verificar() {
    var dadosprocessados = window.document.getElementById('dadosprocessados')

    var recebenome= NomeCompleto.value
    dadosprocessados.innerHTML=`<p>${recebenome}</p>`

    var recebefiliacao = filiacao.value
    dadosprocessados.innerHTML += `<p>${recebefiliacao}</p>`

    var recebebilhete = Bilhete_Identidade.value
    dadosprocessados.innerHTML +=`<p>${recebebilhete}</p>`

    var nomeresidencia = residencia.value
    dadosprocessados.innerHTML += `<p>${nomeresidencia}</p>`

    var nomebairro = bairro.value
    dadosprocessados.innerHTML += `<p>${nomebairro}</p>`

    var nomenaturalidade = naturalidade.value
    dadosprocessados.innerHTML += `<p>${nomenaturalidade}</p>`
    
    var nomeprovincia = provincia.value
    dadosprocessados.innerHTML += `<p>${nomeprovincia}</p>`

    var nomedatanascimento = Data_Nascimento.value
    dadosprocessados.innerHTML = `<p>${nomedatanascimento}</p>`

    var nomesexo = sexo.value
    dadosprocessados.innerHTML += `<p>${nomesexo}</p>`

    var nomealtura = altura.value
    dadosprocessados.innerHTML += `<p>${nomealtura}</p>`

    var nomedatadeemissao = Data_Emissao.value
    dadosprocessados.innerHTML += `<p>${nomedatadeemissao}</p>`

    var nomedatadevalidade = Data_Validade.value
    dadosprocessados.innerHTML += `<p>${nomedatadevalidade}</p>`

}