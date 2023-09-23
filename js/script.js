/*Programando ás interações com o utilizador*/
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

var Data_Emissao = window.document.getElementById('data_emissao')

var Data_Caducidade = window.document.getElementById('data_caducidade')

function verificar() {
    var nome_processado = window.document.getElementById('nome_processado')
    var recebe_nome= NomeCompleto.value
    nome_processado.innerHTML=`<p>${recebe_nome}</p>`

    var filiacao_processado = window.document.getElementById('filiacao_processado')
    var recebe_filiacao = filiacao.value
    filiacao_processado.innerHTML = `<p>${recebe_filiacao}</p>`

    var bilhete_processado = window.document.getElementById('bilhete_processado')
    var recebe_bilhete = Bilhete_Identidade.value
    bilhete_processado.innerHTML =  `<p>${recebe_bilhete}</p>`

    var residencia_processado = window.document.getElementById('residencia_processado') 
    var recebe_residencia_processado =  residencia.value
    residencia_processado.innerHTML = `<p>${recebe_residencia_processado}</p>`

    var bairro_processado = window.document.getElementById('bairro_processado')
    var recebe_bairro_processado = bairro.value
    bairro_processado.innerHTML= `<p>${recebe_bairro_processado}</p>`

    var naturalidade_processado = window.document.getElementById('naturalidade_processado')
    var recebe_naturalidade_processado= naturalidade.value
    naturalidade_processado.innerHTML= `<p>${recebe_naturalidade_processado}</p>`

    var provincia_processado = window.document.getElementById('provincia_processado')
    var recebe_provincia_processado= provincia.value
    provincia_processado.innerHTML= `<p>${recebe_provincia_processado}</p>`

    var nascimento_processado = window.document.getElementById('nascimento_processado')
    var recebe_nascimento_processado= Data_Nascimento.value
    nascimento_processado.innerHTML= `<p>${recebe_nascimento_processado}</p>`

    var sexo_processado = window.document.getElementById('sexo_processado')
    var recebe_sexo_processado= sexo.value
    sexo_processado.innerHTML= `<p>${recebe_sexo_processado}</p>`

    var altura_processdo = window.document.getElementById('altura_processdo')
    var recebe_altura_processado= altura.value
    altura_processado.innerHTML= `<p>${recebe_altura_processado}</p>`

    var emitido_processado = window.document.getElementById('emitido_processado')
    var recebe_emitido_processado= Data_Emissao.value
    emitido_processado.innerHTML= `<p>${recebe_emitido_processado}</p>`


    var data_caducidade_processado = window.document.getElementById('data_caducidade_processado')
    var recebe_data_caducidade_processado= Data_Caducidade.value
    data_caducidade_processado.innerHTML= `<p>${recebe_data_caducidade_processado}</p>`

    var dadosverificados = window.document.getElementById('dadosverificados')
    dadosverificados.innerHTML='Os seus dados foram verificados, com sucesso!'
}   